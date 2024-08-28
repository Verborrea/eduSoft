<script lang="ts">
	export let data, form;

	let query = '';
	let module = '';
	let career = '';
	let selection: string[] = [];

	function selectAll() {
		if (selection.length < data.courses.length) {
			selection = data.courses.map((c) => c.id);
		} else {
			selection = [];
		}
	}

	$: if (form?.success) {
		setTimeout(() => {
			form.success = false
		}, 2000)
	}
</script>

<svelte:head>
	<title>eduSoft | Cursos</title>
</svelte:head>

<div class="main">
	<header class="fc justify-between">
		<h1>Lista de Cursos</h1>
		<a href="/admin/cursos/añadir" class="btn btn-secondary">
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M13.0608 3.26083C13.5486 2.77305 14.2102 2.49902 14.9 2.49902C15.2416 2.49902 15.5798 2.5663 15.8953 2.69701C16.2109 2.82772 16.4976 3.01931 16.7392 3.26083C16.9807 3.50235 17.1723 3.78908 17.303 4.10465C17.4337 4.42021 17.501 4.75843 17.501 5.1C17.501 5.44156 17.4337 5.77978 17.303 6.09535C17.1723 6.41091 16.9807 6.69764 16.7392 6.93916L11.7917 11.8867C11.1544 12.5243 10.3274 12.9381 9.435 13.0658L7.61833 13.3242C7.49033 13.3425 7.35982 13.3308 7.23712 13.29C7.11442 13.2492 7.0029 13.1804 6.91138 13.089C6.81986 12.9977 6.75086 12.8863 6.70983 12.7637C6.66881 12.641 6.65688 12.5105 6.675 12.3825L6.93417 10.5658C7.06175 9.6731 7.47551 8.84585 8.11333 8.20833L13.0608 3.26083ZM15.5608 4.43916C15.4741 4.35224 15.3711 4.28327 15.2577 4.23621C15.1443 4.18915 15.0228 4.16493 14.9 4.16493C14.7772 4.16493 14.6557 4.18915 14.5423 4.23621C14.4289 4.28327 14.3259 4.35224 14.2392 4.43916L9.29167 9.38666C8.90904 9.76909 8.66078 10.2653 8.58417 10.8008L8.48167 11.5175L9.19833 11.4158C9.73415 11.3394 10.2307 11.0911 10.6133 10.7083L15.5608 5.76083C15.6478 5.67413 15.7167 5.57113 15.7638 5.45774C15.8108 5.34434 15.8351 5.22277 15.8351 5.1C15.8351 4.97722 15.8108 4.85566 15.7638 4.74226C15.7167 4.62886 15.6478 4.52586 15.5608 4.43916ZM9.16667 3.33333C9.16667 3.55435 9.07887 3.76631 8.92259 3.92259C8.76631 4.07887 8.55435 4.16666 8.33333 4.16666C7.50167 4.16666 6.915 4.17333 6.45583 4.21666C6.00583 4.26 5.7375 4.33416 5.53167 4.43916C5.06128 4.67884 4.67885 5.06128 4.43917 5.53166C4.3275 5.75083 4.25083 6.04083 4.20917 6.545C4.1675 7.05916 4.16667 7.72 4.16667 8.66666V11.3333C4.16667 12.2808 4.16667 12.9408 4.20917 13.455C4.25083 13.9592 4.3275 14.2492 4.43917 14.4683C4.67885 14.9387 5.06128 15.3212 5.53167 15.5608C5.75083 15.6725 6.04083 15.7492 6.545 15.7908C7.05917 15.8325 7.72 15.8333 8.66667 15.8333H11.3333C12.2808 15.8333 12.9408 15.8333 13.455 15.7908C13.9592 15.7492 14.2492 15.6725 14.4683 15.5608C14.9387 15.3212 15.3212 14.9387 15.5608 14.4683C15.6658 14.2625 15.74 13.9942 15.7825 13.545C15.8267 13.085 15.8325 12.4983 15.8325 11.6658C15.8326 11.5564 15.8543 11.4481 15.8963 11.347C15.9382 11.2459 15.9997 11.1541 16.0772 11.0768C16.1546 10.9995 16.2466 10.9382 16.3477 10.8964C16.4488 10.8547 16.5572 10.8332 16.6667 10.8333C16.7761 10.8334 16.8844 10.8551 16.9855 10.8971C17.0866 10.9391 17.1784 11.0005 17.2557 11.078C17.333 11.1555 17.3943 11.2474 17.4361 11.3485C17.4778 11.4497 17.4993 11.5581 17.4992 11.6675C17.4992 12.4825 17.4942 13.1508 17.4417 13.7025C17.3883 14.2633 17.2817 14.7608 17.0458 15.225C16.6464 16.009 16.009 16.6464 15.225 17.0458C14.7317 17.2975 14.1983 17.4025 13.5908 17.4517C13 17.5 12.2725 17.5 11.3692 17.5H8.63083C7.7275 17.5 6.99917 17.5 6.40917 17.4517C5.8025 17.4017 5.26833 17.2975 4.77583 17.0458C3.99155 16.6465 3.35385 16.0091 2.95417 15.225C2.7025 14.7317 2.5975 14.1975 2.54833 13.5908C2.5 13 2.5 12.2725 2.5 11.3692V8.63083C2.5 7.7275 2.5 6.99916 2.54833 6.40916C2.59833 5.80166 2.7025 5.26833 2.95417 4.775C3.35363 3.99102 3.99103 3.35363 4.775 2.95416C5.23833 2.7175 5.73667 2.61166 6.2975 2.55833C6.85 2.50583 7.5175 2.5 8.33333 2.5C8.55435 2.5 8.76631 2.5878 8.92259 2.74408C9.07887 2.90036 9.16667 3.11232 9.16667 3.33333Z" fill="currentColor"/>
			</svg>
			Nuevo Curso
		</a>
	</header>
	<form class="fc btns g16">
		<label class="input" for="query">
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.16666C1.5 4.93248 4.93248 1.5 9.16666 1.5C13.4009 1.5 16.8334 4.93247 16.8334 9.16666C16.8334 10.9233 16.2426 12.542 15.2489 13.8348L18.2071 16.793C18.5976 17.1835 18.5976 17.8167 18.2071 18.2072C17.8166 18.5978 17.1834 18.5978 16.7929 18.2072L13.8346 15.249C12.5419 16.2426 10.9233 16.8334 9.16666 16.8334C4.93247 16.8334 1.5 13.4009 1.5 9.16666ZM13.2559 13.0897C13.2254 13.1138 13.196 13.1399 13.1679 13.168C13.1398 13.1961 13.1137 13.2255 13.0896 13.256C12.0715 14.233 10.6892 14.8334 9.16666 14.8334C6.03705 14.8334 3.5 12.2963 3.5 9.16666C3.5 6.03705 6.03705 3.5 9.16666 3.5C12.2963 3.5 14.8334 6.03705 14.8334 9.16666C14.8334 10.6892 14.2329 12.0716 13.2559 13.0897Z" fill="#111111"/>
			</svg>
			<input type="text" class="hidden" name="career" value={career} />
			<input type="text" class="hidden" name="module" value={module} />
			<input
				id="query"
				type="text"
				name="query"
				placeholder="Nombre del curso"
				bind:value={query}
			/>
		</label>	
		<button class="btn btn-primary">
			BUSCAR
		</button>
	</form>
	<div class="justify-between fc g16">
		<form id="filters" class="fc g16">
			<input type="text" class="hidden" name="query" value={query} />
			<button class="btn btn-primary">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.3485 17.365C9.83539 17.365 9.40579 16.9555 9.40579 16.4383V12.9267C9.40579 12.4116 9.82633 12 10.3398 12C10.8533 12 11.2708 12.4122 11.2708 12.9267V13.75H16.3383C16.8524 13.75 17.2708 14.1553 17.2708 14.6723C17.2708 15.1853 16.8612 15.615 16.3441 15.615H11.2708V16.4383C11.2708 16.9532 10.8646 17.365 10.3485 17.365ZM3.65579 15.615C3.14068 15.615 2.72913 15.1945 2.72913 14.6811C2.72913 14.1674 3.14132 13.75 3.65579 13.75H7.16746C7.68212 13.75 8.09413 14.1563 8.09413 14.6723C8.09413 15.1853 7.68449 15.615 7.16746 15.615H3.65579ZM6.67183 12.6767C6.1586 12.6767 5.72913 12.2524 5.72913 11.7381V10.9267H3.66121C3.14727 10.9267 2.72913 10.5211 2.72913 10.0044C2.72913 9.48893 3.13924 9.07334 3.65579 9.07334H5.72913V8.25001C5.72913 7.73504 6.1498 7.32334 6.66308 7.32334C7.17667 7.32334 7.59413 7.73556 7.59413 8.25001V11.75C7.59413 12.2647 7.18777 12.6767 6.67183 12.6767ZM9.83246 10.9267C9.31783 10.9267 8.90579 10.5203 8.90579 10.0044C8.90579 9.48893 9.31591 9.07334 9.83246 9.07334H16.3441C16.8588 9.07334 17.2708 9.47968 17.2708 9.99564C17.2708 10.5111 16.8607 10.9267 16.3441 10.9267H9.83246ZM12.8485 8.00001C12.3356 8.00001 11.9058 7.59036 11.9058 7.07334V3.56168C11.9058 3.04657 12.3263 2.63501 12.8398 2.63501C13.3534 2.63501 13.7708 3.04721 13.7708 3.56168V4.38501H16.3441C16.8589 4.38501 17.2708 4.79118 17.2708 5.3073C17.2708 5.82014 16.861 6.25001 16.3441 6.25001H13.7708V7.07334C13.7708 7.58799 13.3644 8.00001 12.8485 8.00001ZM3.65579 6.25001C3.14081 6.25001 2.72913 5.82937 2.72913 5.31605C2.72913 4.80241 3.14129 4.38501 3.65579 4.38501H10.1675C10.6822 4.38501 11.0941 4.79118 11.0941 5.3073C11.0941 5.82014 10.6844 6.25001 10.1675 6.25001H3.65579Z" fill="currentColor"/>
				</svg>
				FILTRAR
			</button>
			<select id="career" name="career" class="select" bind:value={career}>
				<option value="" selected>Todas las carreras</option>
				{#each data.careers as career}
					<option value={career.id}>{career.short_name}</option>
				{/each}
			</select>
			<select id="module" name="module" class="select" bind:value={module}>
				<option value="" selected>Todos los módulos</option>
				{#each data.modules as mod}
					<option value={mod}>Módulo {mod}</option>
				{/each}
			</select>
		</form>
		<form id="eraseSelection" action="?/delete" method="post">
			<input type="text" class="hidden" name="selection" value={selection}>
			<button class="btn btn-error" disabled={selection.length === 0}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="h-5 w-5 shrink-0"><path fill="currentColor" fill-rule="evenodd" d="M10.556 4a1 1 0 0 0-.97.751l-.292 1.14h5.421l-.293-1.14A1 1 0 0 0 13.453 4zm6.224 1.892-.421-1.639A3 3 0 0 0 13.453 2h-2.897A3 3 0 0 0 7.65 4.253l-.421 1.639H4a1 1 0 1 0 0 2h.1l1.215 11.425A3 3 0 0 0 8.3 22H15.7a3 3 0 0 0 2.984-2.683l1.214-11.425H20a1 1 0 1 0 0-2zm1.108 2H6.112l1.192 11.214A1 1 0 0 0 8.3 20H15.7a1 1 0 0 0 .995-.894zM10 10a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1" clip-rule="evenodd"></path></svg>
				Borrar Selección
			</button>
		</form>
	</div>
	<table>
		<thead>
			<tr>
				<th>
					<label>
						<input
							type="checkbox"
							class="checkbox"
							checked={selection.length === data.courses.length}
							on:click={selectAll}
						/>
					</label>
				</th>
				<th>NOMBRE</th>
				<th>CARRERA</th>
				<th>MÓDULO</th>
				<th>DESCRIPCIÓN</th>
				<th>EDITAR</th>
			</tr>
		</thead>
		<tbody>
			{#each data.courses as course (course.id)}
				<tr class="hover" class:selected={selection.includes(course.id)}>
					<td class="center">
						<label>
							<input
								type="checkbox"
								class="checkbox"
								value={course.id}
								bind:group={selection}
							/>
						</label>
					</td>
					<td class="nowrap">{course.name}</td>
					<td class="nowrap" >{course.expand ? course.expand.career.short_name : '-'}</td>
					<td><div class="cell-fc">{course.module}</div></td>
					<td>{course.description || 'Ninguna'}</td>
					<td>
						<div class="cell-fc">
							<a href="/admin/cursos/editar?id={course.id}">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0775 3.57749C11.4263 3.21697 11.8434 2.92949 12.3044 2.7318C12.7655 2.53411 13.2613 2.43017 13.7629 2.42603C14.2645 2.42189 14.762 2.51765 15.2262 2.7077C15.6905 2.89776 16.1122 3.17832 16.4669 3.53304C16.8217 3.88776 17.1022 4.30953 17.2923 4.77377C17.4823 5.23802 17.5781 5.73545 17.5739 6.23708C17.5698 6.73871 17.4659 7.23449 17.2682 7.69554C17.0705 8.15659 16.783 8.57367 16.4225 8.92249L15.5892 9.75582L9.67749 15.6675C9.06349 16.2813 8.27306 16.6881 7.41665 16.8308L3.46999 17.4892C3.33918 17.5109 3.20508 17.501 3.07884 17.4605C2.95259 17.4199 2.83785 17.3499 2.74413 17.2561C2.65041 17.1623 2.58043 17.0474 2.53999 16.9212C2.49956 16.7949 2.48985 16.6608 2.51165 16.53L3.16915 12.5833C3.31191 11.7269 3.71863 10.9365 4.33249 10.3225L11.0775 3.57749ZM10.8333 6.17832L5.51165 11.5008C5.14319 11.8692 4.89903 12.3435 4.81332 12.8575L4.34665 15.6533L7.14249 15.1867C7.65633 15.1012 8.13064 14.8573 8.49915 14.4892L13.8217 9.16666L10.8333 6.17832ZM15 7.98833L12.0117 4.99999L12.2558 4.75582C12.6542 4.36981 13.1884 4.15591 13.7431 4.16028C14.2978 4.16465 14.8285 4.38695 15.2208 4.77919C15.613 5.17144 15.8353 5.70219 15.8397 6.25689C15.8441 6.81159 15.6302 7.34578 15.2442 7.74416L15 7.98833Z" fill="#F2BD2C"/>
								</svg>
							</a>
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<footer class="justify-between fc g16">
		<p>
			Mostrando
			{(data.page - 1) * data.perPage + (data.totalItems > 1 ? 1 : 0)}
			-
			{data.perPage * data.page > data.totalItems
				? data.totalItems
				: data.page * data.perPage}
			de
			{data.totalItems}
		</p>
		<p class="text-blue">{selection.length} curso{selection.length === 1 ? '': 's'} seleccionado{selection.length === 1 ? '': 's'}</p>
		<div class="fc g16">
			<form>
				<button
					title="Página anterior"
					type="submit"
					class="btn btn-square"
					disabled={data.page == 1}
					on:click={() => {
						selection = [];
					}}>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.5L8 10L12 13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
					</button
				>
				<input type="text" class="hidden" name="page" value={data.page - 1} />
				<input type="text" class="hidden" name="query" value={query} />
				<input type="text" class="hidden" name="career" value={career} />
				<input type="text" class="hidden" name="module" value={module} />
			</form>
			<p>Página {data.page} de {data.totalPages}</p>
			<form>
				<input type="text" class="hidden" name="page" value={data.page + 1}/>
				<input type="text" class="hidden" name="query" value={query} />
				<input type="text" class="hidden" name="career" value={career} />
				<input type="text" class="hidden" name="module" value={module} />
				<button
					title="Página siguiente"
					type="submit"
					class="btn btn-square"
					disabled={data.page == data.totalPages}
					on:click={() => {
						selection = [];
					}}>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 6.5L12 10L8 13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
					</button
				>
			</form>
		</div>
	</footer>
</div>

<style>
	.nowrap {
		white-space: nowrap;
	}
	.center {
		text-align: center;
	}
	h1 {
		margin: 0;
	}
	.main {
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding: 24px;
	}
	.btns {
		width: 100%;
	}
	.btns .input {
		flex: 1;
	}
	footer p {
		font-weight: 500;
	}
</style>