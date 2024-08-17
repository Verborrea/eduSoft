export async function load({ locals, url }) {

	let page = parseInt(url.searchParams.get('page') || "1")
	
	const resultList = await locals.pb.collection('students').getList(page, 3, {
		filter: 'period="2024-2"',
		sort: 'name',
		expand: 'user_id,career'
	});

	return {
		alumnos: resultList.items,
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