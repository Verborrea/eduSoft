export async function load({ locals }) {

	const courses = await locals.pb.collection('courses').getFullList({
		sort: 'name',
		fields: 'id,name'
	});

	const teachers = await locals.pb.collection('teachers').getFullList({
		sort: 'name',
		fields: 'id,name'
	});

	const periods = [ '2024-II', '2025-I' ]
	const modules = [ 'I','II','III','IV','V','VI','VII','VIII','IX','X' ]
	const horarios = [ 'Lunes a Viernes de 8 a 10am', 'Sábados de 8 a 10am' ]

	return {
		horarios,
		periods,
		courses,
		modules,
		teachers
	};
};
