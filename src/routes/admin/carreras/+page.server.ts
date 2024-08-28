export async function load({ locals, url }) {
	
	const page = parseInt(url.searchParams.get('page') ?? '1')

	// fetch a paginated records list
	const resultList = await locals.pb.collection('careers').getList(page, 10, {
		sort: '-created'
	});

	return {
		carreras: resultList.items,
		page: resultList.page,
		perPage: resultList.perPage,
		totalItems: resultList.totalItems,
		totalPages: resultList.totalPages
	};
};

export const actions = {
	delete: async ({ locals, request }) => {
		const data = await request.formData()
		const id = data.get('id')?.toString()

		if (id) {
			try {
				await locals.pb.collection('careers').delete(id)
			} catch (error) {
				console.error(error)
			}
			
		}
	},
	create: async ({ locals, request }) => {
		const data = await request.formData()
		const name = data.get('name')?.toString()
		const sname = data.get('sname')?.toString()

		if (name && name.length > 0 && sname && sname.length > 0) {
			await locals.pb.collection('careers').create({
				name,
				short_name: sname
			});
		}
	},
	edit: async ({ locals, request }) => {
		const data = await request.formData()

		const id = data.get('id')?.toString() || ''
		const name = data.get('o_name')?.toString() || ''
		const sname = data.get('abrv')?.toString() || ''

		if (name && name.length > 0 && sname && sname.length > 0) {
			const record = await locals.pb.collection('careers').update(id, {
				name,
				short_name: sname
			});
		}

		return { id, name, sname }
	}
}