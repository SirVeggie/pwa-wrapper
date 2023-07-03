<script lang="ts">
    import "../app.css";
    import { page } from "$app/stores";
    import Wrapper from "$lib/components/wrapper.svelte";

    $: url = decodeURIComponent($page.params.url ?? "");
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
