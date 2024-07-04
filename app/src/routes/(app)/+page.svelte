<script lang="ts">
    import { browser } from '$app/environment';
    import type { ActionData } from './$types.js';

    // export let data;

    export let form;

    $: validateFormResponse(form);

    function validateFormResponse(form: ActionData) {
        if (!form || !browser) return;
        if (!form.success) {
            alert(form.reason);
        }
    }
</script>

<form
    method="post"
    action="?/add_intake"
    class="grid grid-cols-3 gap-4 rounded-xl bg-slate-300 p-4"
>
    <label class="col-span-1" for="title">What did you eat?</label>
    <input class="col-span-2" type="text" name="title" />
    <label class="col-span-1" for="amount">How much did you eat?</label>
    <input class="col-span-2" type="number" name="amount" />
    <button class="col-span-3" type="submit">Add intake</button>
</form>
