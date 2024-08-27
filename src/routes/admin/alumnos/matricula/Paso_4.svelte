<script>
  function volver() {
		window.history.back();
	}
</script>

<form action="" name="paso3">
  <h2>Estudiante matriculado con éxito</h2>
  <div class="flex g12">
    <button class="btn btn-secondary" on:click={volver}>Regresar</button>
    <button class="btn btn-secondary">Imprimir cronograma de pagos</button>
    <button class="btn btn-primary">Imprimir ficha de matrícula</button>
  </div>
</form>

<style>
  form {
    margin: auto;
    text-align: center;
  }
  .flex {
    display: flex;
  }
</style>