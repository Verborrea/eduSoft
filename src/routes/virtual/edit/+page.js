/** @type {import('./$types').PageLoad} */
export async function load() {
	const units = [{
		id: '1',
		name: 'Unidad de Prueba por Default',
		themes: [{
			id: '1',
			name: 'La Independencia del Perú',
			text: 'Este es un texto relativamente largo, con saltos de línea y demas.\nAquí hay uno.'
		}]
	}]
	return { units }
}