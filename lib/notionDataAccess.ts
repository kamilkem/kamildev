import {notionConfig} from "@/config/notionConfig";

export interface FetchResponse<TData> {
    data: TData
    text: string
}

export const fetchApi = async <TData>(
    endpoint: string,
    init: RequestInit = {}
): Promise<FetchResponse<TData> | undefined> => {
    const response = await fetch(`${notionConfig.url}/${endpoint}`, init)

    if (response.status === 204) return

    const text = await response.text()
    const json = JSON.parse(text)
    if (response.ok) {
        return {
            data: json,
            text: text
        }
    }
}
