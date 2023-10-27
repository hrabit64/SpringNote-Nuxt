import {ImageResponse} from "~/utils/api-response";
import {createUrl} from "~/utils/api-utils";

export const uploadImage = async (form:FormData): Promise<ImageResponse | string> => {
    const url = '/api/v1/image';
    const user = await getCurrentUser()
    const token = await user.getIdToken()

    const {data, pending, error, refresh} = await useFetch<ImageResponse>(
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