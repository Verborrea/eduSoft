<script>
  export let data

	function volver() {
		window.history.back();
	}
</script>

<svelte:head>
  <title>eduSoft | Añadir Curso</title>
</svelte:head>

<div class="main">
	<header class="flex g16">
		<button on:click={volver} type="button" class="prev"><h1>Lista de Cursos</h1></button>
		<svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.63182 10.1778L0 3.39862L2.85934 0.60144L12.2275 10.1778L3.20716 19.3986L0.347826 16.6014L6.63182 10.1778Z" fill="#B4B4B4"/></svg>
		<h1>Añadir Curso</h1>
	</header>

	<form method="post" class="fcol24">
		<label>
			Nombre:
			<input name="name" class="input" type="text" placeholder="Ej. Auditoría y Negocios" required>
		</label>
		<label class="flex1">
			Módulo:
			<div class="select">
				<select name="module" required>
					<option value="" selected disabled> Ej. VII</option>
					<option value="I">I</option>
					<option value="II">II</option>
					<option value="III">III</option>
					<option value="IV">IV</option>
					<option value="V">V</option>
					<option value="VI">VI</option>
					<option value="VII">VII</option>
					<option value="VIII">VIII</option>
					<option value="IX">IX</option>
					<option value="X">X</option>
				</select>
			</div>
		</label>
		<label>
			Carrera:
			<div class="select">
				<select name="career" required>
				<option value="" selected disabled>Seleccione una carrera</option>
				{#each data.careers as career}       
					<option value={career.id}> {career.short_name} </option>
				{/each}
				</select>
			</div>
		</label>
		<label>
			Descripción:
			<textarea name="description" class="input" placeholder="¿Sobre qué trata este curso?" rows=4></textarea>
		</label>
		<div class="flex justify-end g12">
			<button class="btn btn-secondary" type="button" on:click={volver}>Cancelar</button>
			<button class="btn btn-primary" type="submit">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 6V15.5C17 15.9125 16.8531 16.2656 16.5594 16.5594C16.2656 16.8531 15.9125 17 15.5 17H4.5C4.0875 17 3.73437 16.8531 3.44062 16.5594C3.14687 16.2656 3 15.9125 3 15.5V4.5C3 4.0875 3.14687 3.73438 3.44062 3.44063C3.73437 3.14688 4.0875 3 4.5 3H14L17 6ZM10 14.75C10.625 14.75 11.1562 14.5312 11.5938 14.0938C12.0312 13.6562 12.25 13.125 12.25 12.5C12.25 11.875 12.0312 11.3438 11.5938 10.9062C11.1562 10.4688 10.625 10.25 10 10.25C9.375 10.25 8.84375 10.4688 8.40625 10.9062C7.96875 11.3438 7.75 11.875 7.75 12.5C7.75 13.125 7.96875 13.6562 8.40625 14.0938C8.84375 14.5312 9.375 14.75 10 14.75ZM5.5 8.5H12.5V5.5H5.5V8.5Z" fill="white"/></svg>
				Guardar
			</button>
		</div>
	</form>
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding: 24px;
	}
	header {
		align-items: center ;
	}
	h1 {
		margin: 0;
	}
	.prev {
		color: #b4b4b4;
	}
	.flex {
		display: flex;
	}
	.flex1 {
		flex: 1;
	}
	form {
		max-width: 550px;
	}
	.select {
		margin-top: 8px;
	}
	select {
		width: 100%;
	}
	input, textarea{
		margin-top: 8px;
		width: 100%;
	}
	.justify-end {
		justify-content: flex-end;
	}
</style>