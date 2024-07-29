<main class="super">
	<h1>Mi Perfil</h1>
	<form action="/logout" method="post">
		<button type="submit" class="btn btn-outline btn-outline-red">Cerrar Sesión</button>
	</form>
</main>

<style>
	h1 {
		margin: 0;
	}
	main {
		max-width: 900px;
		width: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
    	align-items: flex-start;
	}
	@media (max-width: 700px) {
		form {
			align-self: stretch;
		}
		button {
			width: 100%;
		}
		main {
			flex-direction: column;
		}
	}
</style>