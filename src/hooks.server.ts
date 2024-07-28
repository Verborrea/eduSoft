import PocketBase from 'pocketbase';
import { sequence } from '@sveltejs/kit/hooks';
import { redirect } from '@sveltejs/kit';
import { rol_router } from '$lib/utils';
import type { Handle } from '@sveltejs/kit';

export type Role = keyof typeof rol_router;

const protectedPrefix = ['/admin', '/_', '/p'];

function parseCookies(cookieHeader: string): Record<string, string> {
	return cookieHeader.split(';').reduce((cookies, cookie) => {
		const [name, ...rest] = cookie.trim().split('=');
		cookies[decodeURIComponent(name)] = decodeURIComponent(rest.join('='));
		return cookies;
	}, {} as Record<string, string>);
}


export const authentication: Handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase('https://edusoft.pockethost.io');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	// cargar cookie de user para guardar en event.locals.user
	const cookies = parseCookies(event.request.headers.get('cookie') || '');
	if (cookies.user) {
		try {
			event.locals.user = JSON.parse(cookies.user);
		} catch (err) {
			event.locals.user = null;
		}
	}

	if (!event.locals.pb.authStore.isValid) {
		// await event.locals.pb.collection('users').authRefresh();
		event.locals.pb.authStore.clear();
		event.locals.user = null;
	}

	const response = await resolve(event);

	response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());

	return response;
};

export const authorization: Handle = async ({ event, resolve }) => {
	const { pb } = event.locals;
	const { pathname } = event.url;
	const loggedIn = pb.authStore.model;
	const userRole = loggedIn?.rol as Role;

	if (protectedPrefix.some((path) => pathname.startsWith(path))) {
		if (!loggedIn) {
			throw redirect(303, `/login?redirectTo=${pathname}`);
		}

		const rolePrefix = rol_router[userRole];
		if (rolePrefix && !pathname.startsWith(`/${rolePrefix}`)) {
			throw redirect(302, `/${rolePrefix}`);
		}
	}

	const response = await resolve(event);
	return response;
};

export const handle: Handle = sequence(authentication, authorization);