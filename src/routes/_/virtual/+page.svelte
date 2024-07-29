<script lang="ts">
	import Slide from './Slide.svelte'

	export let data

	let active = 0

	function gotoUnit(index: number) {
		active = index
	}

	function setActive(target: EventTarget | null) {
		if (target instanceof HTMLElement) {
			let num_elements = data.units.length - 1;
			let total = target.scrollWidth - target.clientWidth;
			let ratio = target.scrollLeft / total;
			if (ratio === 0) {
				active = 0;
			} else if (ratio === 1) {
				active = num_elements;
			} else {
				active = Math.round(ratio * num_elements);
			}
		}
	}
	</script>

<svelte:head>
  	<title>eduSoft | Aula Virtual</title>
</svelte:head>

<main class="super">
	{#if data.units.length > 0}
	<div class="overflow-container">
		<div class="slides" on:scroll={(e) => setActive(e.target)}>
			{#each data.units as unit, index}
				<Slide index={index + 1} {unit}/>
			{/each}
		</div>
	</div>
	<nav class="fc">
		{#each { length: data.units.length} as _, index}
			<a href="#unit{index + 1}" class:active={active == index} on:click={()=>{gotoUnit(index)}}>
				{index + 1}
			</a>
		{/each}
	</nav>
	{:else}
	<div class="fcol16">
		<h1>Aula Virtual</h1>
		<h2>Todavía no hay contenido :(</h2>
	</div>
	{/if}
</main>

<style>
	.fcol16 {
		height: 100%;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	h1 {
		font-size: 48px;
		margin: 0;
		color: var(--yellow);
	}
	h2 {
		margin: 0;
		color: var(--both);
	}
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
	}
	.overflow-container {
		flex: 1;
		width: 100%;
		max-width: 900px;
		overflow-y: hidden;
	}
	.slides {
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
		display: flex;
		gap: 24px;
		height: 100%;
	}
	.slides::-webkit-scrollbar {
		height: 8px;
	}
	.slides::-webkit-scrollbar-track {
		border-radius: 8px;
	}
	.slides::-webkit-scrollbar-thumb {
		background-color: #989898ab;
		border-radius: 15px;
	}
	nav {
		gap: 8px;
		flex-wrap: wrap;
		justify-content: center;
	}
	nav a {
		text-decoration: none;
		color: var(--inactive);
		font-size: 24px;
		padding: 0 8px;
	}
	nav a.active {
		color: var(--text);
	}
	@media (max-width: 700px) {
		nav a {
			font-size: 20px;
		}
	}
</style>