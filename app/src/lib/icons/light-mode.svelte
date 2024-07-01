<script lang="ts">
    import { default as UserSettingsStore } from '$lib/stores/settings';
    export let className: string;
</script>

<div>
    <!-- class={`${stroke-sky-500}`} -->
    <svg
        class={className}
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g stroke-width="2" stroke-miterlimit="10">
            <path
                d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05"
                stroke-linecap="round"
            />
            <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
            <path d="M12 19v4M12 1v4" stroke-linecap="round" />
        </g>
    </svg>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="#000000"
        class="size-5 stroke-sky-400"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
    </svg>
</div>
