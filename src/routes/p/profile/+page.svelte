<main class="super">
	<h1>Mi Perfil</h1>
	<form action="/logout" method="post">
		<button type="submit" class="btn btn-outline">Cerrar Sesión</button>
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
	button {
		text-decoration: none;
		color: var(--red);
    	border-color: var(--red);
	}
	button:hover {
		background: var(--red);
		color: var(--back);
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