<script lang="ts">
    import Logo from '$lib/components/Logo.svelte';
    import { Navbar, Navitem } from '$lib/components/topnav';
</script>

<div class="w-vw from-primary flex min-h-screen flex-col bg-slate-900 bg-gradient-to-br text-white">
    <Navbar>
        <!-- <Navitem href="/link/a">Link A...</Navitem>
		<Navitem href="/link/b">Link B...</Navitem>
		<Navitem href="/link/c">Link C...</Navitem> -->
    </Navbar>
    <div class="grow px-6 pt-4">
        <!-- <main class="grow"> -->
        <slot />
        <!-- </main> -->
    </div>
</div>
