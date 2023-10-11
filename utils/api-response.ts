
export interface PostResponse {
    id: number;
    title: string;
    content: string;
    created_at: string;
    update_at: string;
    thumbnail: string;

}

export interface PostPageResponse {
    items : PostResponse[];
}

export interface SeriesResponse {
    id: number;
    title: string;
    description: string;
}