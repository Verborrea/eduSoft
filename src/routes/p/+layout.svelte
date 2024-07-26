<script lang="ts">
	import Header from '$lib/compo/Header.svelte'
	import Footer from '$lib/compo/Footer.svelte'

	const footer_links = [
		'/asistencias',
		'/virtual',
		'/horario',
		'/notas',
		'/estudiantes'
	]
</script>

<Header/>
<slot/>
<Footer links={footer_links}/>