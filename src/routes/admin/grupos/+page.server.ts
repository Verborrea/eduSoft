export async function load({ locals, url }) {

	const page = parseInt(url.searchParams.get('page') ?? '1')
	const perPage = 10
	// const query = url.searchParams.get('query')
	const period = url.searchParams.get('period')
	const course = url.searchParams.get('course')
	

	// Filter Logic ~
	let filters: string[] = []

	// if (query) {
	// 	filters.push(`name ~ "${query}"`)
	// }

	if (period) {
		filters.push(`period = "${period}"`)
	}
	
	if (course) {
		filters.push(`course = "${course}"`)
	}

	// Get Data from DB
	const resultList = await locals.pb.collection('groups').getList(page, perPage, {
		sort: 'course.career.short_name',
		expand: 'course, course.career',
		filter: filters.join('&&')
	});

	return {
		groups: resultList.items,
		page: resultList.page,
		perPage: resultList.perPage,
		totalItems: resultList.totalItems,
		totalPages: resultList.totalPages,
	};
};