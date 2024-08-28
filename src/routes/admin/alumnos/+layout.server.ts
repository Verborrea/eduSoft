export async function load({ locals }) {

	const careers = await locals.pb.collection('careers').getFullList({
		sort: 'name',
		fields: 'id,short_name'
	});

	const estados = [ 'Activo', 'Inactivo' ]
	const periods = [ '2024-II', '2025-I' ]


	return {
		careers,
		estados,
		periods
	};
};