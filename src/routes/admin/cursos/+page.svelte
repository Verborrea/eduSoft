<script>
	export let data;
</script>

<svelte:head>
	<title>eduSoft | Cursos</title>
</svelte:head>

<div class="main">
	<header class="fc">
		<h1>Cursos</h1>
	</header>
	<table>
		<thead>
			<tr>
				<th>
					<input type="checkbox" name="selectAll" id="selectAll">
				</th>
				<th>NOMBRE</th>
				<th>DESCRIPCIÓN</th>
			</tr>
		</thead>
		<tbody>
			{#each data.cursos as curso}
				<tr>
					<td>
						<input
							type="checkbox"
							name="select"
							id="select"
						>
					</td>
					<td>{curso.nombre_curso}</td>
					<td>{curso.descripcion}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	h1 {
		margin: 0;
	}
	.main {
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding: 24px;
	}
</style>