import supabaseClient from "../lib/SupabaseClient"


async function createTweet(userId:string, content: string | null, tweetImage: File | null ) {
    let imageURL: null | File= null
    let imagePath: null | File= null

    //handle image uploaded
    if(tweetImage){
        const timeStamp = Date.now()
        const path = `${timeStamp}_${tweetImage.name}`

        const {error: imageErr} = await supabaseClient.storage.from("tweet-iamges").upload(path, tweetImage)

        if(imageErr){
            console.log("TweetImageUplodeError:", imageErr)
            return
        }

        
    }


    //save tweets without image

}