import { useEffect, useState } from "react"
import useUserSession from "./useUserSession"
import supabaseClient from "../lib/SupabaseClient"

type Profile = {
    username : string,
    email: string,
    avatar_url : string,
    name: string
}

function useGetUser() {
  const [profile, setProfile] = useState<null | Profile>(null)
  const { session} = useUserSession()
  const [loading, setLoading] = useState(true)
  const userId = session ? session.user.id : null

    useEffect(()=>{
        if(!userId) return;

       async function fetchProfile() {
         const {data, error} = await supabaseClient.from("profile").select("*").eq("id", userId).maybeSingle()
         if(error){
            console.log("Profile Error:", error.message)
            setProfile(null)
         }else{
            setProfile(data)
         }
         setLoading(false)
       }

       fetchProfile()
    },[userId])

    return {profile, loading, session}

}

export default useGetUser