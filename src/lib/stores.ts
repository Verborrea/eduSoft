import { writable } from 'svelte/store';

export const hiddenEditModal = writable(true);
export const themename = writable('');