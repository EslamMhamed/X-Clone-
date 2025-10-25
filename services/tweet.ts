import supabaseClient from "../lib/SupabaseClient"


export async function createTweet(userId:string, content: string | null, tweetImage: File | null ) {
    let imageURL: null | string= null
    let imagePath: null | string= null

    //handle image uploaded
    if(tweetImage){
        const timeStamp = Date.now()
        const path = `${timeStamp}_${tweetImage.name}`

        const {error: imageErr} = await supabaseClient.storage.from("tweet-iamges").upload(path, tweetImage)

        if(imageErr){
            console.log("TweetImageUplodeError:", imageErr)
            return
        }

        const {data: {publicUrl}} = supabaseClient.storage.from("tweet-images").getPublicUrl(path)

        imageURL = publicUrl
        imagePath = path
    }


    //save tweets 

    const {error:insertErr} = await supabaseClient.from("tweets").insert({
        content: content ? content : null,
        user_id: userId,
        image_url:imageURL,
        image_path: imagePath
    })

    if(insertErr){
        console.log("tweet Instert Error")
        return;
    }

    return true

}

export async function getTweets() {
    const {error, data} = await supabaseClient.from("tweets").select(`*, profile(id, username, name, avatar_url)`).order("created_at", {ascending: false})

    if(error){
        console.log("FetchTweetsError", error.message)
    }

    return data
}

export async function deleteTweet(tweetId:string, imagePath:string | undefined) {
    const {error:deleteErr} = await supabaseClient.from("tweets").delete().eq("id",tweetId)

    if(deleteErr){
        console.log("DeleteErrorTweet", deleteErr.message)
        return
    }

    if(imagePath){
        const {error:imageErr} = await supabaseClient.storage.from("tweet-images").remove([imagePath])
        if(imageErr){
            console.log("ImageDeleteError", imageErr.message)
        }
    }
}