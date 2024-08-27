<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher()
  function nextPage() {
    dispatch('next', {
      page: 3
    })
  }

  function volver() {
		window.history.back();
	}
</script>

<form action="" name="paso3">
  <h2>3. Pagos</h2>
  <div class="seccion"> 
    <label>
      <div class="justify-between">
        <span>Matrícula</span>
        <span>Precio Promoción</span>
      </div>
      <input type="text" placeholder="S/. 100">
    </label>
  </div>

  <div class="seccion">
    <h2>Primera Pensión</h2>
    <div class="row">
      <label class="flex1">
        Costo
        <input type="text" placeholder="S/. 310">
      </label>
      <label class="flex1">
        A cuenta
        <input type="text" placeholder="S/.250">
      </label>
      <label class="flex1">
        Saldo Pendiente
        <input type="text" placeholder="S/. 60">
      </label>
    </div>
  </div>
  
  <div class="seccion">
    <h2>Fechas</h2>
    <div class="row">
      <label class="flex1">
        Fecha de Matrícula
        <input type="date" placeholder="S/. 310">
      </label>
      <label class="flex1">
        Fecha de inicio de Módulo
        <input type="date" placeholder="S/.250">
      </label>
      <label class="flex1">
        Fecha de vencimiento
        <input type="date" placeholder="S/. 60">
      </label>
    </div>
  </div>
  <div class="row end">			
    <button class="btn btn-secondary" type="button" on:click={volver}>Cancelar</button>
    <button class="btn btn-primary" type="submit" on:click={nextPage}>Finalizar</button>
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
	.end {
		justify-content: flex-end;
	}
	label {
		font-weight: bold;
	}
	input{
		margin-top: 8px;
		width: 100%;
		border-radius: 12px;
		padding: 10px 16px;
	}
	input[type=date] {
		height: 44px;
	}
	.flex1 {
		flex: 1;
	}
  .justify-between {
    display: flex;
    justify-content: space-between;
  }
</style>