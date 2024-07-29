<script lang="ts">
	import Header from '$lib/compo/Header.svelte'
	import Footer from '$lib/compo/Footer.svelte'

	const footer_links = [
		'/p/asistencias',
		'/p/virtual',
		'/p/horario',
		'/p/notas',
		'/p/estudiantes'
	]

	export let data
</script>

<Header prefix="p" groups={data.groups}/>
<slot/>
<Footer links={footer_links}/>