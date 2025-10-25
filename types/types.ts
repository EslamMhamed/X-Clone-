export type Tweet ={
    id: string,
    user_id : string,
    content: string,
    image_url: string,
    created_at: string
    image_path: string,
    profile:{
        id: string,
        avatar_url: string,
        name: string,
        username:string
    }
}