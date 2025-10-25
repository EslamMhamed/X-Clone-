"use client"
import Image from "next/image"
import Link from "next/link"
import { BsThreeDots } from "react-icons/bs"
import { FaRegBookmark, FaRegComment } from "react-icons/fa"
import { FaHeart } from "react-icons/fa6"
import { FiRepeat } from "react-icons/fi"
import { IoIosStats } from "react-icons/io"
import { useGetTweets } from "../custom-hooks/useTweets"
import { Tweet } from "../types/types"
import moment from "moment"
import TweetActions from "./TweetActions"

function Posts() {

    const {isLoading, isError, error, data:tweets} = useGetTweets()

    if(isLoading){
        <h1 className="text-white text-xl">Loading..</h1>
    }
    if(isError){
        <h1 className="text-white text-2xl">{error.message}</h1>
    }

  return (
    <div>
        {tweets?.map((tweet:Tweet)=> (
            <div key={tweet.id} className="px-4 py-2 flex gap-3 border-b border-border">
            <Image src={tweet.profile.avatar_url} alt="profile" width={100} height={100} className="w-10 h-10 object-cover rounded-full shrink-0" />
            <div className="w-full">
                <div className="flex justify-between gap-1 text-sm">
                    <div className="flex gap-1 items-center text-sm">
                        <span className="text-white font-bold">{tweet.profile.name}</span>
                        <span className="text-secondary-text ">@{tweet.profile.username}</span>
                        <span className="text-secondary-text">{moment(tweet.created_at).fromNow()}</span>
                    </div>
                    <BsThreeDots className="text-secondary-text" />
                </div>
                {tweet.content && (
                    <Link href={`/home/post/${tweet.id}`}  className="text-white my-2 block">
                {tweet.content}</Link>
                )}
                {tweet.image_url && (
                    <Link href="#" >
                <Image src={tweet.image_url} alt="image-post" width={1800} height={1800} className="h-70
                 md:h-130 w-full rounded-lg border border-border object-cover" />
                </Link>
                )}
                <TweetActions  creatorId ={tweet.profile.id} imagePath={tweet.image_path} tweetId={tweet.id} isTweetPostViewPage={false} />
            </div>
        </div>
        ))}
    </div>
  )
}

export default Posts