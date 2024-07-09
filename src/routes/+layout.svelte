<script lang="ts">
    import { page } from '$app/stores';
	import Header from '$lib/compo/Header.svelte'
</script>

{#if $page.url.pathname !== '/login'}
	<Header/>
{/if}
<slot/>

