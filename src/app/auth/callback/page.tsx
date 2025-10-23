"use client"

import { useEffect, useState } from "react"
import supabaseClient from "../../../../lib/SupabaseClient"
import { useRouter } from "next/navigation"
import { User } from "@supabase/supabase-js"
import { setTimeout } from "node:timers"

function Page() {

    const [name, setName] = useState("")
    const [userName, setUserName]= useState("")
    const [iamge, setImage]= useState<null | File>(null)
    const [message, setMessage]= useState("")
    const [user, setUser]= useState<null | User>(null)
    const router = useRouter()

    useEffect(()=>{
        async function handleAuth() {
            const {error: userError,data:{user}}=await supabaseClient.auth.getUser()
            if(!user || userError){
                router.replace("/auth/signup")
                return
            }

            setUser(user)

            const {data: profile, error:profileError} = await supabaseClient.from("profile").select("*").eq("id",user.id).maybeSingle()

            if(profileError){
                router.replace("/auth/signup")
                return
            }

            if(profile){
                router.replace("/home")
            }

        }
        handleAuth()
    },[router])

    async function setupUserProfile(e:React.FormEvent) {
            e.preventDefault()
        if(!name || !userName || !iamge){
            setMessage("All fields are require")
            return
        }
        const timestamp = Date.now()
        const imagePath = `${timestamp}_${iamge.name}`

        const {error: imageErr} = await supabaseClient.storage.from("avaters").update(imagePath, iamge)

        if(imageErr){
            setMessage(imageErr.message)
            return
        }

        const {data: {publicUrl}} =  supabaseClient.storage.from("avaters").getPublicUrl(imagePath)

        const {error: insertErr} = await supabaseClient.from("profile").insert({
            name, id: user?.id, username:userName, avatar_url: publicUrl, email: user?.email
        })
        if(insertErr){
            setMessage(insertErr.message)
            return
        }

        setMessage("Profile Created")
        setTimeout(() => {
            router.replace("/home")
        }, 2000);
    }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" w-[95%] max-w-[300px] rounded-lg py-12 ">
        <h2 className="mb-8 font-bold text-3xl text-primary-text">
          Setup Profile
        </h2>
        {message && (
          <p className="bg-primary py-1 mb-4 font-semibold text-center">
            {message}
          </p>
        )}
        <form onSubmit={setupUserProfile} >
          <input
            value={name}
            onChange={(e)=> setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="mb-4 w-full bg-background outline-none  rounded-none p-4 placeholder:text-secondary-text border border-border text-white "
          />
          <input
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
            type="text"
            placeholder="Username"
            className="mb-4 w-full bg-background outline-none  rounded-none p-4 placeholder:text-secondary-text border border-border text-white "
          />
          <label htmlFor="avatar" className="text-white block py-2">Profile Pic</label>
          <input
          accept="images/*"
            onChange={(e)=> {
                const file = e.target.files?.[0]
                if(!file){
                    return
                }
                setImage(file)
            }}
            id='avatar'
            type="file"
            className="w-full bg-background outline-none  rounded-none p-4 placeholder:text-secondary-text border border-border text-white "
          />
          <button className="text-black w-full mt-8 rounded-full h-10 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-200 font-semibold bg-white ">
            Continue
          </button>
        </form>

       
      </div>
    </div>
  )
}

export default Page