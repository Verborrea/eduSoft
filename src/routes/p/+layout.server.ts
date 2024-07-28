export async function load({ locals }) {
	const groups = await locals.pb.collection('groups').getFullList({
		filter: `teacher_id="${locals.user.id}"`,
		sort: 'name',
	});
	
	return {
		groups
	}
}