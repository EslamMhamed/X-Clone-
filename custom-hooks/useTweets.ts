import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTweet, deleteTweet, getTweets } from "../services/tweet";

type TweetsProps = {
    userId: string,
    content: null | string,
    tweetImage : null | File,
}

type DeleteTweetProps ={
    tweetId: string,
     imagePath:string 
}

export function usePostTweet(){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({userId,  content, tweetImage}:TweetsProps) => createTweet(userId, content, tweetImage),
        onSuccess : ()=>{
            queryClient.invalidateQueries({queryKey:["tweets"]})
        }
    })
}

export function useGetTweets(){
    return useQuery({
        queryKey: ["tweets"],
        queryFn: getTweets,
    })
}

export function useDeleteTweet(){
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({tweetId, imagePath}: DeleteTweetProps)=> deleteTweet(tweetId, imagePath),
        onSuccess : ()=>{
            queryClient.invalidateQueries({queryKey: ["tweets"]})
        }
    })
}