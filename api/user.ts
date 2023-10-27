import {createUrl,createPayload} from "~/utils/api-utils";
import {UserResponse} from "~/utils/api-response";

export const getUser = async (uid:string): Promise<UserResponse| null> => {
    const url = '/api/v1/user/' + uid;
    const {data, pending, error, refresh} = await useFetch<UserResponse>(
        createUrl(url),
        await createPayload(true)
    )
    if (error.value) {
        return null
    } else {
        return data.value
    }
}