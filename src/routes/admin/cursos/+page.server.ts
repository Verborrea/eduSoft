export async function load({ locals, url }) {

	const page = parseInt(url.searchParams.get('page') ?? '1')
	const perPage = 10
	const query = url.searchParams.get('query')
	const mod = url.searchParams.get('module')
	const career = url.searchParams.get('career')
	

	// Filter Logic ~
	let filters: string[] = []

	if (query) {
		filters.push(`name ~ "${query}"`)
	}

	if (mod) {
		filters.push(`module = "${mod}"`)
	}
	
	if (career) {
		filters.push(`career = "${career}"`)
	}

	// Get Data from DB
	const resultList = await locals.pb.collection('courses').getList(page, perPage, {
		sort: 'career.short_name',
		expand: 'career',
		filter: filters.join('&&')
	});

	return {
		courses: resultList.items,
		page: resultList.page,
		perPage: resultList.perPage,
		totalItems: resultList.totalItems,
		totalPages: resultList.totalPages,
	};
};

export const actions = {
	delete: async ({ locals, request }) => {
		const data = await request.formData()

		const selection = data.get('selection')?.toString().split(',') || []

		selection.forEach(async (id) => {
			try {
				await locals.pb.collection('courses').delete(id);
			} catch (error) {
				console.error(error)
			}
		});

		return { success: true, quantity: selection.length };
	}
}