"use client"
import Image from 'next/image'
import { HiDotsHorizontal } from 'react-icons/hi'
import useGetUser from '../custom-hooks/useGetUser'

function Profile() {
    const {loading, profile,session} = useGetUser()
    if(!session) return null
    if(!profile)return null
    if(loading){
        <h1 className='text-2xl text-white'>Loading...</h1>
    }
  return (
    <div className="mt-10 text-white flex justify-between items-center ">
            <div className="flex items-center gap-2">
                {profile?.avatar_url && 
                <Image src={profile.avatar_url} alt="profile iamge" width={500} height={500} className="w-10 h-10 object-cover rounded-full" />
                }
                <div className="hidden lg:block">
                    <p className="font-semibold">{profile?.name}</p>
                    <p className="text-secondary-text font-light">@{profile?.username}</p>
                    <HiDotsHorizontal className="hidden lg:block" />
                </div>
            </div>
        </div>
  )
}

export default Profile