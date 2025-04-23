import {create} from "zustand";


const useLoginStore = create((set) => ({

    user: {uid:'', nickname:''},

    login: (text) => set(() => {
        console.log("login..........")
        return {user: {uid: 'AAA', nickname:text}}
    }),

    logout: () => set(() => {
        return {user: {uid:'', nickname:''}}
    } )

}))

export default useLoginStore