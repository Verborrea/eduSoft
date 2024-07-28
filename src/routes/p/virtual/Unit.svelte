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

	let draggedTheme: Theme | null = null

	function handleDragStart(event: DragEvent, theme: Theme) {
		draggedTheme = theme
		if (event.dataTransfer) {
			event.dataTransfer.effectAllowed = 'move'
		}
	}

	function handleDragOver(event: DragEvent) {
		event.preventDefault()
		if (event.dataTransfer) {
			event.dataTransfer.dropEffect = 'move'
		}
	}

	function handleDrop(event: DragEvent, targetTheme: Theme) {
		event.preventDefault()
		if (draggedTheme) {
			const draggedIndex = unit.themes.indexOf(draggedTheme)
			const targetIndex = unit.themes.indexOf(targetTheme)

			unit.themes.splice(draggedIndex, 1)
			unit.themes.splice(targetIndex, 0, draggedTheme)
			unit = unit

			draggedTheme = null
		}
	}
</script>

<dialog bind:this={editModal}>
	<form class="fcol16" action="">
		<h1>Editar Tema</h1>
		<div class="input-field fcol16">
			<label for="theme-name-{index}">Nombre:</label>
			<input
				class="input focus-visible"
				id="theme-name-{index}"
				type="text"
				bind:value={editingThemeName}
				placeholder="Nombre del Tema"
			>
		</div>
		<div class="input-field fcol16">
			<label for="theme-text-{index}">Contenido:</label>
			<textarea
				class="input focus-visible"
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
		<input class="input focus-visible" bind:value={unit.name}>
		<button type="button" class="btn btn-outline btn-outline-red focus-visible" on:click={deleteUnit}>
			Eliminar
		</button>
	</h1>
	<header class="fc">
		<input
			class="input focus-visible"
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
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<section class="themes fcol16" >
		{#each unit.themes as theme, i (theme.id)}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="theme fc"
			draggable="true"
			aria-dropeffect="move"
			animate:flip={{ duration: 200 }}
			in:fly={{ y: 100, duration: 200 }}
			on:dragstart={(event) => handleDragStart(event, theme)}
			on:dragover={handleDragOver}
			on:drop={(event) => handleDrop(event, theme)}
		>
			<span><span class="d-o">Tema</span> {i + 1}. {theme.name}</span>
			<button class="option" type="button" title="Editar" on:click={e => openModal(theme)}>
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--yellow-dark)"><path d="M202.63-202.87h57.24l374.74-374.74-56.76-57-375.22 375.22v56.52Zm-90.76 91v-185.3l527.52-526.76q12.48-11.72 27.7-17.96 15.21-6.24 31.93-6.24 16.48 0 32.2 6.24 15.71 6.24 27.67 18.72l65.28 65.56q12.48 11.72 18.34 27.56 5.86 15.83 5.86 31.79 0 16.72-5.86 32.05-5.86 15.34-18.34 27.82L297.65-111.87H111.87Zm642.87-586.39-56.24-56.48 56.24 56.48Zm-148.89 92.41-28-28.76 56.76 57-28.76-28.24Z"/></svg>
			</button>
			<button class="option" type="button" title="Borrar Tema" on:click={e => deleteTheme(e.currentTarget, theme.id)}>
				<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="var(--red)" d="M6.5 17C6.0875 17 5.73437 16.8531 5.44062 16.5594C5.14687 16.2656 5 15.9125 5 15.5V5.5H4V4H8V3H12V4H16V5.5H15V15.491C15 15.9137 14.8531 16.2708 14.5594 16.5625C14.2656 16.8542 13.9125 17 13.5 17H6.5ZM13.5 5.5H6.5V15.5H13.5V5.5ZM8 14H9.5V7H8V14ZM10.5 14H12V7H10.5V14Z"/></svg>
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
		align-self: stretch;
		height: 100%;
		overflow-y: scroll;
		transition: --var1 .5s;
		gap: 12px;
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
	.theme {
		text-align: start;
		background: var(--gray-light);
		padding: 8px 16px;
		border-radius: 12px;
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
	.theme:hover {
		background: var(--gray);
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
		dialog {
			width: 100%;
			height: 100dvh;
			margin: 0;
			max-height: 100dvh;
			border-radius: 0;
		}
		textarea {
			min-height: 200px;
		}
		.focus-visible:focus {
			outline: none;
		}
	}
</style>