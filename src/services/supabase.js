import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://knrzyxqqvqycftkhfhvd.supabase.co";
const supabaseKey = "sb_publishable_5wN3DbphzP479xhDcm0ybw_D8QDMaXx";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
