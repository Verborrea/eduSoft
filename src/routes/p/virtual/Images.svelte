<script lang="ts">
	import { hostname, convertImageToWebp } from '$lib/utils'
	import { currentGroup } from '$lib/stores'

	export let
		unit: string,
		theme: string,
		images: string[] = [],
		imagesToAdd: any[] = [],
		imagesToRemove: string[] = []

	let files: FileList

	async function changeFiles(e: Event) {
		const input = e.target as HTMLInputElement;
		if (input.files) {
			files = input.files;

			for (const file of files) {
				const reader = new FileReader();
				reader.onload = async () => {
					try {
						const avifFile = await convertImageToWebp(file, unit, theme);
						// Añadir la imagen al array de archivos a subir
						imagesToAdd = [...imagesToAdd, {
							file: avifFile,
							src: URL.createObjectURL(avifFile)
						}];
					} catch (error) {
						console.error('Error converting image:', error);
					}
				};
				reader.readAsDataURL(file);
			}

			input.value = '';
		}
	}

	function removeImage(image: string) {
		images = images.filter(i => i !== image)
		imagesToRemove = [...imagesToRemove, image]
	}
	
</script>

<input
	type="file"
	name="images"
	id="images_{unit}_{theme}"
	accept="image/*"
	multiple
	bind:files
	on:change={e => changeFiles(e)}
/>
<div class="img-container fc">
	{#each images as image}
		<button type="button" title="Quitar imagen" on:click={() => removeImage(image)}>
			<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill="var(--back)" d="M6.5 17C6.0875 17 5.73437 16.8531 5.44062 16.5594C5.14687 16.2656 5 15.9125 5 15.5V5.5H4V4H8V3H12V4H16V5.5H15V15.491C15 15.9137 14.8531 16.2708 14.5594 16.5625C14.2656 16.8542 13.9125 17 13.5 17H6.5ZM13.5 5.5H6.5V15.5H13.5V5.5ZM8 14H9.5V7H8V14ZM10.5 14H12V7H10.5V14Z"/>
			</svg>
			<img src="{hostname}/api/files/groups/{$currentGroup.id}/{image}" alt="Esta es una imagen">
		</button>
	{/each}
	{#each imagesToAdd as image}
		<button type="button" title="Quitar imagen" on:click={() => {
			imagesToAdd = imagesToAdd.filter(i => (i.file.name !== image.file.name && i.file.size !== image.file.size))
		}}>
			<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill="var(--back)" d="M6.5 17C6.0875 17 5.73437 16.8531 5.44062 16.5594C5.14687 16.2656 5 15.9125 5 15.5V5.5H4V4H8V3H12V4H16V5.5H15V15.491C15 15.9137 14.8531 16.2708 14.5594 16.5625C14.2656 16.8542 13.9125 17 13.5 17H6.5ZM13.5 5.5H6.5V15.5H13.5V5.5ZM8 14H9.5V7H8V14ZM10.5 14H12V7H10.5V14Z"/>
			</svg>
			<img src={image.src} alt="Esta es una imagen">
		</button>
	{/each}
	<label class="fc" for="images_{unit}_{theme}">+</label>
</div>

<style>
	input {
		display: none;
	}
	.img-container {
		gap: 8px;
		overflow-x: scroll;
	}
	button,
	label {
		flex-shrink: 0;
		height: 80px;
		width: 80px;
		border-radius: 8px;
	}
	button {
		overflow: hidden;
		position: relative;
	}
	button svg {
		display: none;
		position: absolute;
		z-index: 1;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	button img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	button:hover img {
		filter: brightness(0.5);
	}
	button:hover svg{
		display: block;
	}
	label {
		cursor: pointer;
		font-size: 20px;
		justify-content: center;
		background: var(--gray-light);
	}
	label:active {
		transform: scale(0.95);
	}
	label:hover {
		background: var(--gray-dark);
	}
	@media (max-width: 700px) {
		button svg{
			display: block;
		}
		button img {
			filter: brightness(0.5);
		}
	}
</style>
