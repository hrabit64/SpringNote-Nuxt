export interface SeriesResponse {
    id: number;
    title: string;
    description: string;
}

export interface PostResponse {
    id: number;
    title: string;
    content: string;
    created_at: string;
    update_at: string;
    thumbnail: string;
    series: SeriesResponse;

}

export interface PageInfo {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
}

export interface PostPageResponse {
    post_items : PostResponse[];
    page: PageInfo;
}

export interface UserResponse {
    uid: string;
    name: string;
    admin: boolean;
}

export interface SeriesResponse {
    id: number;
    title: string;
    description: string;
}

export interface SeriesPageResponse {
    _embedded: {
        series_items: SeriesResponse[];
    }
    page: PageInfo;
}

export interface ImageResponse {
    id: number;
    name: string;
}