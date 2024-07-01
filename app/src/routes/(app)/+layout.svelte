<script lang="ts">
    import { Navbar, Navlink } from '$lib/components/topnav';
</script>

<div class="w-vw from-primary flex min-h-screen flex-col bg-slate-900 bg-gradient-to-br text-white">
    <Navbar>
        <Navlink href="/link/a" label="Link A..." />
        <Navlink href="/link/b" label="Link B..." />
        <Navlink href="/link/c" label="Link C..." />
    </Navbar>
    <div class="grow px-6 pt-4">
        <!-- <main class="grow"> -->
        <slot />
        <!-- </main> -->
    </div>
</div>
