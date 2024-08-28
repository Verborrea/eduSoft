<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'

	export let data;

	let searchParams = new URLSearchParams($page.url.search)

	$: courses = data.courses

	function updateURLParam(event: Event) {
		const target = event.target as HTMLSelectElement | HTMLInputElement;
		searchParams.set(target.name, target.value);
		goto(`?${searchParams.toString()}`);
	}

	let ids: string[] = []

	function toggleSelectAll() {
		if (ids.length < data.cursos.length) {
			ids = data.cursos.map(c => c.id)
		} else {
			ids = []
		}
	}

	function selectCourse(event: Event, courseId: string) {
		if (event.target instanceof HTMLInputElement) {
			if (event.target.checked) {
				ids = [...ids, courseId]
			} else {
				ids = ids.filter(i => i !== courseId)
			}
		}
	}
</script>

<svelte:head>
	<title>eduSoft | Cursos</title>
</svelte:head>

<div class="main">
	<header class="fc justify-between">
		<h1>Cursos</h1>
		<a href="/admin/cursos/añadir" class="btn btn-primary">
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M13.0608 3.26083C13.5486 2.77305 14.2102 2.49902 14.9 2.49902C15.2416 2.49902 15.5798 2.5663 15.8953 2.69701C16.2109 2.82772 16.4976 3.01931 16.7392 3.26083C16.9807 3.50235 17.1723 3.78908 17.303 4.10465C17.4337 4.42021 17.501 4.75843 17.501 5.1C17.501 5.44156 17.4337 5.77978 17.303 6.09535C17.1723 6.41091 16.9807 6.69764 16.7392 6.93916L11.7917 11.8867C11.1544 12.5243 10.3274 12.9381 9.435 13.0658L7.61833 13.3242C7.49033 13.3425 7.35982 13.3308 7.23712 13.29C7.11442 13.2492 7.0029 13.1804 6.91138 13.089C6.81986 12.9977 6.75086 12.8863 6.70983 12.7637C6.66881 12.641 6.65688 12.5105 6.675 12.3825L6.93417 10.5658C7.06175 9.6731 7.47551 8.84585 8.11333 8.20833L13.0608 3.26083ZM15.5608 4.43916C15.4741 4.35224 15.3711 4.28327 15.2577 4.23621C15.1443 4.18915 15.0228 4.16493 14.9 4.16493C14.7772 4.16493 14.6557 4.18915 14.5423 4.23621C14.4289 4.28327 14.3259 4.35224 14.2392 4.43916L9.29167 9.38666C8.90904 9.76909 8.66078 10.2653 8.58417 10.8008L8.48167 11.5175L9.19833 11.4158C9.73415 11.3394 10.2307 11.0911 10.6133 10.7083L15.5608 5.76083C15.6478 5.67413 15.7167 5.57113 15.7638 5.45774C15.8108 5.34434 15.8351 5.22277 15.8351 5.1C15.8351 4.97722 15.8108 4.85566 15.7638 4.74226C15.7167 4.62886 15.6478 4.52586 15.5608 4.43916ZM9.16667 3.33333C9.16667 3.55435 9.07887 3.76631 8.92259 3.92259C8.76631 4.07887 8.55435 4.16666 8.33333 4.16666C7.50167 4.16666 6.915 4.17333 6.45583 4.21666C6.00583 4.26 5.7375 4.33416 5.53167 4.43916C5.06128 4.67884 4.67885 5.06128 4.43917 5.53166C4.3275 5.75083 4.25083 6.04083 4.20917 6.545C4.1675 7.05916 4.16667 7.72 4.16667 8.66666V11.3333C4.16667 12.2808 4.16667 12.9408 4.20917 13.455C4.25083 13.9592 4.3275 14.2492 4.43917 14.4683C4.67885 14.9387 5.06128 15.3212 5.53167 15.5608C5.75083 15.6725 6.04083 15.7492 6.545 15.7908C7.05917 15.8325 7.72 15.8333 8.66667 15.8333H11.3333C12.2808 15.8333 12.9408 15.8333 13.455 15.7908C13.9592 15.7492 14.2492 15.6725 14.4683 15.5608C14.9387 15.3212 15.3212 14.9387 15.5608 14.4683C15.6658 14.2625 15.74 13.9942 15.7825 13.545C15.8267 13.085 15.8325 12.4983 15.8325 11.6658C15.8326 11.5564 15.8543 11.4481 15.8963 11.347C15.9382 11.2459 15.9997 11.1541 16.0772 11.0768C16.1546 10.9995 16.2466 10.9382 16.3477 10.8964C16.4488 10.8547 16.5572 10.8332 16.6667 10.8333C16.7761 10.8334 16.8844 10.8551 16.9855 10.8971C17.0866 10.9391 17.1784 11.0005 17.2557 11.078C17.333 11.1555 17.3943 11.2474 17.4361 11.3485C17.4778 11.4497 17.4993 11.5581 17.4992 11.6675C17.4992 12.4825 17.4942 13.1508 17.4417 13.7025C17.3883 14.2633 17.2817 14.7608 17.0458 15.225C16.6464 16.009 16.009 16.6464 15.225 17.0458C14.7317 17.2975 14.1983 17.4025 13.5908 17.4517C13 17.5 12.2725 17.5 11.3692 17.5H8.63083C7.7275 17.5 6.99917 17.5 6.40917 17.4517C5.8025 17.4017 5.26833 17.2975 4.77583 17.0458C3.99155 16.6465 3.35385 16.0091 2.95417 15.225C2.7025 14.7317 2.5975 14.1975 2.54833 13.5908C2.5 13 2.5 12.2725 2.5 11.3692V8.63083C2.5 7.7275 2.5 6.99916 2.54833 6.40916C2.59833 5.80166 2.7025 5.26833 2.95417 4.775C3.35363 3.99102 3.99103 3.35363 4.775 2.95416C5.23833 2.7175 5.73667 2.61166 6.2975 2.55833C6.85 2.50583 7.5175 2.5 8.33333 2.5C8.55435 2.5 8.76631 2.5878 8.92259 2.74408C9.07887 2.90036 9.16667 3.11232 9.16667 3.33333Z" fill="white"/>
			</svg>
			Nuevo Curso
		</a>
	</header>
	<div class="fc btns g8">
		<div class="input">
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9.16666C1.5 4.93248 4.93248 1.5 9.16666 1.5C13.4009 1.5 16.8334 4.93247 16.8334 9.16666C16.8334 10.9233 16.2426 12.542 15.2489 13.8348L18.2071 16.793C18.5976 17.1835 18.5976 17.8167 18.2071 18.2072C17.8166 18.5978 17.1834 18.5978 16.7929 18.2072L13.8346 15.249C12.5419 16.2426 10.9233 16.8334 9.16666 16.8334C4.93247 16.8334 1.5 13.4009 1.5 9.16666ZM13.2559 13.0897C13.2254 13.1138 13.196 13.1399 13.1679 13.168C13.1398 13.1961 13.1137 13.2255 13.0896 13.256C12.0715 14.233 10.6892 14.8334 9.16666 14.8334C6.03705 14.8334 3.5 12.2963 3.5 9.16666C3.5 6.03705 6.03705 3.5 9.16666 3.5C12.2963 3.5 14.8334 6.03705 14.8334 9.16666C14.8334 10.6892 14.2329 12.0716 13.2559 13.0897Z" fill="#111111"/>
			</svg>
			<input type="text" placeholder="Buscar Cursos" name="name" on:change={updateURLParam}>
		</div>
		<a class="btn btn-primary" title="Refrescar" href="/admin/cursos" data-sveltekit-reload>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-md-heavy"><path fill="white" d="M3.07 10.876C3.623 6.436 7.41 3 12 3a9.15 9.15 0 0 1 6.012 2.254V4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1H15a1 1 0 1 1 0-2h1.957A7.15 7.15 0 0 0 12 5a7 7 0 0 0-6.946 6.124 1 1 0 1 1-1.984-.248m16.992 1.132a1 1 0 0 1 .868 1.116C20.377 17.564 16.59 21 12 21a9.15 9.15 0 0 1-6-2.244V20a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7.043A7.15 7.15 0 0 0 12 19a7 7 0 0 0 6.946-6.124 1 1 0 0 1 1.116-.868"></path></svg>
			Refrescar
		</a>
		<form action="?/delete" method="post">
			<input class="none" type="text" name="ids" value={ids}>
			<button class="btn red">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.5 17C6.0875 17 5.73437 16.8531 5.44062 16.5594C5.14687 16.2656 5 15.9125 5 15.5V5.5H4V4H8V3H12V4H16V5.5H15V15.491C15 15.9137 14.8531 16.2708 14.5594 16.5625C14.2656 16.8542 13.9125 17 13.5 17H6.5ZM13.5 5.5H6.5V15.5H13.5V5.5ZM8 14H9.5V7H8V14ZM10.5 14H12V7H10.5V14Z" fill="white"/>
				</svg>
				Eliminar Selección
			</button>
		</form>
	</div>
	<div class="fc g8">
		FILTROS:
		<div class="select">
			<select name="career" on:change={updateURLParam}>
				<option value="" selected>Cualquier carrera</option>
				{#each data.careers as career}
					<option value={career.id}>{career.short_name}</option>
				{/each}
			</select>
		</div>
		<div class="select">
			<select name="module" on:change={updateURLParam}>
				<option value="" selected>Cualquier módulo</option>
				<option value="I">Módulo I</option>
				<option value="II">Módulo II</option>
				<option value="III">Módulo III</option>
				<option value="IV">Módulo IV</option>
				<option value="V">Módulo V</option>
				<option value="VI">Módulo VI</option>
				<option value="VII">Módulo VII</option>
				<option value="VIII">Módulo VIII</option>
				<option value="IX">Módulo IX</option>
				<option value="X">Módulo X</option>
			</select>
		</div>
	</div>
	<table>
		<thead>
			<tr>
				<th>
					<input type="checkbox" name="selectAll" id="selectAll" on:click={toggleSelectAll}>
				</th>
				<th>NOMBRE</th>
				<th>CARRERA</th>
				<th>MÓDULO</th>
				<th>DESCRIPCIÓN</th>
				<th>EDITAR</th>
			</tr>
		</thead>
		<tbody>
			{#each data.courses as curso}
				<tr>
					<td class="center">
						<input
							type="checkbox"
							name="select"
							id="select"
							checked={ids.includes(curso.id)}
							on:input={(e) => {selectCourse(e, curso.id)}}
						>
					</td>
					<td class="nowrap">{curso.name}</td>
					<td class="nowrap" >{curso.expand ? curso.expand.career.short_name : '-'}</td>
					<td><div class="cell-fc">{curso.module}</div></td>
					<td>{curso.description || 'Ninguna'}</td>
					<td>
						<div class="cell-fc">
							<a href="/admin/cursos/editar?id={curso.id}">
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
	<div class="justify-between fc">
		<div class="fc g24">	
			<span>{courses.length > 0 ? (data.perPage * (data.page - 1) + 1) : 0} - {data.perPage*data.page > data.totalItems ? data.totalItems : data.page*data.perPage} de {data.totalItems} cursos</span>
			<span class="text-blue">{ids.length} cursos seleccionados</span>
		</div>
		<div class="fc g8">
			<a class="btn btn-secondary p10" class:disabled={data.page == 1} href="?page={data.page > 1 ? data.page - 1 : data.page}">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 6.5L8 10L12 13.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>					
			</a>
			<span>Página {data.page} de {data.totalPages}</span>
			<a class="btn btn-secondary p10" class:disabled={data.page == data.totalPages} href="?page={data.page < data.totalPages ? data.page + 1 : data.page}">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8 6.5L12 10L8 13.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
		</div>
	</div>
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
	.disabled:hover {
		background-color: var(--gray);
	}
	.disabled > svg > path{
		stroke: #B4B4B4;
	}
</style>