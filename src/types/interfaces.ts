// interface for source
interface NewsSource {
    id: number | null
    name: string
}

// interface for the data
interface NewsData {
    source: NewsSource
    author: string
    title: string
    description: string
    urlToImage: string
    publishedAt: string
    content: string
}

// interface for response
export interface NewsDataOverall {
    status: string
    totalResults: number
    articles: NewsData[]
}

// // axios request interface
// export interface ApiResponse {
//     config: any
//     data: NewsDataOverall
//     headers: any
//     request: any
// }