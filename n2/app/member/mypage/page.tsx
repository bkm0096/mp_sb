
"use client"

import { useLoginStore } from "@/store/useLoginStore"
import { useEffect } from "react"
import { loadByCookie } from "../memberActions"

function MyPage() {


    const {mid, accessToken, save} = useLoginStore()

    useEffect(() => {
        if(!mid) {
            loadByCookie().then(data => {
                const {mid, accessToken, refreshToken} = data

                if(mid) {
                    save(mid, accessToken, refreshToken)
                }
            })
        }
    }, [])

    return (
        <div>
            <div className={'text-4xl'}>My Page</div>

            <div className={'text-2xl'}>mid: {mid}</div>
            <div className={'text-2xl'}>accessToken: {accessToken}</div>
        </div>
    )
}

export default MyPage