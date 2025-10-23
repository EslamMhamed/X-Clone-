"use client"
import Link from "next/link"
import useUserSession from "../custom-hooks/useUserSession"
import supabaseClient from "../lib/SupabaseClient"

function LogoutButton() {

    const {session} = useUserSession()

    async function LogoutUser() {
        const {error} = await supabaseClient.auth.signOut()
        if(error){
            console.log("LogoutError:",error.message)
        }
    }

  return (
    <>
        {session ? (
            <button onClick={LogoutUser} className="hidden lg:block bg-white text-black p-3 w-full mt-3 font-bold rounded-full cursor-pointer ">Logout</button>
        ) : (
            <Link href="/" className="hidden text-center lg:block bg-white text-black p-3 w-full mt-3 font-bold rounded-full cursor-pointer ">Log In</Link>
        )}
    </>
  )
}

export default LogoutButton