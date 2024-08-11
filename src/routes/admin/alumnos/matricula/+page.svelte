<svelte:head>
	<title>eduSoft | Matricular alumno</title>
</svelte:head>

<main>
	<h1>Matricular Alumno</h1>
	<h2>1. Actualización de Datos Personales</h2>

	<form action="">
		<div class="seccion">
			<h2>Datos personales</h2>
			<div class="row grow">
				<label class="flex1">
					Nombres y Apellidos:
					<input type="text" name="Name" placeholder="Juan Pérez" />
				</label>
				<label class="flex1">
					Fecha de Nacimiento:
					<input type="date" name="brthDate" />
				</label>
				<label class="flex1">
					DNI:
					<input type="number" name="dni" placeholder="70625795" />
				</label>
				<label class="flex1">
					Género:
					<select name="">
						<option value="1" selected> Seleccione una opción </option>
						<option value="2"> Masculino </option>
						<option value="3"> Femenino </option>
					</select>
				</label>
			</div>
			
			<div class="row">
				<label class="flex1">
					Correo Electrónico:
					<input type="email" placeholder="juan.perez@ejemplo.com" />
				</label>
				<label class="flex1">
					Teléfono Celular:
					<input type="number" placeholder="999 888 777" />
				</label>
			</div>
		
			<p class="group"> Lugar de Nacimiento: </p>
			<div class="row">
				<label class="flex1">
					Departamento:
					<input type="text" placeholder="Arequipa" />
				</label>
				<label class="flex1">
					Provincia:
					<input type="text" class="flex1" placeholder="Islay" />
				</label>
				<label class="flex1">
					Distrito:
					<input type="text" class="flex1" placeholder="Mollendo" />
				</label>
			</div>
			
			<p class="group">Residencia actual:</p>
			<div class="row grow" id="resid">
				<label class="flex1">
					Dirección:
					<input type="text" placeholder="Residencial Santa Fe" />
				</label>
				<label class="flex1">
					Departamento:
					<input type="text" placeholder="Arequipa" />
				</label>
				<label class="flex1">
					Provincia:
					<input type="text" placeholder="Arequipa" />
				</label>
				<label class="flex1">
					Distrito:
					<input type="text" placeholder="Yanahuara" />
				</label>
			</div>
		</div>

		<div class="seccion">
			<h2> Educación Previa </h2>
			<div class="row">
				<label class="flex1">
					Colegio:
					<input type="text" placeholder="San Francisco de Asis" />
				</label>
				<label class="flex1">
					Dirección de la IE:
					<input type="text" placeholder="Calle San Francisco H-2">
				</label>
			</div>
		</div>
			
		<div class="seccion">
			<h2> Persona de contacto </h2>
			<div class="row grow">
				<label class="flex1">
					Nombre:
					<input type="text" placeholder="María Pérez" />
				</label>
				<label class="flex1">
					Relación:
					<input type="text" placeholder="Mamá" />
				</label>
				<label class="flex1">
					Teléfono:
					<input type="number" placeholder="987 654 321" />
				</label>
			</div>
		</div>

		<div class="seccion">
		<h2> Documentos </h2>
			<div class="row">
				<label class="flex1">
					Copia DNI:
					<input type="file" />
				</label>
				<label class="flex1">
					Foto tamaño carnet:
					<input type="file" />
				</label>
				<label class="flex1">
					Partida de Nacimiento:
					<input type="file" />
				</label>
				<label class="flex1">
					Certificado de estudios:
					<input type="file" />
				</label>
			</div>
		</div>

		<div class="seccion">
			<h2> Observaciones </h2>
			<textarea name="" id="" placeholder="Detalles importantes..."></textarea>
		</div>

		<div class="row reverse-row">
			<button class="btn btn-primary"> Siguiente </button>
			<button class="btn btn-secondary"> Cancelar </button>
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
	.reverse-row {
		flex-direction: row-reverse;
	}
	.group {
		font-size: 18px;
		font-weight: bold;
		margin: 16px 0 0 0;
	}
	label {
		font-weight: bold;
	}
	input, textarea, select{
		margin-top: 8px;
		width: 100%;
		border-radius: 16px;
		padding: 8px 16px;
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
