<script lang="ts">
	import { enhance } from '$app/forms'
	import src from '$lib/assets/img.png'

	export let form

	let username = form?.username || ''
	let visible = false
	let loading = false

	$: passwordType = visible ? 'text' : 'password'

	function toggleVisibility() {
		visible = !visible
	}
</script>

<svelte:head>
  	<title>eduSoft | Login</title>
</svelte:head>

<main>
	<div class="info">
		<header class="logo fc fcol16">
			<svg width="68" height="68" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.23974 21.0837C6.23686 20.5333 5.60262 19.4835 5.60262 18.3371V13.1985L3.16516 11.867C2.1043 11.2896 2.08739 9.72553 3.16516 9.14957L12.5288 4.04657C13.4173 3.54337 14.5828 3.54343 15.4712 4.04657L26.5011 10.0637C27.0069 10.3225 27.3114 10.8675 27.3114 11.4307V18.6667C27.3114 19.4548 26.6855 20.0807 25.8974 20.0807C25.113 20.0807 24.467 19.4553 24.467 18.6667V12.0636L22.3974 13.1985V18.3371C22.3974 19.4835 21.7631 20.5333 20.7602 21.0837L15.4545 23.9204C14.5714 24.4206 13.4286 24.4206 12.5455 23.9204L7.23974 21.0837ZM14 14.4871L21.3818 10.5L14 6.5129L6.6182 10.5L14 14.4871ZM14 21.4996L19.553 18.4981V14.7204L15.4837 16.9534C14.5923 17.4582 13.4077 17.4582 12.5163 16.9534L8.44695 14.7204V18.4981L14 21.4996Z" fill="var(--blue)"/>
			</svg>
			<h1 class="logo">eduSoft</h1>
		</header>
		<form class="fc fcol16" method="post" use:enhance={() => {
			loading = true;

			return async ({ update }) => {
				await update();
				loading = false;
			};
		}}>
			<label for="username" class="input focus-visible">
				<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="var(--primary)"><path d="M358-406q-21 0-35.5-14.5T308-456q0-21 14.5-35.5T358-506q21 0 35.5 14.5T408-456q0 21-14.5 35.5T358-406Zm244 0q-21 0-35.5-14.5T552-456q0-21 14.5-35.5T602-506q21 0 35.5 14.5T652-456q0 21-14.5 35.5T602-406ZM480.46-162q132.46 0 225-93Q798-348 798-479.46q0-23.54-5-54.04T780-586q-21 5-39 6.5t-41.2 1.5q-86.76 0-164.78-34T395-710q-37 79-94.5 131.5T164-499.66q-1 4.03-1.5 10.04-.5 6.01-.5 10.03Q162-348 255-255t225.46 93ZM480-64q-86.02 0-161.67-32.52-75.65-32.52-132.47-89.34-56.82-56.82-89.34-132.62Q64-394.28 64-480.46q0-86.18 32.52-162.02t89.34-132.16q56.82-56.32 132.62-88.84Q394.28-896 480.46-896q86.18 0 162.03 32.76 75.84 32.76 131.95 88.92 56.1 56.16 88.83 132.08Q896-566.32 896-480q0 86.02-32.52 161.67-32.52 75.65-88.84 132.47-56.32 56.82-132.29 89.34T480-64Z"/></svg>
				<input
					id="username"
					name="username"
					type="text"
					placeholder="Nombre de usuario o correo"
					bind:value={username}
					required
				>
			</label>
			<label for="password" class="input focus-visible">
				<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="var(--primary)"><path d="M276-360q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0 124q79 0 138.5-43T497-390h14l29 30q8 8 17.5 12t19.5 4q10 0 19.5-3.5T614-359l54-54 46 46q8 8 17.5 11.5T751-352q10 0 19.5-3.5T788-367l77-76q8-8 11.5-17.5T880-480q0-10-3.5-19.5T865-517l-38-38q-8-8-17-11.5t-20-3.5H497q-26-66-83.5-110T276-724q-100 0-172 72T32-480q0 100 72 172t172 72Z"/></svg>
				<input
					id="password"
					name="password"
					type={passwordType}
					placeholder="Contraseña"
					required
				>
				<button type="button" on:click={toggleVisibility}>
					{#if visible}
						<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="var(--both)"><path d="m640.39-434.61-86.3-86.3q.04-17.66-11.98-28.2t-25.72-10.5l-81.78-81.78q11.3-3.31 23.33-4.96Q469.96-648 480-648q70 0 119 49t49 119q0 8.91-1.65 22.06-1.65 13.16-5.96 23.33Zm147.7 148.83-63.31-64.44q32.05-26.87 59-58.39 26.96-31.52 48.09-71.39-50.13-100.43-144.5-158.22Q593-696 480-696q-26 0-47.89 2.43-21.89 2.44-41.94 7.74l-72.69-72.69q38-15 79.76-21 41.76-6 82.76-6 146.39 0 269.7 80.32Q873-624.87 929.52-480q-22 58.13-59.63 106.89t-81.8 87.33ZM761.22-83.22 641.39-203.61q-36.87 14.57-77.5 21.85-40.63 7.28-83.89 7.28-146.96 0-270.26-80.89Q86.43-336.26 30.48-480q21.43-55.87 58-104.85 36.56-48.98 83.43-89.24L74.17-770.7l57.22-57.21 686.48 688.04-56.65 56.65ZM235.91-610.78q-33.87 29.13-60.76 59.24-26.89 30.11-46.45 71.54 49 101 143.65 158.5T480-264q20.91 0 43.37-2.65 22.46-2.65 47.46-8.65l-45-45q-11.18 4.43-22.92 6.37Q491.17-312 480-312q-70 0-119-49t-49-119q0-10.61 2.65-22.63t4.52-23.2l-83.26-84.95Zm300.57 78.26ZM424.09-428.04Z"/></svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="var(--both)"><path d="M480-312q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm.1-83.87q-35.01 0-59.62-24.51t-24.61-59.52q0-35.01 24.51-59.62t59.52-24.61q35.01 0 59.62 24.51t24.61 59.52q0 35.01-24.51 59.62t-59.52 24.61Zm-.1 221.39q-149.38 0-270.82-84.15T30.48-480q57.26-137.22 178.7-221.37T480-785.52q149.38 0 270.82 84.15T929.52-480q-57.26 137.22-178.7 221.37T480-174.48ZM480-480Zm.05 216q111.38 0 205.82-58.28Q780.3-380.57 831.3-480q-51-99.43-145.48-157.72Q591.33-696 479.95-696q-111.38 0-205.82 58.28Q179.7-579.43 128.7-480q51 99.43 145.48 157.72Q368.67-264 480.05-264Z"/></svg>
					{/if}
				</button>
			</label>
			<button
				type="submit"
				class="btn btn-primary focus-visible"
				disabled={loading}
			>
				{loading ? 'Cargando...' : 'Ingresar'}
			</button>
			{#if form?.error}
				<span class="error">Error: {form.error}</span>
			{/if}
			<a href="/login">He olvidado mi contraseña</a>
			<span>&copy; 2024 eduSoft</span>
		</form>
	</div>
	<div class="img-container">
		<img {src} alt="Oficina de recursos humanos">
	</div>
</main>

<style>
	.error {
		color: var(--red);
	}
	main {
		height: 100dvh;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	h1 {
		font-size: 36px;
		font-weight: bold;
	}
	.info {
		gap: 48px;
		padding: 24px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.logo {
		gap: 4px;
	}
	label, button {
		align-self: stretch;
	}
	form {
		width: 100%;
		max-width: 400px;
	}
	img {
		width: 100%;
		height: 100dvh;
		object-fit: cover;
	}
	span {
		color: var(--both);
	}
	@media (max-width: 700px) {
		.img-container {
			display: none;
		}
		main {
			grid-template-columns: 1fr;
		}
		.info {
			padding: 48px 24px;
			justify-content: flex-start;
		}
	}
</style>