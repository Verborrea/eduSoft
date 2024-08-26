import { formDataToObject } from '$lib/utils.js'
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData()

		const dataObject = formDataToObject(data)

		try {
			await locals.pb.collection('courses').create(dataObject)
		} catch (error) {
			console.error(error)
		}

		redirect(302, '/admin/cursos')
	}
}