import {
    signInWithRedirect,
    GoogleAuthProvider,
    GithubAuthProvider,
} from 'firebase/auth'
import { useFirebaseAuth } from 'vuefire'
import {useUserStore} from "~/store/user";

export const signInRedirect = (provider:string) =>{
    const auth = useFirebaseAuth()
    const targetProvider = (provider === 'google') ? new GoogleAuthProvider() : new GithubAuthProvider()
    if (auth) {
        signInWithRedirect(auth, targetProvider).catch((error) => {
            console.log(error)
        })
    }
}

// code goes here
export const logout = async () => {
    const userStore = useUserStore()
    userStore.clearUser()
    const auth = useFirebaseAuth()
    if (auth) {
        await auth.signOut()
    }
    console.log('logout')
}
