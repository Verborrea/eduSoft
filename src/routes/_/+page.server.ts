export async function load({ locals }) {
	const username = locals.user.name.split(' ')[0]
	return {
		nombre: username
	}
}