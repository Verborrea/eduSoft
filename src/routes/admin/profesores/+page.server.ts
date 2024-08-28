export async function load({ locals, url }) {

	const page = parseInt(url.searchParams.get('page') ?? '1')
	const perPage = 10
	const query = url.searchParams.get('query')

	let filter = ''

	if (query) {
		filter = `name ~ "${query}"`
	}


	// Get Data from DB
	const resultList = await locals.pb.collection('teachers').getList(page, perPage, {
		sort: 'name',
		expand: 'user_id,career',
		filter
	});

	return {
		teachers: resultList.items,
		page: resultList.page,
		perPage: resultList.perPage,
		totalItems: resultList.totalItems,
		totalPages: resultList.totalPages,
	};
};
