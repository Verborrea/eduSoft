export async function load({ locals, url }) {

	const page = parseInt(url.searchParams.get('page') ?? '1')
	const perPage = 10
	const query = url.searchParams.get('query')
	// const mod = url.searchParams.get('module')
	// const career = url.searchParams.get('career')
	

	// Filter Logic ~
	let filters: string[] = []

	if (query) {
		filters.push(`name ~ "${query}"`)
	}

	// if (mod) {
	// 	filters.push(`module = "${mod}"`)
	// }
	
	// if (career) {
	// 	filters.push(`career = "${career}"`)
	// }

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