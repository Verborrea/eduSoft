export async function load({ locals, url }) {
	let page = parseInt(url.searchParams.get('page') || "1")
	
	const resultList = await locals.pb.collection('students').getList(page, 3, {
		sort: 'name',
		// expand: 'user_id,career'
	});

	return {
		cursos: resultList.items,
		page: resultList.page,
		perPage: resultList.perPage,
		totalItems: resultList.totalItems,
		totalPages: resultList.totalPages,
	};
};
