export async function load({ locals }) {
	
	// fetch a paginated records list
	const resultList = await locals.pb.collection('students').getList(1, 20, {
		filter: 'period="2024-2"',
		sort: 'name',
		expand: 'user_id,career'
	});

	return {
		alumnos: resultList.items
	};
};
