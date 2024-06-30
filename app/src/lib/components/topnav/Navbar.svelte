<script>
    import { Logo } from '$lib/components';
</script>

<nav class="scroll-smooth border-b border-solid border-slate-300/10 bg-slate-900/75">
    <div class="flex h-20 flex-row items-center gap-4 overflow-x-auto overflow-y-hidden p-4">
        <a class="cursor-pointer" href="/">
            <Logo />
        </a>
        <div
            class="flex grow flex-row items-center justify-end gap-4 overflow-x-auto overflow-y-hidden"
        >
            <slot />
        </div>
    </div>
</nav>
