import {create} from "zustand";
import {getCookie, removeCookie, setCookie} from "../cookieUtil.tsx";


export interface LoginState {
    user: string,
    login: (username:string) => void,
    logout: () => void
}

const useLoginStore = create<LoginState>((set)=> ({
    user: getCookie('user') as string || '',
    login: (username) => {
        setCookie("user", username, 1) //user 쿠키에 username을 저장하고 1일동안 유지
        set( () => ({user: username}) )
    },
    logout: () => {
        removeCookie('user')
        set( () => ({user: ''}) )
    }
}))

export default useLoginStore