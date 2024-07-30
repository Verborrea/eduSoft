export async function load({ url, locals }) {

	const groupId = url.searchParams.get('g');

	if (groupId) {
		const record = await locals.pb.collection('groups').getOne(groupId, {
			fields: 'virtual'
		});
		
		return {
			units: record.virtual
		}
	}

	return {
		units: []
	}
}

export const actions = {
	default: async ({ url, request, locals, cookies }) => {
		const formData = await request.formData();
		
		// const units = JSON.parse(formData.get('units')?.toString() || '');
		const units = formData.get('units')?.toString() || '';
		const groupId = formData.get('groupId')?.toString() || '';

		try {
			await locals.pb.collection('groups').update(groupId, {
				"virtual": units
			});
		} catch (error) {
			console.error(error)	
		}
	}
};