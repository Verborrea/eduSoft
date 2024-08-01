import { writable } from "svelte/store";

export const currentGroup = writable({
	id: '124214',
	name: 'Seleccione un grupo'
})

export const imagesToDelete = writable<any[]>([])