import type { Unit } from '$lib/types'
import sharp from 'sharp'

function extractBaseName(fileName: string): string {
	const parts = fileName.split('_');
	parts.pop(); // Eliminar la última parte (hash + extensión)
	return parts.join('_');
}

export async function load({ url, locals }) {

	const groupId = url.searchParams.get('g');

	if (groupId) {
		const record = await locals.pb.collection('groups').getOne(groupId, {
			fields: 'virtual'
		});
		
		return { units: record.virtual }
	}

	return { units: [] }
}

export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		let units: Unit[] = JSON.parse(formData.get('units')?.toString() || '[]');
		const groupId: string = formData.get('groupId')?.toString() || '';
		const imagesToUpload = formData.getAll('itu') as File[];
		const imagesToDelete = formData.getAll('itd') as string[];

		// Procesar imágenes a cargar
		const processedImages = await Promise.all(
			imagesToUpload.map(async (file) => {
				const avifBuffer = await sharp(await file.arrayBuffer()).avif().toBuffer();
				return new File([avifBuffer], file.name.replace(/\.[^.]+$/, '.avif'), { type: 'image/avif' });
			})
		);

		//Upload and delete files to Pocketbase
		if (processedImages.length > 0 || imagesToDelete.length > 0) {

			let dataToSend: any = {}
			
			if (processedImages.length > 0) {
				dataToSend["virtual_images"] = processedImages
			}

			if (imagesToDelete.length > 0) {
				dataToSend["virtual_images-"] = imagesToDelete
			}

			try {
				const record = await locals.pb.collection('groups').update(groupId, dataToSend);

				const processedImageNames = processedImages.map(image => image.name.split('.')[0]);

				// Modificar unit para subirlo
				record.virtual_images.forEach((imageString: string) => {
					const [unitId, themeId, hash1, hash2] = imageString.split('_');
					const unit = units.find(u => u.id === unitId);
					if (unit) {
						const theme = unit.themes.find(t => t.id === themeId);
						if (theme) {
							// solo hacer push si la imagen está en processedImages
							// porque sino también se agregan las imagenes que ya
							// estaban agregadas, creando duplicados
							const imageName = imageString.split('/').pop();
							if (imageName && processedImageNames.includes(extractBaseName(imageName))) {
								theme.images.push(imageString);
							}
							theme.itu = [];
							theme.itd = [];
						}
					}
				})
			} catch (error) {
				console.error(error)	
			}
		}

		await locals.pb.collection('groups').update(groupId, {
			"virtual": units,
		});

		return { units }
	}
};