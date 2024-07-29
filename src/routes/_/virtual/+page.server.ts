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