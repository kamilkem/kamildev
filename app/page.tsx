import { notionConfig } from "@/config/notionConfig"
import {List, Page} from "@/types/notion";

async function getPages(): Promise<List<Page>> {
    const response = await fetch(`${notionConfig.url}/search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${notionConfig.secret}`,
            'Notion-Version': notionConfig.version,
        },
        body: JSON.stringify({
            'query': '',
            'sort': {
                'direction': 'ascending',
                'timestamp': 'last_edited_time',
            },
        })
    })
    return response.json()
}

export default async function Home() {
    const pagesList = await getPages()
    console.log(pagesList)

    return (
        <div>
            {pagesList.results.map((page) => (
                <h1 key={page.id}>{page.id}</h1>
            ))}
        </div>
    );
}
