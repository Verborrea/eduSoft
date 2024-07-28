export function generateTimestampID() {
	return 'id-' + Date.now();
}

export const rol_router = {
	teacher: 'p',
	admin: 'admin',
	student: '_'
}