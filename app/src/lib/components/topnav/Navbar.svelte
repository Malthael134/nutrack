<script lang="ts">
    import { Logo, ThemeToggle } from '$lib/components';
    import { default as UserSettingsStore } from '$lib/stores/settings';
</script>

<nav
    class="flex h-[60px] flex-row items-center gap-4 overflow-x-auto scroll-smooth border-b border-solid p-4 dark:border-slate-300/10 dark:bg-slate-900/75"
>
    <!-- Start of row -->
    <a class="cursor-pointer" href="/">
        <Logo />
    </a>

    <!-- Middle of row -->
    <div
        class="flex grow flex-row items-center justify-end gap-4 overflow-x-auto overflow-y-hidden"
    >
        <slot />
    </div>

    <!-- End of row -->
    <div class="flex flex-row gap-2 overflow-y-visible border-l border-slate-300/10 px-2">
        <ThemeToggle />
    </div>
</nav>
