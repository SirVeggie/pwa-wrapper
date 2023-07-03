<script lang="ts">
    export let url: string;
</script>

<iframe title="wrapper" src={url} frameborder="0" />

<style>
    iframe {
        width: 100%;
        height: 100%;
    }
</style>
