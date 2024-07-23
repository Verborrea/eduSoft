<script lang="ts">
	let hidden = true

	function closeModal() {
		hidden = true
	}
</script>

<form class="fcol16" method="get" class:hidden={hidden}>
	<input type="text">
	<div class="fc btns">
		<button type="button" class="btn btn-secondary" on:click={closeModal}>Cancelar</button>
		<button type="button" class="btn btn-primary" on:click={closeModal}>Guardar</button>
	</div>
</form>

<style>
	.btns {
		gap: 8px;
	}
	form {
		padding: 16px;
		position: fixed;
		inset: 0;
		background: #ffffffe0;
	}
	form.hidden {
		display: none;
	}
</style>