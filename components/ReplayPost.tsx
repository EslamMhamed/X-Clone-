"use client"

import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { FaRegFaceSmile } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'
import { RiCalendarScheduleLine } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'
import { TbPhoto } from 'react-icons/tb'

function ReplayPost() {

    const [replay, setReplay]= useState("")
    const [showPicker, setShowPicker] = useState(false)
    const [imagePreview, setImagePreview]= useState<string | null>(null)
    const isDisabled = replay.trim() === "" && !imagePreview
    const fileRef = useRef<HTMLInputElement | null>(null)

    function handleFileChange (e:React.ChangeEvent<HTMLInputElement>){
        const file = e.target.files?.[0]
        if(file){
            setImagePreview(URL.createObjectURL(file))
        }
    }

    function handleRemoveImage(){
        setImagePreview(null)
        if(fileRef.current){
            fileRef.current.value = ""
        }
    }

    function onEmojiClick(emojidata : EmojiClickData){
        setReplay(prev => prev + emojidata.emoji)
    }

  return (
    <div className='flex gap-4 p-4 border border-border'>
        <Image src="/images/profile.png" alt='profile' width={500} height={500} className='w-10 h-10 object-cover rounded-full shrink-0 ' />
        <div className='w-full'>
            <textarea value={replay} 
            onChange={(e)=> setReplay(e.target.value)}
            className='w-full placeholder:text-secondary-text outline-none text-xl resize-none text-white' placeholder="what's happening?">
            </textarea>
            {imagePreview && (
                <div className="h-60 md:h-100 rounded-lg overflow-hidden border border-border mb-10 relative">
                <Image src={imagePreview} width={500} height={500} alt='preview-image' className='w-full h-full object-cover' />
                <button onClick={handleRemoveImage} className="absolute top-5 right-5 bg-gray-600 w-10 h-10 text-2xl rounded-full opacity-50 cursor-pointer grid place-items-center">
                    <RxCross2  />
                </button>
            </div>
            )}
            <div className='flex justify-between py-4 items-center border-t border-border'>
            <div className="flex gap-3">
                <div className='text-primary cursor-pointer' 
                onClick={()=> fileRef.current?.click()}
                >
                    <TbPhoto  size={20}/>
                </div>
                <div onClick={()=> setShowPicker(prev => !prev)} className='text-primary cursor-pointer' 
                >
                    <FaRegFaceSmile  size={20}/>
                </div>
                <div className='text-primary cursor-pointer'>
                    <IoLocationOutline  size={20}/>
                </div>
                <div className='text-primary cursor-pointer'>
                    <RiCalendarScheduleLine  size={20}/>
                </div>
                
            </div>
            {isDisabled ?
            <button className='text-black bg-primary py-2 px-5 font-semibold cursor-pointer rounded-full'>Post</button> :
            <button className='text-black bg-white py-2 px-5 font-semibold cursor-pointer rounded-full'>Post
            </button>
            }
            {showPicker && (
                <div className="fixed z-10 top-10 left-1/2  w-[90%] max-w-2xl -translate-x-1/2 ">
                <EmojiPicker onEmojiClick={onEmojiClick} theme={Theme.DARK} style={{width: "100", background: "black"}} />
                </div>
            )}
        </div>
        <input type="file" ref={fileRef} className='hidden' onChange={handleFileChange} />
        </div>
        
    </div>
  )
}

export default ReplayPost