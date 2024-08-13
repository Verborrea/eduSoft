<script lang="ts">
	import { copyToClipboard } from "$lib/utils"

	export let data
</script>

<svelte:head>
  	<title>eduSoft | Estudiantes</title>
</svelte:head>

<header class="fc">
	<h1>Lista de Estudiantes</h1>
	<div class="fc btns">
		<button type="button" class="btn btn-secondary">
			Asignar Grupos
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="17" r="3" stroke="var(--text)" stroke-width="2"/><circle cx="18" cy="17" r="3" stroke="var(--text)" stroke-width="2"/><circle cx="12" cy="7" r="3" stroke="var(--text)" stroke-width="2"/></svg>
		</button>
		<a href="/admin/alumnos/matricula" class="btn btn-primary">Matricular Estudiante</a>
	</div>
</header>
<div class="table">
	<table>
		<thead>
		<tr>
			<th>
				<input type="checkbox" name="selectAll" id="selectAll">
			</th>
			<th> DNI </th>
			<th> GÉNERO </th>
			<th> NOMBRE </th>
			<th> CORREO </th>
			<th> CARRERA </th>
		</tr>
		</thead>
		<tbody>
		{#each data.alumnos as alumno}
		<tr>
			<td>
				<input
					type="checkbox"
					name="select"
					id="select"
				>
			</td>
			<td> {alumno.dni} </td>
			<td>
				<div class="fc svg-container">
					{#if alumno.gender === 'female'}
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="8" r="3.75" stroke="var(--red)" stroke-width="2.5"/><path d="M8 15H12" stroke="var(--red)" stroke-width="2" stroke-linecap="round"/><path d="M10 17L10 12" stroke="var(--red)" stroke-width="2" stroke-linecap="round"/></svg>
						{:else}
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="12" r="3.75" stroke="var(--blue)" stroke-width="2.5"/><path d="M16 8V4" stroke="var(--blue)" stroke-width="2" stroke-linecap="round"/><path d="M12 4L16 4" stroke="var(--blue)" stroke-width="2" stroke-linecap="round"/><path d="M16 4L11 9" stroke="var(--blue)" stroke-width="2" stroke-linecap="round"/></svg>
					{/if}
				</div>
			</td>
			<td> {alumno.name} </td>
			<td>
			<button class="fc" type="button" on:click={()=>copyToClipboard(alumno.expand?.user_id.email)}>
				<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="var(--blue)"><path d="M368.37-237.37q-37.78 0-64.39-26.61t-26.61-64.39v-474.26q0-37.78 26.61-64.39t64.39-26.61h354.26q37.78 0 64.39 26.61t26.61 64.39v474.26q0 37.78-26.61 64.39t-64.39 26.61H368.37Zm0-91h354.26v-474.26H368.37v474.26Zm-171 262q-37.78 0-64.39-26.61t-26.61-64.39v-565.26h91v565.26h445.26v91H197.37Zm171-262v-474.26 474.26Z"/></svg>
				{alumno.expand ? alumno.expand.user_id.email : '-'} 
			</button>
			</td>
			<td> {alumno.expand ? alumno.expand.career.name : '-'} </td>
		</tr>
		{/each}
		</tbody>
	</table>
</div>

<style>
	header {
		padding: 24px;
		justify-content: space-between;
	}
	h1 {
		margin: 0;
	}
	.btns {
		gap: 12px;
	}
	.table {
		padding: 0 24px 24px;
	}
	.svg-container {
		justify-content: center;
	}
	button.fc {
		color: var(--blue);
		gap: 4px;
	}
	button.fc:hover {
		text-decoration: underline;
	}
</style>