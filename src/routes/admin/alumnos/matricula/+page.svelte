<svelte:head>
	<title>eduSoft | Matricular alumno</title>
</svelte:head>

<script>
	import Paso1 from './Paso_1.svelte'
	import Paso2 from './Paso_2.svelte'
	import Paso3 from './Paso_3.svelte'
	import Paso4 from './Paso_4.svelte'

	let step = 0
	let formAppend
	let formData

	function handlePages(event) {
		step = event.detail.page
	}
	function submitFormData(event) {
		formData = event.detail.formData
		for (let [key, value] of formData.entries()) {
			console.log(`${key}: ${value}`);
		}
	}
	function appendFormData(event) {
		formAppend = event.detail.formAppend
		for (let [key, value] of formAppend.entries()) {
			formData.append(key, value)
		}
	}
</script>

<div class="main">
	<header class="flex g16">
		<h1 class="prev">Estudiantes</h1>
    <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.63182 10.1778L0 3.39862L2.85934 0.60144L12.2275 10.1778L3.20716 19.3986L0.347826 16.6014L6.63182 10.1778Z" fill="#B4B4B4"/></svg>
    <h1>Matricular estudiante</h1>
	</header>

	{#if step == 0}
	<Paso1 on:formSubmit={submitFormData} on:next={handlePages}/>
	{:else if step == 1}
	<Paso2 on:formAppend={appendFormData} on:next={handlePages}/>
	{:else if step == 2}
	<Paso3 on:next={handlePages}/>
	{:else if step == 3}
	<Paso4/>
	{/if}
	
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding: 24px;
	}
	header {
		align-items: center;
	}
	.prev {
		color: #b4b4b4;
	}
	h1 {
		margin: 0;
	}
	.flex {
		display: flex;
	}
</style>