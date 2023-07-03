<script lang="ts">
    import { page } from "$app/stores";
    import Wrapper from "$lib/components/wrapper.svelte";
    import { onMount } from "svelte";

    $: url = decodeURIComponent($page.params.url ?? "");

    onMount(() => {
        window.addEventListener("beforeunload", preventRefresh);
        return () => {
            window.removeEventListener("beforeunload", preventRefresh);
        };
    });

    function preventRefresh(e: BeforeUnloadEvent) {
        e.preventDefault();
        e.returnValue = "";
    }
</script>

<div>
    <Wrapper {url} />
</div>

<style>
    div {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
