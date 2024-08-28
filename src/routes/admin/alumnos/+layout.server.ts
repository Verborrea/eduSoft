export async function load({ locals }) {

	const careers = await locals.pb.collection('careers').getFullList({
		sort: 'name',
		fields: 'id,short_name'
	});

	const data_groups = await locals.pb.collection('groups').getFullList({
		expand: 'course',
		fields: 'id,turno,seccion,expand.course.name'
	});

	const groups = data_groups.map(g => { return {
		id: g.id,
		name: `${g.expand?.course.name} ${g.turno} ${g.seccion}`
	}})

	const estados = [ 'Activo', 'Inactivo' ]
	const periods = [ '2024-II', '2025-I' ]


	return {
		careers,
		estados,
		periods,
		groups
	};
};