import { z } from "zod";

export const WorkModeSchema = z.enum(["WFO", "HYBRID", "REMOTE"]);

export const CompanySchema = z.object({
    id: z.string().uuid().optional(),
    name: z.string().min(1),
    logoUrl: z.string().url().optional(),
    website: z.string().url().optional(),
    type: z.enum(["BUMN", "TECH", "STARTUP", "NGO", "OTHER"]).default("OTHER")
});

export const JobSchema = z.object({
    id: z.string().uuid().optional(),
    title: z.string().min(1),
    companyName: z.string().min(1),
    companyId: z.string().uuid().optional(),
    location: z.string().min(1),
    workMode: WorkModeSchema,
    durationMonths: z.number().int().min(1).max(24).optional(),
    category: z.string().optional(),
    source: z.string().min(1),        // e.g. "career-page", "job-board", "instagram"
    sourceUrl: z.string().url(),
    applyUrl: z.string().url().optional(),
    postedAt: z.string().optional(),  // ISO string
    fetchedAt: z.string().optional()  // ISO string
});

export type Job = z.infer<typeof JobSchema>;
export type Company = z.infer<typeof CompanySchema>;
