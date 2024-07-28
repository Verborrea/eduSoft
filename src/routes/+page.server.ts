import { redirect } from '@sveltejs/kit';
import { rol_router } from '$lib/utils'

export async function load({ locals }) {
	if (locals.pb.authStore.isValid) {
		const rol: keyof typeof rol_router = locals.pb.authStore.model?.rol
		redirect(302, `/${rol_router[rol]}`);
	}
	redirect(302, '/login')
}