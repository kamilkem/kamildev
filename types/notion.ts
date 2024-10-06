export type HasObject = {
    object: string
}

export type HasId = {
    id: string
}

export type HasType = {
    type: string
}

export type HasCreatedTime = {
    created_time: Date
}

export type HasLastEditedTime = {
    last_edited_time: Date
}

export type Item = HasObject & HasId

export type Auditable = HasCreatedTime & HasLastEditedTime

export type Property = HasType & HasId

export type Element = HasType

export type Text = Element & {

}

export type Title = Property & {
    title: Element[]
}

export type List<T> = HasObject & {
    results: T[]
    next_cursor: string|null
    has_more: boolean
}

export type Page = Item & Auditable & {
    properties: {
        title: Title
    }
}
