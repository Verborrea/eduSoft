export async function load({ locals, url }) {

	const page = parseInt(url.searchParams.get('page') ?? '1')
	const perPage = 10
	const query = url.searchParams.get('query')
	const period = url.searchParams.get('period')

	
	// Filter Logic ~
	let filters: string[] = ['']

	if (query) {
		filters.push(`name ~ "${query}"`)
	}

	if (period) {
		filters.push(`period = "${period}"`)
	}


	// Get Data from DB
	const resultList = await locals.pb.collection('students').getList(page, perPage, {
		sort: 'name',
		expand: 'user_id,career',
		filter: filters.join('&&')
	});

	return {
		students: resultList.items,
		page: resultList.page,
		perPage: resultList.perPage,
		totalItems: resultList.totalItems,
		totalPages: resultList.totalPages,
	};
};

export const actions = {
	deactivate: async ({ locals, request }) => {
		const data = await request.formData()
		const ids = data.get('ids')?.toString().split(',') || []

		ids.forEach(async (id) => {
			try {
				const record = await locals.pb.collection('students').update(id, {
					status: false
				})
				console.log(record)
			} catch (error) {
				console.error(error)
			}
		});

	},
	reactivate: async ({ locals, request }) => {
		const data = await request.formData()
		const ids = data.get('ids')?.toString().split(',') || []

		ids.forEach(async (id) => {
			try {
				await locals.pb.collection('students').update(id, {
					status: true
				})
			} catch (error) {
				console.error(error)
			}
		});

	}
}