<script lang="ts">
	import Header from '$lib/compo/Header.svelte'
	import Footer from '$lib/compo/Footer.svelte'

	const footer_links = [
		'/_/asistencias',
		'/_/virtual',
		'/_/horario',
		'/_/notas',
		'/_/estudiantes'
	]
</script>

<Header/>
<slot/>
<Footer links={footer_links}/>