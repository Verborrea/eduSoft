// place files you want to import through the `$lib` alias in this folder.
export function generateTimestampID() {
	return 'id-' + Date.now();
}