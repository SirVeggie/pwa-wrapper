<script lang="ts">
    import "../app.css";
    import { goto } from "$app/navigation";
    import Input from "$lib/components/input.svelte";

    let value = "";

    function enter(e: KeyboardEvent) {
        if (e.key !== "Enter") return;
        console.log(`goto: ${value}`);
        goto("/" + encodeURIComponent(value));
    }
</script>

<h1>Target url:</h1>
<Input bind:value on:keydown={enter} />

<style>
    h1 {
        margin: 0;
        font-family: "Open sans", sans-serif;
        font-size: 1.5rem;
        color: #ddd;
        margin-bottom: 2vh;
    }
</style>
