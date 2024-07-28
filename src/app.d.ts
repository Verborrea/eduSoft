import PocketBase from 'pocketbase';
import { Teacher } from '$lib/types';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: PocketBase,
			user: any
		}
		interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
