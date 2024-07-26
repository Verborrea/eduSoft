<script lang="ts">
	interface Link {
		name: string;
		href: string;
	}

	export let index , links: Link[] = [];

	let files: FileList;

	function changeFiles(e: Event) {
		const input = e.target as HTMLInputElement;
		if (input.files) {
			files = input.files;

			for (const file of files) {
				console.log(file)
			// 	const reader = new FileReader();
			// 	reader.onload = () => {
			// 		links = [...links, {

			// 			reader.result as string
			// 		}];
			// 	};
			// 	reader.readAsDataURL(file);
			}

			// Borrar el contenido del input después de procesar los archivos
			input.value = '';
		}
	}

	function removeLink(url: string) {
		links = links.filter(link => link.href !== url);
	}
</script>

<input
	type="file"
	name="images"
	id="images-{index}"
	multiple
	bind:files
	on:change={e => changeFiles(e)}
/>
<div class="img-container fcol16">
	{#each links as link}
		<div class="fc btn-outline">
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6 14H12V12.5H6V14ZM6 10.75H14V9.25H6V10.75ZM6 7.5H14V6H6V7.5ZM4.5 17C4.0875 17 3.73437 16.8531 3.44062 16.5594C3.14687 16.2656 3 15.9125 3 15.5V4.5C3 4.0875 3.14687 3.73438 3.44062 3.44063C3.73437 3.14688 4.0875 3 4.5 3H15.5C15.9125 3 16.2656 3.14688 16.5594 3.44063C16.8531 3.73438 17 4.0875 17 4.5V15.5C17 15.9125 16.8531 16.2656 16.5594 16.5594C16.2656 16.8531 15.9125 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5Z" fill="#2E2E2E"/>
			</svg>
			<span>{link.name}</span>
		</div>
		<!-- <button type="button" title="Quitar imagen" on:click={() => removeLink(link.href)}>
			<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill="var(--back)" d="M6.5 17C6.0875 17 5.73437 16.8531 5.44062 16.5594C5.14687 16.2656 5 15.9125 5 15.5V5.5H4V4H8V3H12V4H16V5.5H15V15.491C15 15.9137 14.8531 16.2708 14.5594 16.5625C14.2656 16.8542 13.9125 17 13.5 17H6.5ZM13.5 5.5H6.5V15.5H13.5V5.5ZM8 14H9.5V7H8V14ZM10.5 14H12V7H10.5V14Z"/>
			</svg>
		</button> -->
	{/each}
	<label class="fc" for="images-{index}">Añadir Archivo</label>
</div>

<style>
	input {
		display: none;
	}
	.img-container {
		gap: 8px;
	}
	.btn-outline {
		color: var(--text);
		padding: 8px;
		gap: 12px;
		border-radius: 12px;
	}
	label {
		flex-shrink: 0;
		border-radius: 12px;
		cursor: pointer;
		justify-content: center;
		background: var(--gray-light);
		padding: 10px;
	}
	label:active {
		transform: scale(0.95);
	}
	label:hover {
		background: var(--gray-dark);
	}
</style>