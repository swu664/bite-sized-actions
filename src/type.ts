type Recurrance = {
    recurranceRule: string
    recurranceStart: Date
    recurranceEnd: Date
    recurranceTimezone: string
}

export type Task = {
    id: number
    title: string
    deadline: string | null
    complete: boolean
    completedAt: string | null
    recurrance: Recurrance | null
    children?: Task[]
}