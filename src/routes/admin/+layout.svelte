<script>
	import Sidebar from './Sidebar.svelte'
</script>

<div class="container">
	<Sidebar/>
	<main>
		<slot/>
	</main>
</div>

<style>
	.container {
		height: 100dvh;
		display: flex;
	}

	main {
		flex: 1;
		overflow-y: scroll;
	}
</style>