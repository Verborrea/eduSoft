<script lang="ts">
  import { page } from '$app/stores'
	import Header from '$lib/compo/Header.svelte'
	import Footer from '$lib/compo/Footer.svelte'
	import Sidebar from '$lib/compo/Sidebar.svelte'
</script>

{#if $page.url.pathname !== '/login'}
	<Header/>
{/if}

<div class="superMain">
	{#if $page.url.pathname.endsWith('/admin')}
	<Sidebar/>
	{/if}
	<slot/>
</div>

{#if $page.url.pathname !== '/login'}
	<Footer/>
{/if}

<style>
	.superMain {
		width: 100%;
		display: flex;
	}
</style>