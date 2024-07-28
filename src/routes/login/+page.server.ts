import { redirect } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';
import { rol_router } from '$lib/utils';

export const actions = {
	default: async ({ url, request, locals, cookies }) => {
		const formData = await request.formData();
		const username = formData.get('username')?.toString() || '';
		const password = formData.get('password')?.toString() || '';

		try {
			await locals.pb.collection('users').authWithPassword(username, password);
		} catch (error) {
			if (error instanceof ClientResponseError) {
				if (error.status === 400) {
					return { username, error: 'Usuario o contraseña incorrectos' }
				}
				return { username, error: 'Problemas con el servidor 😢' }
			}
			return { username, error: 'Error desconocido' }
		}

		const rol: keyof typeof rol_router = locals.pb.authStore.model?.rol

		let userData;
		if (rol === 'teacher') {
			userData = await locals.pb.collection('teachers').getFirstListItem(`user_id='${locals.pb.authStore.model?.id}'`);
		} else if (rol === 'student') {
			userData = await locals.pb.collection('students').getFirstListItem(`user_id='${locals.pb.authStore.model?.id}'`);
		} else if (rol === 'admin') {
			// Maneja el caso de admin si es necesario
		}

		if (userData) {
			locals.user = userData;

			cookies.set('user', JSON.stringify(userData), {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 7 // 1 semana
			})
		}

		const redirectTo = url.searchParams.get('redirectTo');

		if (redirectTo && url.pathname.startsWith(`/${rol_router[rol]}`)) {
			redirect(302, `/${redirectTo.slice(1)}`);
		}

		redirect(302, `/${rol_router[rol]}`);
	}
};