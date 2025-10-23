import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseApi = process.env.NEXT_PUBLIC_SUPABASE_KEY!

const supabaseClient = createClient(supabaseUrl, supabaseApi)

export default supabaseClient