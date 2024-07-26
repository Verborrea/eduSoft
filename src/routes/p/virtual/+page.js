/** @type {import('./$types').PageLoad} */
export async function load() {
	const units = [{
		id: '1',
		name: 'Unidad de Prueba por Default',
		themes: [{
			id: '1',
			name: 'La Independencia del Perú',
			text: 'Este es un texto relativamente largo, con saltos de línea y demas.\nAquí hay uno.',
			images: [
				'https://art.pixilart.com/4b680819d6447f3.gif',
				'https://www.publicdomainpictures.net/pictures/130000/velka/keep-calm-and-carry-on-1441446793oby.jpg'
			],
			links: [
				{ name: 'Esta lectura tiene un nombre muy grande. Dificil de ver en el teléfono', href: 'link/to/your/download/file' },
				{ name: 'Lectura 2', href: 'link/to/file' }
			]
		}]
	}]
	return { units }
}