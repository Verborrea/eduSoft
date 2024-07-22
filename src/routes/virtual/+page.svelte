<script lang="ts">
	import Slide from './Slide.svelte'

	const units = [
		{
			name: 'Realidad Peruana en la época republicana',
			themes: [
				{
					name: 'Independencia y Consolidación Republicana',
					text: 'Esta unidad explora los eventos y procesos clave que marcaron el inicio y los primeros años de la República del Perú, desde el movimiento independentista liderado por figuras como José de San Martín y Simón Bolívar, hasta la formación de nuevas estructuras políticas, económicas y sociales.',
					files: [
						{ name: 'Lectura 1', href: 'link/to/your/download/file' },
						{ name: 'Lectura 2', href: 'link/to/your/download/file' }
					],
					images: [
						'https://art.pixilart.com/4b680819d6447f3.gif'
					]
				},
				{
					name: 'Economía y Sociedad en la República',
					text: 'Esta unidad explora la evolución económica y social del Perú durante la época republicana. Desde la importancia inicial de la minería hasta la diversificación económica posterior.',
					images: [
						'https://www.publicdomainpictures.net/pictures/130000/velka/keep-calm-and-carry-on-1441446793oby.jpg'
					]
				},
				{
					name: 'Independencia y Consolidación Republicana',
					text: 'Esta unidad explora los eventos y procesos clave que marcaron el inicio y los primeros años de la República del Perú, desde el movimiento independentista liderado por figuras como José de San Martín y Simón Bolívar, hasta la formación de nuevas estructuras políticas, económicas y sociales.',
					files: [
						{ name: 'Lectura 1', href: 'link/to/your/download/file' },
						{ name: 'Lectura 2', href: 'link/to/your/download/file' }
					]
				},
				{
					name: 'Economía y Sociedad en la República',
					text: 'Esta unidad explora la evolución económica y social del Perú durante la época republicana. Desde la importancia inicial de la minería hasta la diversificación económica posterior.',
				}
			]
		},
		{
			name: 'Diversidad del país',
			themes: [
				{
					name: 'Tema con solo documentos',
					files: [
						{ name: 'Lectura 1', href: 'link/to/your/download/file' },
						{ name: 'Lectura 2', href: 'link/to/your/download/file' }
					]
				}
			]
		},
		{
			name: 'Diversidad del país',
			themes: [
				{
					name: 'Tema con solo documentos',
					text: 'La diversidad cultural del Perú se manifiesta en una mezcla única de identidades indígenas, mestizas y afroperuanas, reflejo de siglos de interacción y mestizaje que han enriquecido la sociedad peruana con una variedad de expresiones culturales y sociales.'
				},
				{
					name: 'Patrimonio Cultural',
					text: 'El patrimonio cultural y la artesanía en el Perú son pilares fundamentales que reflejan la historia, la creatividad y la diversidad del país. Desde sitios arqueológicos hasta técnicas artesanales ancestrales, constituyen un legado vivo que enriquece la identidad nacional.'
				}
			]
		}
	]

	let active = 0

	function gotoUnit(index: number) {
		active = index
	}

	function setActive(target: EventTarget | null) {
		if (target instanceof HTMLElement) {
			let num_elements = units.length - 1;
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
	<!-- <h1>Aula Virtual</h1> -->
	<div class="overflow-container">
		<div class="slides" on:scroll={(e) => setActive(e.target)}>
			{#each units as unit, index}
				<Slide index={index + 1} {unit}/>
			{/each}
		</div>
	</div>
	<nav>
		{#each { length: units.length} as _, index}
			<a href="#unit{index + 1}" class:active={active == index} on:click={()=>{gotoUnit(index)}}>
				{index + 1}
			</a>
		{/each}
	</nav>
</main>

<style>
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
	nav a {
		text-decoration: none;
		color: var(--inactive);
		font-size: 24px;
		padding: 0 8px;
    	margin: 0 8px;
	}
	nav a.active {
		color: var(--text);
	}
	@media (max-width: 700px) {
		h1 {
			display: none;
		}
		nav a {
			font-size: 20px;
		}
	}
</style>