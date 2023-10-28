import {createUrl,createPayload} from "~/utils/api-utils";
import {PostPageResponse, PostResponse} from "~/utils/api-response";
import axios from "axios";

export const getAllPost = async (size: number): Promise<PostPageResponse| null> => {
    const url = '/api/v1/post?size=' + size +'&sort=createAt,desc';
    const data = await axios.get<PostPageResponse>(createUrl(url))
    if (data.status !== 200) {
        return null
    } else {
        return data.data
    }
}

export const getAllPostWithSearch = async (size: number,search: string): Promise<PostPageResponse| null> => {
    const url = '/api/v1/post/search?size=' + size +'&sort=id,desc&title='+search+'&content='+search;
    const data = await axios.get<PostPageResponse>(createUrl(url))
    if (data.status !== 200) {
        return null
    } else {
        return data.data
    }
}
export const getAllPostWithSeries = async (size: number,series:number): Promise<PostPageResponse| null> => {
    const url = '/api/v1/post?size=' + size +'&sort=createAt,desc&series='+series;
    const data = await axios.get<PostPageResponse>(createUrl(url))
    if (data.status !== 200) {
        return null
    } else {
        return data.data
    }
}

export const getPost = async (id: number): Promise<PostResponse| null> => {
    const url = '/api/v1/post/' + id+"?render=false";
    const {data, pending, error, refresh} = await useFetch<PostResponse>(createUrl(url))
    if (error.value) {
        return error.value.message
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


export const deletePost = async (id:number): Promise<PostResponse| string> => {
    const url = '/api/v1/post/'+id;
    const user = await getCurrentUser()
    const token = await user.getIdToken()

    const {data, pending, error, refresh} = await useFetch<PostResponse>(
        createUrl(url),
        {
            method: 'DELETE',
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