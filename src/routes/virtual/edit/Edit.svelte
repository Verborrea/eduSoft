<script lang="ts">
	import { hiddenEditModal, themename } from '$lib/stores'

	function closeModal() {
		$hiddenEditModal = true
	}

</script>

<article class="fc" class:hidden={$hiddenEditModal}>
	<form class="fcol16" method="get">
		<label for="name">Nombre:</label>
		<input type="text" class="focus-visible" id="name" name="name" bind:value={$themename}>
		<div class="fc btns">
			<button type="button" class="btn btn-secondary" on:click={closeModal}>Cancelar</button>
			<button type="button" class="btn btn-primary">Guardar</button>
		</div>
	</form>
</article>

<style>
	.btns {
		gap: 8px;
	}
	article {	
		position: fixed;
		inset: 0;
		background: #ffffffe0;
		justify-content: center;
	}
	article.hidden {
		display: none;
	}
	form {
		width: 100%;
		max-width: 900px;
		padding: 16px;
		justify-content: center;
	}
	input {
		background: var(--gray-light);
		padding: 10px 16px;
		border-radius: 8px;
		border: none;
	}
	input:hover {
		background: var(--gray-dark);
	}
</style>