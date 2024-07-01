<script>
    import { Logo } from '$lib/components';
    import { DarkModeIcon, LightModeIcon, SystemModeIcon } from '$lib/icons';
    import { default as UserSettingsStore } from '$lib/stores/settings';
</script>

<nav
    class="flex h-20 flex-row items-center gap-4 overflow-x-auto overflow-y-hidden scroll-smooth border-b border-solid border-slate-300/10 bg-slate-900/75 p-4"
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
    <div class="flex gap-2">
        <button
            on:click={() => {
                $UserSettingsStore.colorScheme = 'dark';
            }}
            class={`${$UserSettingsStore.colorScheme === 'dark' ? 'bg-green-700' : 'bg-gray-400'} p-2`}
        >
            <DarkModeIcon />
        </button>

        <button
            on:click={() => {
                $UserSettingsStore.colorScheme = 'light';
            }}
            class={`${$UserSettingsStore.colorScheme === 'light' ? 'bg-green-700' : 'bg-gray-400'} p-4`}
        >
            <LightModeIcon />
        </button>

        <button
            on:click={() => {
                $UserSettingsStore.colorScheme = 'system';
            }}
            class={`${$UserSettingsStore.colorScheme === 'system' ? 'bg-green-700' : 'bg-gray-400'} p-4`}
        >
            <SystemModeIcon />
        </button>
    </div>
</nav>
