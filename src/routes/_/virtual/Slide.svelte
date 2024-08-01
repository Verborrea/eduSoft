<script lang="ts">
	import { hostname } from '$lib/utils'
	import { currentGroup } from '$lib/stores'
	import { onMount } from 'svelte'
	import { pushState } from '$app/navigation'

	export let index;
	export let unit;

	let focusedButton: HTMLButtonElement | null = null;

	onMount(() => {
		window.addEventListener('popstate', handlePopState);

		return () => {
			window.removeEventListener('popstate', handlePopState);
		};
	});

	function toggleImage(btn: HTMLButtonElement) {
		if (btn.classList.toggle('focus')) {
			pushState('', {
				showModal: true
			});
			focusedButton = btn;
		} else {
			history.back();
		}
	}

	function handlePopState() {
		if (focusedButton) {
			focusedButton.classList.remove('focus');
			focusedButton = null;
		}
	}
</script>

<article id="unit{index}" class="fcol16">
	<h1>Unidad {index}: {unit.name}</h1>
	{#each unit.themes as theme, i}
	<section class="fcol16">
		<h2>Tema {i + 1}: {theme.name}</h2>
		{#if theme.text}
			<p>{theme.text}</p>
		{/if}
		{#each theme.images ?? [] as image}
			<button type="button" on:click={e => toggleImage(e.currentTarget)}>
				<img src="{hostname}/api/files/groups/{$currentGroup.id}/{image}" alt={theme.name}>
			</button>
		{/each}
		{#each theme.links ?? [] as file}
			<a class="fc btn-outline" href={file.href} download>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 14H12V12.5H6V14ZM6 10.75H14V9.25H6V10.75ZM6 7.5H14V6H6V7.5ZM4.5 17C4.0875 17 3.73437 16.8531 3.44062 16.5594C3.14687 16.2656 3 15.9125 3 15.5V4.5C3 4.0875 3.14687 3.73438 3.44062 3.44063C3.73437 3.14688 4.0875 3 4.5 3H15.5C15.9125 3 16.2656 3.14688 16.5594 3.44063C16.8531 3.73438 17 4.0875 17 4.5V15.5C17 15.9125 16.8531 16.2656 16.5594 16.5594C16.2656 16.8531 15.9125 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5Z" fill="#2E2E2E"/>
				</svg>
				<span>{file.name}</span>
			</a>
		{/each}
	</section>
	{/each}
</article>

<style>
	@property --var1 {
		syntax: "<color>";
		inherits: true;
		initial-value: white;
	}
	article {
		scroll-snap-align: center;
		flex-shrink: 0;
		width: 100%;
		max-width: 900px;
		border: 1px solid var(--gray);
		border-radius: 16px;
		padding: 24px 48px;
		gap: 24px;
		align-self: stretch;
		height: 100%;
		overflow-y: scroll;
		transition: --var1 .5s;
	}
	article:hover {
		--var1: #989898ab;
	}
	article::-webkit-scrollbar {
		width: 8px;
	}
	article::-webkit-scrollbar-track {
		border-radius: 8px;
		margin-block: 8px;
		background: white;
	}
	article::-webkit-scrollbar-thumb {
		background-color: var(--var1);
		border-radius: 15px;
	}
	section {
		gap: 12px;
	}
	h1, h2, p {
		margin: 0;
	}
	h1 {
		font-size: 42px;
		text-align: center;
	}
	h2 {
		font-size: 22px;
		font-weight: 500;
	}
	p {
		white-space: pre-wrap;
		font-size: 18px;
	}
	button {
		cursor: zoom-in;
	}
	button:active {
		transform: scale(1) !important;
	}
	:global(button.focus) {
		position: fixed;
		inset: 0;
		background: #ffffffe0;
		cursor: zoom-out !important;
	}
	img {
		width: 100%;
		border-radius: 8px;
	}
	:global(button.focus img) {
		border-radius: 0;
		height: 100%;
		object-fit: contain;
	}
	a[download] {
		text-decoration: none;
		color: var(--text);
		padding: 10px;
		gap: 12px;
		border-radius: 12px;
	}
	a[download] svg {
		flex-shrink: 0;
	}
	@media (max-width: 700px) {
		article {
			padding: 0;
			border-radius: 0;
			border: none;
		}
		h1 {
			font-size: 32px;
		}
		h2 {
			font-size: 20px;
		}
		p {
			font-size: 16px;
		}
	}
</style>