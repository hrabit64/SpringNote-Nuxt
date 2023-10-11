import {createUrl} from "~/utils/api-utils";
import {PostPageResponse} from "~/utils/api-response";

export const getAllPost = async (size: number): Promise<PostPageResponse| null> => {
    const url = '/api/v1/post?size=' + size;
    const {data, pending, error, refresh} = await useFetch<PostPageResponse>(
        createUrl(url)
    )
    if (error.value) {
        return null
    } else {
        return data.value
    }
}