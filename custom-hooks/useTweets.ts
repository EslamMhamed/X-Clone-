import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTweet, getTweets } from "../services/tweet";

type TweetsProps = {
    userId: string,
    content: null | string,
    tweetImage : null | File,
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