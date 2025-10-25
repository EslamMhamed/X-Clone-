"use client"

import { Session } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import supabaseClient from "../lib/SupabaseClient"

function useUserSession() {
  const [session, setSession]= useState<null | Session>(null)
  const [loading, setLoading] = useState(true)

    useEffect(()=> {
        async function fetchSession() {
            const {data: {session}}= await supabaseClient.auth.getSession()
            setSession(session)
            setLoading(false)
        }

        const {data: {subscription}} = supabaseClient.auth.onAuthStateChange((_event, newSession)=> {setSession(newSession)})
        

        fetchSession()
        return ()=> subscription?.unsubscribe()

    },[])

    return {session, loading}
}

export default useUserSession