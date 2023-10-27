import {createUrl} from "~/utils/api-utils";
import {PostPageResponse, PostResponse} from "~/utils/api-response";

export const getAllPost = async (size: number): Promise<PostPageResponse| null> => {
    const url = '/api/v1/post?size=' + size + 'sort=createdAt,desc';
    const {data, pending, error, refresh} = await useFetch<PostPageResponse>(
        createUrl(url)
    )
    if (error.value) {
        return null
    } else {
        return data.value
    }
}

export const uploadPost = async (form:FormData): Promise<PostResponse| string> => {
    const url = '/api/v1/post/upload';
    const user = await getCurrentUser()
    const token = await user.getIdToken()

    const {data, pending, error, refresh} = await useFetch<PostResponse>(
        createUrl(url),
        {
            method: 'POST',
            body: form,
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    )
    if (error.value) {
        return error.value.message
    } else {
        return data.value
    }
}