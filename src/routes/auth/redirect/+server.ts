import { redirect } from '@sveltejs/kit'

export const GET = async ({ url, locals: { getSession, supabase } }) => {
    const session = await getSession()

    if (session) {
        const uuid = session.user.id;

        let { data, error } = await supabase
            .rpc('get_user_type', {
                search_id: uuid
            })

        if (data[0].tipo_usuario == "Professor") {
            throw redirect(303, '/professor')
        } else {
            throw redirect(303, '/aluno')
        }
    } else {
        throw redirect(303, '/')
    }

}