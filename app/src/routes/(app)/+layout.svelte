<script lang="ts">
    import { Navbar } from '$lib/components/topnav';
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<div
    class="w-vw from-primary flex min-h-screen flex-col text-balance bg-gray-100 bg-gradient-to-tr from-0% via-60% to-90% text-lg text-black dark:from-slate-900 dark:to-primary-950 dark:text-slate-200"
>
    <Navbar isSignedIn={data.session ? true : false} />
    <div class="grow px-6 pt-4">
        <slot />
    </div>
</div>
