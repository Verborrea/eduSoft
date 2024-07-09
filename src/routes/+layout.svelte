<script lang="ts">
  import { page } from '$app/stores'
	import Header from '$lib/compo/Header.svelte'
	import Footer from '$lib/compo/Footer.svelte'
</script>

{#if $page.url.pathname !== '/login'}
	<Header/>
{/if}
<slot/>
{#if $page.url.pathname !== '/login'}
	<Footer/>
{/if}

