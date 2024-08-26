import { formDataToObject } from '$lib/utils.js'
import { redirect, error } from '@sveltejs/kit'

export async function load({ locals, url }) {
	let course_id = url.searchParams.get('id') || ''

	const course = await locals.pb.collection('courses').getOne(course_id, {
		expand: 'career'
	});

	if (!course) {
		error(404, {
			message: 'Curso no encontrado'
		})
	}

	return { course }
};

export const actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData()

		const dataObject = formDataToObject(data)

		try {
			await locals.pb.collection('courses').update(dataObject.id ,dataObject)
		} catch (error) {
			console.error(error)
		}

		redirect(302, '/admin/cursos')
	}
}