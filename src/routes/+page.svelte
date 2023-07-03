<script lang="ts">
    import "../app.css";
    import { goto } from "$app/navigation";
    import Input from "$lib/components/input.svelte";
    import { page } from "$app/stores";
    import Wrapper from "$lib/components/wrapper.svelte";

    let value = "";
    $: url = decodeURIComponent($page.url.searchParams.get("url") ?? "");
    $: console.log(url);

    function enter(e: KeyboardEvent) {
        if (e.key !== "Enter") return;
        console.log(`goto: ${value}`);
        goto("?url=" + encodeURIComponent(value));
    }
</script>

{#if !url}
    <h1>Target url:</h1>
    <Input bind:value on:keydown={enter} />
{:else}
    <div>
        <Wrapper {url} />
    </div>
{/if}

<style>
    h1 {
        margin: 0;
        font-family: "Open sans", sans-serif;
        font-size: 1.5rem;
        color: #ddd;
        margin-bottom: 2vh;
    }
    
    div {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
    }
</style>
