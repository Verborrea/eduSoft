export async function load({ locals }) {

	const careers = await locals.pb.collection('careers').getFullList({
		sort: 'name',
		fields: 'id,short_name'
	});

	return {
		careers
	};
};
