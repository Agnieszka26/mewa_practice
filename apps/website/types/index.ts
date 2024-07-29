export type Review = {
    id: string;
    content: string;
    author: string;
    points: string;
    created: string
}

export type AirtableReviewResponseDto = {
    records: {
        id: string;
        fields: {
            content: string;
            author: string;
            points: string;
            Created: string
        }
    }[]
}
