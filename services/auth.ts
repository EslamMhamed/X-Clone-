import supabaseClient from "../lib/SupabaseClient"

export async function signUpUser (email:string, password:string){
    try {
        const {error} = await supabaseClient.auth.signUp({
            email, password
        })
        if(error){
            return {error: error.message}
        }
    } catch (error) {
        console.log("Unexpected Error:", error)
        return {error: "Unexpected error occurred, Please try again"}
    }
} 