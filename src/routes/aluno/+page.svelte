<script>
    import { goto } from '$app/navigation';

    export let data;
    let { supabase } = data;
    $: ({ supabase } = data);
    const handleSignOut = async () => {
         await supabase.auth.signOut();
         goto('/auth/redirect')
    };
</script>

aluno <button on:click={handleSignOut}>Sign out</button>
