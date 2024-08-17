export async function load({ locals }) {
	
	// fetch a paginated records list
	const resultList = await locals.pb.collection('careers').getList(1, 20, {
		sort: 'name',
	});
	return {
		carreras: resultList.items,
		page: resultList.page,
		perPage: resultList.perPage,
		totalItems: resultList.totalItems,
		totalPages: resultList.totalPages,
	};
};