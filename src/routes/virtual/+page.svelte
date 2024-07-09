<script>
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
	]
</script>

<svelte:head>
  <title>eduSoft | Aula Virtual</title>
</svelte:head>

<main class="super">
	<h1>Aula Virtual</h1>
	<div class="overflow-container">
		<div class="slides">
			{#each units as unit, index}
				<Slide index={index + 1} {unit}/>
			{/each}
		</div>
	</div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
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
  .slides {
    overflow-x: scroll;
    display: flex;
    gap: 24px;
    height: 100%;
  }
	@media (max-width: 700px) {
		h1 {
			display: none;
		}
	}
</style>