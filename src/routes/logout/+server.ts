import { redirect } from '@sveltejs/kit'

export const POST = ({ locals, cookies }) : void => {
	locals.pb.authStore.clear()
	cookies.delete('user', {
		path: '/'
	})
	redirect(302, '/login')
}