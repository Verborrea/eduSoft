<svelte:head>
	<title>eduSoft | Estudiantes</title>
</svelte:head>

<main>
	<h1>Matricular Alumno</h1>
	<h2>1. Actualización de Datos Personales</h2>

	<form action="">
		<div class="seccion">
			<h2>Datos personales</h2>
			<div class="row">
				<label class="r50">
					Apellidos y Nombres:
					<input type="text" id="Name" name="Name" />
				</label>

				<label class="r25">
					Fecha de Nacimiento:
					<input type="date" id="brthDate" name="brthDate" />
				</label>

				<label class="r25">
					DNI:
					<input type="number" id="dni" name="dni" />
				</label>
			</div>
			
			<div class="row">
				<label class="flex1">
					Teléfono Celular:
					<input type="number" />
				</label>
				<label class="flex1">
					Correo Electrónico:
					<input type="email" />
				</label>
			</div>
		
			<div class="row">
				<label class="flex1">
					Lugar de Nacimiento:
					<input type="text" />
				</label>
				<label class="flex1">
					<input type="text" class="flex1"/>
				</label>
				<label class="flex1">
					<input type="text" class="flex1"/>
				</label>
			</div>
			
			<div class="row grow" id="resid">
				<label class="flex1">
					Residencia actual:
					<input type="text" />
				</label>
				<label class="flex1">
					<input type="text" />
				</label>
				<label class="flex1">
					<input type="text" />
				</label>
				<label class="flex1">
					<input type="text" />
				</label>
			</div>
		</div>

		<div class="seccion">
			<h2> Educación Previa </h2>
			<div class="row">
				<label class="flex1">
					Colegio
					<input type="text" />
				</label>
				<label class="flex1">
					Dirección de la IE:
					<input type="text">
				</label>
			</div>
		</div>
			
		<div class="seccion">
			<h2> Persona de contacto </h2>
			<div class="row grow">
				<label class="flex1">
					Nombre:
					<input type="text" />
				</label>
				<label class="flex1">
					Relación:
					<input type="text" />
				</label>
				<label class="flex1">
					Teléfono:
					<input type="number" />
				</label>
			</div>
		</div>

		<div class="seccion">
		<h2> Documentos </h2>
			<div class="row">
				<label>
					Copia DNI:
					<input type="file" />
				</label>
				<label>
					Foto tamaño carnet:
					<input type="file" />
				</label>
				<label>
					Partida de Nacimiento:
					<input type="file" />
				</label>
				<label>
					Certificado de estudios:
					<input type="file" />
				</label>
			</div>
		</div>

		<div class="seccion">
			<h2> Observaciones </h2>
			<textarea name="" id="">El estudiante es medio loco</textarea>
		</div>

		<div>
			<button> Cancelar </button>
			<button> Siguiente </button>
		</div>

	</form>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.seccion {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	h1, h2 {
		margin: 0;
	}
	.row {
		display: flex;
			flex-direction: row;
			gap: 12px;
			align-items: flex-end;
	}
	label {
		font-weight: bold;
	}
	input, textarea{
		margin-top: 8px;
		width: 100%;
		border-radius: 16px;
		padding: 8px 16px;
	}
	.r50 {
		width: 50%;
	}
	.r25 {
		width: 25%;
	}
	.flex1 {
		flex: 1;
	}
	#resid {
		gap: 8px;
	}
	.grow label:first-child {
		flex-grow: 2;
	}
</style>
