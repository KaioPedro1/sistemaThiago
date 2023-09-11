import { redirect } from "@sveltejs/kit";

// src/routes/+layout.server.ts
export const load = async ({ locals: { getSession, supabase }, parent }) => {
    await parent()
    const session = await getSession()
    if (session) {
        const uuid = session.user.id;

        let { data, error } = await supabase
            .rpc('get_user_type', {
                search_id: uuid
            })
        if (data[0].tipo_usuario != "Professor") {
            throw redirect(303, '/aluno')

        }
        return {
            session: await getSession(),
        }
    }
}