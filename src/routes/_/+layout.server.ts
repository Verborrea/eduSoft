export async function load({ locals }) {
	const groups = await locals.pb.collection('groups').getFullList({
		filter: `students_ids~"${locals.user.id}"`,
		sort: 'name',
	});
	
	return {
		groups
	}
}