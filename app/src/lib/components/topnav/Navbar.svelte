<script lang="ts">
    import { Logo, ThemeToggle } from '$lib/components';
    import { signIn } from '@auth/sveltekit/client';
    export let isSignedIn: boolean;
</script>

<nav
    class="flex h-[60px] flex-row items-center gap-4 overflow-x-auto scroll-smooth border-b border-solid p-4 shadow-lg dark:border-slate-300/10 dark:bg-slate-900/75"
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
    <div class="flex flex-row gap-2 overflow-y-visible border-l px-2 dark:border-slate-300/10">
        <ThemeToggle />
        {#if !isSignedIn}
            <button on:click={() => signIn()}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="size-7 stroke-gray-800 stroke-2 dark:stroke-gray-400"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                    />
                </svg>
            </button>
        {:else}
            <a href="/settings">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="size-7 stroke-gray-800 stroke-2 dark:stroke-gray-400"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                </svg>
            </a>
        {/if}
    </div>
</nav>
