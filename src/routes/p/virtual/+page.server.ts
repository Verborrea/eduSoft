import type { Unit } from '$lib/types'

export async function load({ url, locals }) {

	const groupId = url.searchParams.get('g');

	if (groupId) {
		const record = await locals.pb.collection('groups').getOne(groupId, {
			fields: 'virtual'
		});

		const units: Unit[] = record.virtual.map((unit: Unit) => ({
			...unit,
			images: []
		}));
		
		return { units }
	}

	return { units: [] }
}

export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		
		const units = JSON.parse(formData.get('units')?.toString() || '');
		const groupId = formData.get('groupId')?.toString() || '';
		const files = formData.getAll('images') as File[];

		// Upload files to Pocketbase
		try {
			await locals.pb.collection('groups').update(groupId, {
				"virtual_images": files
			});
		} catch (error) {
			console.error(error)	
		}

		// TODO: modified and upload aula virtual with new file_names
	}
};