import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL !
const supabaseApi = process.env.SUPABASE_KEY !

const supabaseClient = createClient(supabaseUrl, supabaseApi)

export default supabaseClient