export async function load({ locals }) {

	const careers = await locals.pb.collection('careers').getFullList({
		sort: 'name',
		fields: 'id,short_name'
	});

	const modules = [ 'I','II','III','IV','V','VI','VII','VIII','IX','X' ]

	return {
		careers,
		modules
	};
};
