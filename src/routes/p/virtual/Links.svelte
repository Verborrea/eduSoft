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
				links = [...links, {
					name: file.name,
					href: URL.createObjectURL(file)
				}];
			}

			// Borrar el contenido del input después de procesar los archivos
			input.value = '';
		}
	}

	function removeLink(file: Link) {
		links = links.filter(link => link.name !== file.name && link.href !== file.href);
	}
</script>

<input
	type="file"
	name="images"
	id="links-{index}"
	multiple
	bind:files
	on:change={e => changeFiles(e)}
/>
<div class="img-container fcol16">
	{#each links as link}
		<div class="fc btn-outline">
			<span>{link.name}</span>
			<a href={link.href} title="Abrir documento" target="_">
				<svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="var(--text)"><path d="M202.87-111.87q-37.78 0-64.39-26.61t-26.61-64.39v-554.26q0-37.78 26.61-64.39t64.39-26.61H480v91H202.87v554.26h554.26V-480h91v277.13q0 37.78-26.61 64.39t-64.39 26.61H202.87ZM395.41-332 332-395.41l361.72-361.72H560v-91h288.13V-560h-91v-133.72L395.41-332Z"/></svg>
			</a>
			<button type="button" title="Quitar documento" on:click={() => removeLink(link)}>
				<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill="var(--text)" d="M6.5 17C6.0875 17 5.73437 16.8531 5.44062 16.5594C5.14687 16.2656 5 15.9125 5 15.5V5.5H4V4H8V3H12V4H16V5.5H15V15.491C15 15.9137 14.8531 16.2708 14.5594 16.5625C14.2656 16.8542 13.9125 17 13.5 17H6.5ZM13.5 5.5H6.5V15.5H13.5V5.5ZM8 14H9.5V7H8V14ZM10.5 14H12V7H10.5V14Z"/>
				</svg>
			</button>
		</div>
	{/each}
	<label class="fc" for="links-{index}">Añadir Archivo</label>
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
	.btn-outline button, .btn-outline svg {
		flex-shrink: 0;
	}
	.btn-outline span {
		flex: 1;
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