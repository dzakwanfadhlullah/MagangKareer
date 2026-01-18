import "dotenv/config";
import { Queue, Worker } from "bullmq";
import IORedis from "ioredis";
import { prisma } from "@magangkareer/db";
import { JobSchema } from "@magangkareer/shared";

const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";
const connection = new IORedis(redisUrl, { maxRetriesPerRequest: null });

export const ingestQueue = new Queue("ingest:source", { connection });

type IngestJobData = {
    source: string;
    url: string;
};

async function upsertJob(raw: any) {
    const parsed = JobSchema.safeParse(raw);
    if (!parsed.success) {
        console.error("Invalid job payload:", parsed.error.flatten());
        return;
    }

    const job = parsed.data;

    await prisma.job.upsert({
        where: { sourceUrl: job.sourceUrl },
        update: {
            title: job.title,
            companyName: job.companyName,
            location: job.location,
            workMode: job.workMode,
            durationMonths: job.durationMonths ?? null,
            category: job.category ?? null,
            source: job.source,
            applyUrl: job.applyUrl ?? null,
            fetchedAt: new Date()
        },
        create: {
            title: job.title,
            companyName: job.companyName,
            location: job.location,
            workMode: job.workMode,
            durationMonths: job.durationMonths ?? null,
            category: job.category ?? null,
            source: job.source,
            sourceUrl: job.sourceUrl,
            applyUrl: job.applyUrl ?? null,
            fetchedAt: new Date()
        }
    });
}

async function fakeScrapeExample(url: string) {
    return {
        title: "UI/UX Designer Intern",
        companyName: "Contoh Company",
        location: "Jakarta",
        workMode: "HYBRID",
        durationMonths: 6,
        category: "Design",
        source: "example",
        sourceUrl: url,
        applyUrl: url
    };
}

new Worker<IngestJobData>(
    "ingest:source",
    async (job) => {
        const { url } = job.data;
        const scraped = await fakeScrapeExample(url);
        await upsertJob(scraped);
        return { ok: true };
    },
    { connection }
);

console.log("Worker running. Redis:", redisUrl);
