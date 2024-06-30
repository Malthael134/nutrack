<script lang="ts">
    export let href: string;
</script>

<a
    {href}
    class="cursor-pointer bg-opacity-50 p-2 font-medium text-gray-300 transition-all duration-300 hover:text-white"
>
    <slot />
</a>
