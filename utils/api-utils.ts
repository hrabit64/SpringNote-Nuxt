export const createUrl = (url: string):string => {
    const runtimeConfig = useRuntimeConfig();
    const baseUrl = runtimeConfig.public.BASE_URL;
    return baseUrl + url
}

export const createPayload = async (isLazy:Boolean) : Promise<object> => {
    const user = await getCurrentUser()

    let token = null;
    if(user !== null && user !== undefined){
        token = await user.getIdToken()
    }

    return {
        headers: {
            Authorization: `Bearer ${token}`
        },
        lazy: isLazy
    }
}