<script>
  import { createEventDispatcher } from "svelte";

  let form
  const dispatch = createEventDispatcher()

  function nextPage() {
    const formAppend = new FormData(form)
    dispatch('formAppend', { formAppend })
    dispatch('next', { page: 2 })
  }

  function volver() {
		window.history.back();
	}
</script>

<form bind:this={form} action="" name="paso2">
  <h2>2. Grupo de inicio</h2>
  <div class="seccion">
		<div class="row">
			<label class="flex1">
				<span>Especialidad (Carrera)</span>
				<select name="carrera" class="select">
					<option value="0" selected disabled> Seleccione una opción </option>
				</select>
			</label>
			<label class="flex1">
				Módulo:
				<input name="modulo" type="text" placeholder="3: Volquete y Montacarga">
			</label>
		</div>
		<label class="flex1">
			<span>Grupo:</span>
			<select name="grupo" class="select">
				<option value="0" selected disabled> Seleccione una opción </option>
			</select>
		</label>
  </div>
  <div class="row end">			
    <button class="btn btn-secondary" type="button" on:click={volver}>Cancelar</button>
    <button class="btn btn-primary" type="submit" on:click={nextPage}>Siguiente</button>
  </div>
</form>
<style>
	h2 {
		margin: 0;
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
	.row {
		display: flex;
			flex-direction: row;
			gap: 12px;
			align-items: flex-end;
	}
	.end {
		justify-content: flex-end;
	}
	.flex1 {
		flex: 1;
	}
	label {
		font-weight: bold;
	}
	input, .select{
		margin-top: 8px;
		width: 100%;
		border-radius: 12px;
		padding: 10px 16px;
	}
</style>