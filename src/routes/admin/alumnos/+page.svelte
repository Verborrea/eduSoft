<script lang="ts">
	import { copyToClipboard } from "$lib/utils"

	export let data
</script>

<svelte:head>
  	<title>eduSoft | Estudiantes</title>
</svelte:head>

<main>
	<h1>Lista de Estudiantes</h1>
	<table>
		<thead>
		<tr>
			<th> DNI </th>
			<th> NOMBRE </th>
			<th> GÉNERO </th>
			<th> CORREO </th>
			<th> CARRERA </th>
		</tr>
		</thead>
		<tbody>
		{#each data.alumnos as alumno}
		<tr>
			<td> {alumno.dni} </td>
			<td> {alumno.name} </td>
			<td>
				<div class="fc svg-container">
					{#if alumno.gender === 'female'}
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--red)"><path d="M406.57-93.37v-191.04H284.41l127.21-297.55q8.18-20.43 27.16-32.67 18.98-12.24 41.22-12.24t41.22 12.26q18.98 12.26 27.21 32.7l127.16 297.5H553.43v191.04H406.57Zm73.21-604.54q-36.21 0-61.79-25.8-25.58-25.79-25.58-62.01 0-36.21 25.8-61.79 25.79-25.58 62.01-25.58 36.21 0 61.79 25.8 25.58 25.79 25.58 62.01 0 36.21-25.8 61.79-25.79 25.58-62.01 25.58Z"/></svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--blue)"><path d="M392.59-77.37v-279.04h-80v-234.5q0-37.54 26.73-64.27 26.73-26.73 64.27-26.73h152.82q37.54 0 64.27 26.73 26.73 26.73 26.73 64.27v234.5h-80v279.04H392.59Zm87.44-644.54q-34.46 0-59.04-24.55-24.58-24.54-24.58-59.01 0-34.46 24.55-59.04 24.54-24.58 59.01-24.58 34.46 0 59.04 24.55 24.58 24.54 24.58 59.01 0 34.46-24.55 59.04-24.54 24.58-59.01 24.58Z"/></svg>
					{/if}
				</div>
			</td>
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
</main>

<style>
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