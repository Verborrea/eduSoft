<script lang="ts">
	export let data

	function volver() {
		window.history.back();
	}

	const days = [
		{short: 'L', name: 'lunes', selected: false},
		{short: 'M', name: 'martes', selected: false},
		{short: 'X', name: 'miercoles', selected: false},
		{short: 'J', name: 'jueves', selected: false},
		{short: 'V', name: 'viernes', selected: false},
	];

	function toggleDay(dayIndex: number) {
		days[dayIndex].selected = !days[dayIndex].selected;
	}

	let startTime = '';
	let endTime = '';
	let horarios: { dia:string, inicio:string, fin:string}[] = [];

	function generarJSON() {
		// Crear una entrada para cada día seleccionado
		const selectedDays = days.filter(day => day.selected);
		const nuevosHorarios = selectedDays.map(day => ({
			dia: day.name,
			inicio: startTime,
			fin: endTime
		}));

		// Actualizar la lista de horarios
		horarios = [...horarios, ...nuevosHorarios];

		// Crear JSON para revisar el formato
		const datosFormulario = {
			curso: 'ejemplo de curso',
			horarios
		};
		const jsonString = JSON.stringify(datosFormulario, null, 2);
		console.log(jsonString);;
	}

	function eliminarHorario(index: number) {
		horarios = horarios.filter((_, i) => i !== index);
	}
	
</script>

<svelte:head>
  <title>eduSoft | Añadir Grupo</title>
</svelte:head>

<div class="main">
	<header class="flex g16">
		<button on:click={volver} type="button" class="prev"><h1>Lista de Grupos</h1></button>
		<svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.63182 10.1778L0 3.39862L2.85934 0.60144L12.2275 10.1778L3.20716 19.3986L0.347826 16.6014L6.63182 10.1778Z" fill="#B4B4B4"/></svg>
		<h1>Añadir Grupo</h1>
	</header>

	<form method="post" class="fcol24">
		<div class="fc g16">
			<label for="seccion" class="grow">
				Sección:
				<input id="seccion" name="seccion" class="input" type="text" placeholder="Ej. B" required>
			</label>
			<label for="turno" class="grow">
				Turno:
				<select id="turno" name="turno" class="select" required>
					<option value="" selected disabled>Seleccione uno</option>
					<option value="Mañana">Mañana</option>
					<option value="Tarde">Tarde</option>
					<option value="Noche">Noche</option>
				</select>
			</label>
			<label for="modalidad" class="grow">
				Modalidad:
				<select id="modalidad" name="is_virtual" class="select" required>
					<option value="" selected disabled>Seleccione una</option>
					<option value="false">Presencial</option>
					<option value="true">Virtual</option>
				</select>
			</label>
		</div>
		<label for="period">
			Periodo:
			<select id="period" name="period" class="select" required>
				<option value="" selected disabled>Seleccione un periodo</option>
				{#each data.periods as period}
					<option value={period}>{period}</option>
				{/each}
			</select>
		</label>
		<label for="course">
			Curso:
			<select id="course" name="course" class="select" required>
				<option value="" selected disabled>Seleccione un curso</option>
				{#each data.courses as c}
					<option value={c.id}>{c.name}</option>
				{/each}
			</select>
		</label>
		<label for="teacher">
			Profesor:
			<select id="teacher" name="teacher" class="select" required>
				<option value="" selected disabled>¿Qué profesor enseñará el curso?</option>
				{#each data.teachers as t}
					<option value={t.id}>{t.name}</option>
				{/each}
			</select>
		</label>
		<div class="seccion">
			<h2>Horarios</h2>
			<div class="row">
				<label>
					Inicio:
					<input type="time" id="" bind:value={startTime}>
				</label>
				<label>
					Fin:					
					<input type="time" id="" bind:value={endTime}>
				</label>
				<label for="">
					Días
					<div class="row">
						{#each days as day, index}
						<button class="dia {day.selected ? 'selected' : ''}" on:click={() => toggleDay(index)}>
							{day.short}
						</button>
						{/each}
					</div>
				</label>
			</div>
		</div>
		<button type="button" class="btn" on:click={generarJSON}>Generar JSON</button>		

		<div id="horarios-container">
			{#each horarios as horario, index}
				<div class="horario-item">
					<span>{horario.dia} de {horario.inicio} a {horario.fin}</span>
					<button class="close-btn" on:click={() => eliminarHorario(index)}>X</button>
				</div>
			{/each}
		</div>


		<div class="flex justify-end g12">
			<button class="btn" type="button" on:click={volver}>Cancelar</button>
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
	form {
		max-width: 600px;
	}
	.select {
		margin-top: 8px;
	}
	select {
		width: 100%;
	}
	input{
		margin-top: 8px;
		width: 100%;
	}
	.justify-end {
		justify-content: flex-end;
	}
	h2 {
		margin: 0;
	}
	label {
		font-weight: bold;
	}
	input[type=time] {
		height: 44px;
		border-radius: 12px;
		padding: 10px 16px;
	}
	.seccion {
    width: 100%;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.row {
		display: flex;
			flex-direction: row;
			gap: 12px;
			align-items: flex-end;
	}
	.dia {
		width: 44px;
		height: 44px;
		margin-top: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--gray);
		border-radius: 12px;
		font-weight: bold;
		user-select: none;
	}
	.dia:hover {
		background-color: #CFCFCF;
	}
	.dia.selected {
		background-color: var(--blue);
	}
	#horarios-container {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.horario-item {
		display: flex;
		padding: 10px 16px;
		justify-content: space-between;
		background-color: var(--gray);
		border-radius: 12px;
	}
</style>