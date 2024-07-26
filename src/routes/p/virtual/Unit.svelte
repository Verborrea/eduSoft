<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { generateTimestampID } from '$lib/utils'
	import { fly } from 'svelte/transition'
	import { flip } from 'svelte/animate'
    import Images from './Images.svelte'
	import Links from './Links.svelte'

	interface Link {
		name: string;
		href: string;
	}

	interface Theme {
		id: string;
		name: string;
		text: string;
		images: string[];
		links: Link[];
	}

	interface Unit {
		id: string;
		name: string;
		themes: Theme[];
	}

	export let index, unit : Unit

	let editModal: any
	let newThemeName = ''

	let currentTheme: Theme
	let editingThemeName: string
	let editingThemeText: string
	let editingThemeImages: string[]
	let editingThemeLinks: Link[]

	const dispatch = createEventDispatcher()

	function addTheme() {
		unit.themes = [...unit.themes, {
			id: generateTimestampID(),
			name: newThemeName === '' ? 'Tema sin nombre' : newThemeName,
			text: '',
			images: [],
			links: []
		}]
		newThemeName = ''
	}

	function deleteTheme(e: HTMLButtonElement, id: string) {
		e.parentElement?.classList.add('removed')
		setTimeout(() => {
			unit.themes = unit.themes.filter((t: any) => t.id !== id)
		}, 100)
	}

	function deleteUnit() {
		dispatch('delete', {
			id: unit.id
		})
	}

	function openModal(theme: Theme) {
		editingThemeName = theme.name
		editingThemeText = theme.text
		editingThemeImages = theme.images
		editingThemeLinks = theme.links
		editModal.showModal()
		currentTheme = theme
	}

	function editTheme() {
		unit.themes = unit.themes.map((t: any) => {
			if (t.id === currentTheme.id) {
				return {
					id: t.id,
					name: editingThemeName,
					text: editingThemeText,
					images: editingThemeImages,
					links: editingThemeLinks
				}
			}
			return t
		})
		closeModal()
	}

	function closeModal() {
		editingThemeName = ''
		editingThemeText = ''
		editingThemeImages = []
		editingThemeLinks = []
		editModal.close()
	}
</script>

<dialog bind:this={editModal}>
	<form class="fcol16" action="">
		<h1>Editar Tema</h1>
		<div class="input-field fcol16">
			<label for="theme-name-{index}">Nombre:</label>
			<input
				class="focus-visible"
				id="theme-name-{index}"
				type="text"
				bind:value={editingThemeName}
				placeholder="Nombre del Tema"
			>
		</div>
		<div class="input-field fcol16">
			<label for="theme-text-{index}">Contenido:</label>
			<textarea
				class="focus-visible"
				id="theme-text-{index}"
				rows="4"
				bind:value={editingThemeText}
				placeholder="Contenido"
			/>
		</div>
		<div class="input-field fcol16">
			<label for="theme-images">Imágenes:</label>
			<Images {index} bind:images={editingThemeImages}/>
		</div>
		<div class="input-field fcol16">
			<label for="theme-files">Archivos:</label>
			<Links {index} bind:links={editingThemeLinks}/>
		</div>
		<div class="btns fc">
			<button type="button" class="btn btn-secondary focus-visible" on:click={closeModal}>
				Cancelar
			</button>
			<button
				type="submit"
				class="btn btn-primary focus-visible"
				on:click={editTheme}
				disabled={editingThemeName === ''}
			>
				Guardar
			</button>
		</div>
	</form>
</dialog>
<article id="unit{index}" class="fcol16">
	<h1 class="fc">
		Unidad {index}:
		<input class="focus-visible" bind:value={unit.name}>
		<button type="button" class="btn red" on:click={deleteUnit}>
			Eliminar
		</button>
	</h1>
	<section class="themes fcol16">
		<header class="fc">
			<input
				class="focus-visible"
				id="newtheme-{index}"
				name="theme"
				type="text"
				placeholder="Nombre del Tema"
				bind:value={newThemeName}
				on:keydown={(e) => {
					if (e.key !== 'Enter' || newThemeName === '') return;
					addTheme()
				}}
			>
			<button type="button" class="btn green focus-visible" on:click={addTheme}>
				+ <span class="d-o">Añadir Tema</span>
			</button>
		</header>
		{#each unit.themes as theme, i (theme.id)}
		<div
			class="theme fc"
			animate:flip={{ duration: 200 }}
			in:fly={{ y: 100, duration: 200 }}
		>
			<span><span class="d-o">Tema</span> {i + 1}. {theme.name}</span>
			<!-- <button class="option green" type="button" title="Ver">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10 13.5C10.9722 13.5 11.7986 13.1597 12.4792 12.4792C13.1597 11.7986 13.5 10.9722 13.5 10C13.5 9.02778 13.1597 8.20139 12.4792 7.52083C11.7986 6.84028 10.9722 6.5 10 6.5C9.02778 6.5 8.20139 6.84028 7.52084 7.52083C6.84028 8.20139 6.50001 9.02778 6.50001 10C6.50001 10.9722 6.84028 11.7986 7.52084 12.4792C8.20139 13.1597 9.02778 13.5 10 13.5ZM10 12C9.44445 12 8.97223 11.8056 8.58334 11.4167C8.19445 11.0278 8.00001 10.5556 8.00001 10C8.00001 9.44444 8.19445 8.97222 8.58334 8.58333C8.97223 8.19444 9.44445 8 10 8C10.5556 8 11.0278 8.19444 11.4167 8.58333C11.8056 8.97222 12 9.44444 12 10C12 10.5556 11.8056 11.0278 11.4167 11.4167C11.0278 11.8056 10.5556 12 10 12ZM10 16C8.19445 16 6.53473 15.5174 5.02084 14.5521C3.50695 13.5868 2.30556 12.3125 1.41667 10.7292C1.34723 10.6181 1.29862 10.5016 1.27084 10.3798C1.24306 10.258 1.22917 10.133 1.22917 10.0048C1.22917 9.8766 1.24306 9.75 1.27084 9.625C1.29862 9.5 1.34723 9.38194 1.41667 9.27083C2.30556 7.6875 3.50695 6.41319 5.02084 5.44792C6.53473 4.48264 8.19445 4 10 4C11.8056 4 13.4653 4.48264 14.9792 5.44792C16.4931 6.41319 17.6944 7.6875 18.5833 9.27083C18.6528 9.38194 18.7014 9.4984 18.7292 9.62021C18.757 9.74201 18.7708 9.86701 18.7708 9.99521C18.7708 10.1234 18.757 10.25 18.7292 10.375C18.7014 10.5 18.6528 10.6181 18.5833 10.7292C17.6944 12.3125 16.4931 13.5868 14.9792 14.5521C13.4653 15.5174 11.8056 16 10 16Z" fill="white"/>
				</svg>
			</button> -->
			<button class="option yellow" type="button" title="Editar" on:click={e => openModal(theme)}>
				<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill="var(--yellow-dark)" d="M4.04168 15.9583H5.22918L12.9583 8.22908L11.7708 7.06242L4.04168 14.7916V15.9583ZM2.93751 18.1666C2.63195 18.1666 2.37154 18.0589 2.15626 17.8437C1.94098 17.6284 1.83334 17.368 1.83334 17.0624V14.7916C1.83334 14.4999 1.8889 14.2187 2.00001 13.9478C2.11112 13.677 2.27084 13.4374 2.47918 13.2291L13.4583 2.24992C13.6111 2.09714 13.7813 1.9895 13.9688 1.927C14.1563 1.8645 14.3472 1.83325 14.5417 1.83325C14.7361 1.83325 14.9201 1.86103 15.0938 1.91659C15.2674 1.97214 15.4306 2.07631 15.5833 2.22909L17.7708 4.41659C17.9236 4.56936 18.0278 4.73603 18.0833 4.91659C18.1389 5.09714 18.1667 5.28464 18.1667 5.47909C18.1667 5.67353 18.1354 5.86103 18.0729 6.04159C18.0104 6.22214 17.9028 6.38881 17.75 6.54159L6.77084 17.5208C6.56251 17.7291 6.32293 17.8888 6.05209 17.9999C5.78126 18.111 5.50001 18.1666 5.20834 18.1666H2.93751ZM12.375 7.64575L11.7708 7.06242L12.9583 8.22908L12.375 7.64575Z"/>
				</svg>
			</button>
			<button class="option red" type="button" title="Borrar Tema" on:click={e => deleteTheme(e.currentTarget, theme.id)}>
				<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill="var(--red)" d="M6.5 17C6.0875 17 5.73437 16.8531 5.44062 16.5594C5.14687 16.2656 5 15.9125 5 15.5V5.5H4V4H8V3H12V4H16V5.5H15V15.491C15 15.9137 14.8531 16.2708 14.5594 16.5625C14.2656 16.8542 13.9125 17 13.5 17H6.5ZM13.5 5.5H6.5V15.5H13.5V5.5ZM8 14H9.5V7H8V14ZM10.5 14H12V7H10.5V14Z"/>
				</svg>
			</button>
		</div>
		{/each}
	</section>
</article>

<style>
	.btns, .input-field {
		gap: 8px;
	}
	.btns {
		align-self: flex-end;
	}
	dialog {
	    padding: 24px;
		border-radius: 16px;
		border: none;
		width: calc(100% - 32px);
    	max-width: 700px;
	}
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
		/* gap: 24px; */
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
	h1, section, header {
		gap: 12px;
	}
	input, textarea {
		flex: 1;
		background: var(--gray-light);
		padding: 10px 16px;
		border-radius: 8px;
		border: none;
	}
	textarea {
		flex: auto;
		resize: vertical;
	}
	input:hover, textarea:hover {
		background: var(--gray-dark);
	}
	.theme {
		text-align: start;
		background: var(--gray-light);
		padding: 8px 16px;
		border-radius: 8px;
		gap: 8px;
		transition: scale 100ms, opacity 100ms;
	}
	:global(.theme.removed) {
		scale: 0;
		opacity: 0;
	}
	.theme span {
		flex: 1;
	}
	.option {
		background: transparent;
		flex-shrink: 0;
		border-radius: 4px;
		padding: 2px;
	}
	.option.yellow:hover {
		background: #ffca3a4e !important
	}
	.option.red:hover {
		background: #ff595e2e !important;
	}
	.theme:hover {
		background: var(--gray-dark);
	}
	h1 {
		font-size: 24px;
		text-align: start;
		margin: 0;
	}
	@media (max-width: 700px) {
		dialog {
			padding: 16px;
		}
		h1 {
			flex-direction: column;
			align-items: stretch;
		}
		article {
			padding: 0;
			border-radius: 0;
			border: none;
			gap: 12px;
		}
	}
</style>