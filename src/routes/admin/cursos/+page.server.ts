export async function load({ locals, url }) {
	let page = parseInt(url.searchParams.get('page') || "1")
	
	const resultList = await locals.pb.collection('courses').getList(1, 1, {
		sort: 'name',
		expand: 'career'
	});

	return {
		cursos: resultList.items,
		page: resultList.page,
		perPage: resultList.perPage,
		totalItems: resultList.totalItems,
		totalPages: resultList.totalPages,
	};
};
