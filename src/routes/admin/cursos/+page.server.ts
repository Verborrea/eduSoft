export async function load({ locals, url }) {
	let page = parseInt(url.searchParams.get('page') || "1")
	
	let filterArray: string[] = []

	url.searchParams.forEach((value, key) => {
		filterArray.push(`${key} ~ "${value}"`);
	});

	let filter = filterArray.length > 0 ? filterArray.join(' && ') : '';

	const resultList = await locals.pb.collection('courses').getList(page, 20, {
		sort: 'name',
		expand: 'career',
		filter
	});

	return {
		cursos: resultList.items,
		page: resultList.page,
		perPage: resultList.perPage,
		totalItems: resultList.totalItems,
		totalPages: resultList.totalPages,
	};
};

export const actions = {
	delete: async ({ locals, request }) => {
		const data = await request.formData()

		const ids = data.get('ids')?.toString().split(',') || []

		ids.forEach(async (id) => {
			try {
				await locals.pb.collection('courses').delete(id);
			} catch (error) {
				console.error(error)
			}
		});
	}
}