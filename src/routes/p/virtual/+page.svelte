<script lang="ts">
	import { deserialize } from '$app/forms';
	import { currentGroup, imagesToDelete } from '$lib/stores'
	import { generateTimestampID } from '$lib/utils'
	import type { Unit } from '$lib/types'
	import Slide from './Slide.svelte'

	export let data

	let units: Unit[] = JSON.parse(JSON.stringify(data.units))
	let loading = false

	function addUnit() {
		units = [...units, {
			id: generateTimestampID(),
			name: 'Unidad sin nombre',
			themes: []
		}]
		setTimeout(() => {
			const newElement = document.getElementById(`unit${units.length}`)
			if (newElement) {
				newElement.scrollIntoView({ behavior: 'smooth' })
			}
			gotoUnit(units.length - 1)
		}, 100)
	}

	function deleteUnit(event: any) {
		units = units.filter((u: Unit) => {
			const toDelete = u.id !== event.detail.id
			if (toDelete) {
				u.themes.forEach(t => {
					$imagesToDelete = [...$imagesToDelete, ...t.images]
				});
			}
			return !toDelete
		})
	}

	let active = 0

	function gotoUnit(index: number) {
		active = index
	}

	function setActive(target: EventTarget | null) {
		if (target instanceof HTMLElement) {
			let num_elements = units.length - 1;
			let total = target.scrollWidth - target.clientWidth;
			let ratio = target.scrollLeft / total;
			if (isNaN(ratio) || ratio === 0) {
				active = 0;
			} else if (ratio === 1) {
				active = num_elements;
			} else {
				active = Math.round(ratio * num_elements);
			}
		}
	}

	async function saveUnits() {
		try {
			loading = true

			// Crear un nuevo objeto FormData
			const formData = new FormData();
			formData.append('units', JSON.stringify(units));
			formData.append('groupId', $currentGroup.id);

			// Recorrer las unidades en busqueda de archivos
			units.forEach((unit) => {
				unit.themes.forEach((theme) => {
					theme.itu.forEach((imageFile: any) => {
						formData.append('itu', imageFile.file);
					});
					theme.itd.forEach((image: string) => {
						formData.append('itd', image);
					});
				});
			});

			// borrar las imagenes de los temas y unidades eliminados
			$imagesToDelete.forEach((image: string) => {
				formData.append('itd', image);
			});

			const response = await fetch('/p/virtual', {
				method: 'POST',
				body: formData
			});

			if (!response.ok) {
				throw new Error('Error en la solicitud: ' + response.statusText);
			}

			if (!response.ok) {
				throw new Error('Error en la solicitud: ' + response.statusText);
			}

			const result: any = deserialize(await response.text());

			// Log para verificar el contenido de new_units
			units = result.data.units
			$imagesToDelete = []
			data.units = result.data.units

		} catch (error) {
			console.error('Hubo un problema con la solicitud:', error);
		} finally {
			loading = false
		}
	}

	function resetUnits() {
		$imagesToDelete = []
		units = JSON.parse(JSON.stringify(data.units))
	}
</script>

<svelte:head>
  	<title>eduSoft | Aula Virtual</title>
</svelte:head>

<main class="super">
	{#if loading}
	<div class="loading-background"></div>
	{/if}
	<header class="fc justify-between">
		<h1>Aula Virtual</h1>
		<div class="fc btns">
			<button type="button" class="btn btn-secondary" on:click={resetUnits}>
				<span>Deshacer cambios</span>
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 16V14.5H12C12.6944 14.5 13.2847 14.2569 13.7708 13.7708C14.2569 13.2847 14.5 12.6944 14.5 12C14.5 11.3056 14.2569 10.7153 13.7708 10.2292C13.2847 9.74306 12.6944 9.5 12 9.5H6.875L8.8125 11.4375L7.75 12.5L4 8.75L7.75 5L8.8125 6.0625L6.875 8H12C13.1111 8 14.0556 8.38889 14.8333 9.16667C15.6111 9.94444 16 10.8889 16 12C16 13.1111 15.6111 14.0556 14.8333 14.8333C14.0556 15.6111 13.1111 16 12 16H6Z" fill="#111111"/>
				</svg>
			</button>
			<button type="button" class="btn btn-primary" on:click={saveUnits} disabled={loading}>
				<span>Guardar</span>
				{#if loading}
					<svg class="icon-loading" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="white"><path d="M216.48-187.22v-75.58h66.11l3.11 2.39q-45.24-41.44-72.46-97.66-27.22-56.21-27.22-121.93 0-104.83 64.71-183.6 64.7-78.77 163.25-101.81v86q-63.24 20.84-104.1 74.87-40.86 54.02-40.86 124.54 0 46.57 19.14 86.49 19.14 39.92 51.19 68.44l-1.92-1.91V-384h75.59v196.78H216.48Zm329.54-7.37v-86q63.24-20.84 104.1-74.87 40.86-54.02 40.86-124.54 0-46.57-19.14-86.49-19.14-39.92-51.19-68.44l1.92 1.91V-576h-75.59v-196.78h196.54v75.58h-66.11l-3.11-2.39q45.72 40.96 72.7 97.42 26.98 56.45 26.98 122.17 0 104.83-64.71 183.6-64.7 78.77-163.25 101.81Z"/></svg>
				{:else}
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M17 6V15.5C17 15.9125 16.8531 16.2656 16.5594 16.5594C16.2656 16.8531 15.9125 17 15.5 17H4.5C4.0875 17 3.73437 16.8531 3.44062 16.5594C3.14687 16.2656 3 15.9125 3 15.5V4.5C3 4.0875 3.14687 3.73438 3.44062 3.44063C3.73437 3.14688 4.0875 3 4.5 3H14L17 6ZM10 14.75C10.625 14.75 11.1563 14.5313 11.5938 14.0938C12.0313 13.6563 12.25 13.125 12.25 12.5C12.25 11.875 12.0313 11.3438 11.5938 10.9063C11.1563 10.4688 10.625 10.25 10 10.25C9.375 10.25 8.84375 10.4688 8.40625 10.9063C7.96875 11.3438 7.75 11.875 7.75 12.5C7.75 13.125 7.96875 13.6563 8.40625 14.0938C8.84375 14.5313 9.375 14.75 10 14.75ZM5.5 8.5H12.5V5.5H5.5V8.5Z" fill="white"/>
				</svg>
				{/if}
			</button>
		</div>
	</header>
	<div class="overflow-container" class:empty={units.length === 0}>
		{#if units.length > 0}
		<div class="slides" on:scroll={(e) => setActive(e.target)}>
			{#each units as unit, index}
			<Slide index={index + 1} {unit} on:delete={deleteUnit}/>
			{/each}
		</div>
		{:else}
		<h2>Haga click en + para crear una nueva unidad</h2>
		{/if}
	</div>
	<nav class="fc">
		{#each { length: units.length} as _, index}
			<a href="#unit{index + 1}" class:active={active == index} on:click={()=>{gotoUnit(index)}}>
				{index + 1}
			</a>
		{/each}
		<button type="button" on:click={addUnit}>+</button>
	</nav>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
	}
	header {
		width: 100%;
		max-width: 900px;
	}
	.btns {
		gap: 16px;
	}
	h1 {
		margin: 0;
		color: var(--yellow);
	}
	.overflow-container {
		flex: 1;
		width: 100%;
		max-width: 900px;
		overflow-y: hidden;
	}
	.overflow-container.empty {
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--gray-dark);
		font-weight: 500;
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
	nav * {
		text-decoration: none;
		color: var(--inactive);
		font-size: 24px;
		padding: 0 8px;
	}
	nav a.active, nav button:hover {
		color: var(--text);
	}
	@media (max-width: 700px) {
		h1 {
			font-size: 24px;
		}
		span {
			display: none;
		}
		.btn {
			padding: 10px;
			border-radius: 8px;
		}
	}
</style>