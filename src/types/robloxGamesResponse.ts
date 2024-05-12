export interface robloxGamesResponse{
    previousPageCursor?: string,
    nextPageCursor?: string,
    data: [
        {
            id: number,
            name: string,
            creator: {
                id: number,
                type: number
                name: string
            },
            rootPlace: {
                id: number,
                type: number,
                name: string
            },
            created: Date,
            updates: Date,
            placeVisits: number
        }
    ]
}