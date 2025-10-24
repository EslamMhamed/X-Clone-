import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTweet } from "../services/tweet";

type TweetsProps = {
    userId: string,
    content: null | string,
    tweetImage : null | File,
}

export function usePostTweet(){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({userId, tweetImage, content}:TweetsProps) => createTweet(userId, content, tweetImage),
        onSuccess : ()=>{
            queryClient.invalidateQueries({queryKey:["tweets"]})
        }
    })
}