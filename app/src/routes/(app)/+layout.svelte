<script lang="ts">
    import { Navbar, Navlink } from '$lib/components/topnav';
</script>

<div
    class="w-vw from-primary flex min-h-screen flex-col text-balance bg-gray-100 bg-gradient-to-tr from-0% via-60% to-90% text-lg text-black dark:from-slate-900 dark:to-primary-950 dark:text-slate-200"
>
    <Navbar />
    <div class="grow px-6 pt-4">
        <slot />
    </div>
</div>
