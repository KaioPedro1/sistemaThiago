import { redirect } from "@sveltejs/kit";

// src/routes/+layout.server.ts
export const load = async ({ locals: { getSession, supabase }}) => {
    
    const session = await getSession()
    if (session) {
        throw redirect(303, '/auth/redirect')
    }
    return {
        session: await getSession(),
    }
}