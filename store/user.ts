import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const name = ref('')
    const uid = ref('')
    const isAdmin = ref(false)

    const loadUser = () => {
        name.value = localStorage.getItem('springnote-user-name') || ''
        uid.value = localStorage.getItem('springnote-user-uid') || ''
        isAdmin.value = Boolean(localStorage.getItem('springnote-user-isAdmin') || 'false')
    }

    const saveUser = (name:string, uid:string, isAdmin:boolean) => {
        localStorage.setItem('springnote-user-name', name)
        localStorage.setItem('springnote-user-uid', uid)
        localStorage.setItem('springnote-user-isAdmin', String(isAdmin))
        loadUser()
    }


    const getIsAdmin = ():boolean => {
        return isAdmin.value
    }

    const getUid = ():string => {
        return uid.value
    }

    const getName = ():string => {
        return name.value
    }

    const getUser = () => {
        return { name: name.value, uid: uid.value, isAdmin: isAdmin.value}
    }

    const isLogin = () => {
        return Boolean(name.value)
    }

    const clearUser = () => {
        localStorage.removeItem('springnote-user-name')
        localStorage.removeItem('springnote-user-uid')
        localStorage.removeItem('springnote-user-isAdmin')
        loadUser()
    }

    return { loadUser, saveUser, clearUser, getName, getUid, getUser, getIsAdmin, isLogin }
})

export type UserStore = ReturnType<typeof useUserStore>