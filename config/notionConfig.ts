import { NotionConfig } from "@/types/config"
import { env } from "@/env.mjs"

export const notionConfig: NotionConfig = {
    url: env.NOTION_URL,
    secret: env.NOTION_SECRET,
    version: env.NOTION_VERSION,
}
