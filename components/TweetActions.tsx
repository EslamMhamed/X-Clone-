"use client"
import { FaHeart, FaRegBookmark, FaRegComment, FaTrash } from "react-icons/fa6"
import { FiRepeat } from "react-icons/fi"
import { IoIosStats } from "react-icons/io"
import useUserSession from "../custom-hooks/useUserSession"
import { useDeleteTweet } from "../custom-hooks/useTweets"
import { useRouter } from "next/navigation"

type TweetActionsProp= {
    creatorId: string,
    tweetId: string,
    imagePath: string ,
    isTweetPostViewPage: boolean
}

function TweetActions({creatorId, imagePath, tweetId, isTweetPostViewPage}: TweetActionsProp) {
    const {session} = useUserSession()
    const userId = session?.user.id
    const {mutate} = useDeleteTweet()
    const router = useRouter()

    function handleDeleteTweet(){
        mutate({
            tweetId,
            imagePath: imagePath || undefined
        },{
            onSuccess: ()=>{
                if(isTweetPostViewPage){
                    router.replace("/home")
                }
            }
        })
    }
    return (
    <div className="flex justify-between my-4">
            <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <FaRegComment />
              <span className="text-sm ">1.5K</span>
            </div>
            {creatorId === userId ? (
                <button onClick={handleDeleteTweet} className="text-red-700 flex items-center gap-1  cursor-pointer">
              <FaTrash />
            </button>
            ): (
                <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <FiRepeat />
              <span className="text-sm ">7.5K</span>
            </div>
            )}
            <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <FaHeart />
              <span className="text-sm ">2.5K</span>
            </div>
            <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <IoIosStats />
              <span className="text-sm ">5K</span>
            </div>
            <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <FaRegBookmark size={20} />
            </div>
          </div>
  )
}

export default TweetActions