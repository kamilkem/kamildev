import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        NOTION_URL: z.string().url(),
        NOTION_SECRET: z.string().min(1),
        NOTION_VERSION: z.string().min(1),
    },
    runtimeEnv: {
        NOTION_URL: process.env.NOTION_URL,
        NOTION_SECRET: process.env.NOTION_SECRET,
        NOTION_VERSION: process.env.NOTION_VERSION,
    }
})
