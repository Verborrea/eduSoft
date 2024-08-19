export async function load({ locals }) {
	
	const resultList = await locals.pb.collection('careers').getList(1, 20, {
		sort: 'name'
	});
  
	return {
		carreras: resultList.items
	};
};