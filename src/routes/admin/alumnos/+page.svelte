<script lang="ts">
	import { copyToClipboard } from "$lib/utils"

	export let data

	$:currentPage = data.page
	function tooglePrevButtn () {
		return data.page == 1
	}
</script>

<svelte:head>
  	<title>eduSoft | Estudiantes</title>
</svelte:head>

<div class="main">
	<header class="fc">
		<h1>Lista de Estudiantes</h1>
		<a href="/admin/alumnos/matricula" class="btn btn-primary">Matricular Estudiante</a>
	</header>
	<div class="fc btns">
		<input type="text" class="input" placeholder="Buscar Alumnos">
		<div class="fc btns">
			<button type="button" class="btn btn-secondary">
				Asignar Grupos
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="17" r="3" stroke="var(--text)" stroke-width="2"/><circle cx="18" cy="17" r="3" stroke="var(--text)" stroke-width="2"/><circle cx="12" cy="7" r="3" stroke="var(--text)" stroke-width="2"/></svg>
			</button>
			<button class="btn red">
				Dar de Baja
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.5 17C6.0875 17 5.73437 16.8531 5.44062 16.5594C5.14687 16.2656 5 15.9125 5 15.5V5.5H4V4H8V3H12V4H16V5.5H15V15.491C15 15.9137 14.8531 16.2708 14.5594 16.5625C14.2656 16.8542 13.9125 17 13.5 17H6.5ZM13.5 5.5H6.5V15.5H13.5V5.5ZM8 14H9.5V7H8V14ZM10.5 14H12V7H10.5V14Z" fill="white"/>
				</svg>	
			</button>
		</div>
	</div>
	<div class="fc g8">
		FILTROS:
		<div class="select">
			<select name="">
				<option value="" selected disabled>Estado</option>
				<option value="">Activo</option>
				<option value="">Inactivo</option>
			</select>
		</div>
		<div class="select">
			<select name="">
				<option value="" selected disabled>Periodo</option>
				<option value="">2024-2</option>
			</select>
		</div>
		<div class="select">
			<select name="">
				<option value="" selected disabled>Carrera</option>
				<option value="">Maquinaria Pesada</option>
				<option value="">Seguridad Minera</option>
				<option value="">Topografía</option>
				<option value="">Computación e Informática</option>
				<option value="">Administración</option>
				<option value="">Contabilidad</option>
			</select>
		</div>
		<div class="select">
			<select name="">
				<option value="">Grupo</option>
			</select>
		</div>
	</div>
	<div class="table">
		<table>
			<thead>
			<tr>
				<th>
					<input type="checkbox" name="selectAll" id="selectAll">
				</th>
				<th> NOMBRE </th>
				<th>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.42896 17.4602V12.0833H4.11187C3.84923 12.0833 3.62805 11.9935 3.44833 11.814C3.26875 11.6342 3.17896 11.4131 3.17896 11.1504V7.5C3.17896 7.04167 3.34215 6.6493 3.66854 6.32292C3.99493 5.99653 4.38729 5.83333 4.84562 5.83333H7.5C7.95833 5.83333 8.35069 5.99653 8.67708 6.32292C9.00347 6.6493 9.16666 7.04167 9.16666 7.5V11.1504C9.16666 11.4131 9.07687 11.6342 8.89729 11.814C8.71757 11.9935 8.49639 12.0833 8.23375 12.0833H7.91666V17.4602C7.91666 17.7262 7.82521 17.9506 7.64229 18.1335C7.45923 18.3166 7.23472 18.4081 6.96875 18.4081H5.37687C5.11076 18.4081 4.88625 18.3166 4.70333 18.1335C4.52041 17.9506 4.42896 17.7262 4.42896 17.4602ZM6.17521 5.07479C5.69368 5.07479 5.28222 4.90493 4.94083 4.56521C4.59958 4.22549 4.42896 3.81486 4.42896 3.33333C4.42896 2.8518 4.59958 2.44118 4.94083 2.10146C5.28222 1.76173 5.69368 1.59187 6.17521 1.59187C6.65687 1.59187 7.0675 1.76173 7.40708 2.10146C7.7468 2.44118 7.91666 2.8518 7.91666 3.33333C7.91666 3.81486 7.7468 4.22549 7.40708 4.56521C7.0675 4.90493 6.65687 5.07479 6.17521 5.07479ZM12.5 17.4602V13.4877H11.2754C10.9578 13.4877 10.7031 13.3574 10.5115 13.0967C10.3199 12.836 10.2794 12.5485 10.39 12.2342L12.125 7.01312C12.2428 6.63868 12.4576 6.34847 12.7694 6.1425C13.0813 5.93639 13.4331 5.83333 13.8248 5.83333C14.2163 5.83333 14.5689 5.93639 14.8825 6.1425C15.196 6.34847 15.4116 6.63868 15.5294 7.01312L17.2646 12.2342C17.375 12.5485 17.3344 12.836 17.1429 13.0967C16.9514 13.3574 16.6968 13.4877 16.3792 13.4877H15.1544V17.4602C15.1544 17.7262 15.0629 17.9506 14.88 18.1335C14.6971 18.3166 14.4726 18.4081 14.2065 18.4081H13.4479C13.1819 18.4081 12.9574 18.3166 12.7744 18.1335C12.5915 17.9506 12.5 17.7262 12.5 17.4602ZM13.8248 5.07479C13.3431 5.07479 12.9325 4.90493 12.5929 4.56521C12.2532 4.22549 12.0833 3.81486 12.0833 3.33333C12.0833 2.8518 12.2532 2.44118 12.5929 2.10146C12.9325 1.76173 13.3431 1.59187 13.8248 1.59187C14.3063 1.59187 14.7178 1.76173 15.0592 2.10146C15.4004 2.44118 15.571 2.8518 15.571 3.33333C15.571 3.81486 15.4004 4.22549 15.0592 4.56521C14.7178 4.90493 14.3063 5.07479 13.8248 5.07479Z" fill="white"/>
					</svg>
				</th>
				<th> DNI </th>
				<th> CARRERA </th>
				<th> CORREO </th>
				<th> ESTADO </th>
				<th> EDITAR </th>
			</tr>
			</thead>
			<tbody>
			{#each data.alumnos as alumno}
			<tr>
				<td>
					<input
						type="checkbox"
						name="select"
						id="select"
					>
				</td>
				<td> {alumno.name} </td>
				<td>
					<div class="fc svg-container">
						{#if alumno.gender === 'female'}
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="8" r="3.75" stroke="var(--red)" stroke-width="2.5"/><path d="M8 15H12" stroke="var(--red)" stroke-width="2" stroke-linecap="round"/><path d="M10 17L10 12" stroke="var(--red)" stroke-width="2" stroke-linecap="round"/></svg>
						{:else}
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="12" r="3.75" stroke="var(--blue)" stroke-width="2.5"/><path d="M16 8V4" stroke="var(--blue)" stroke-width="2" stroke-linecap="round"/><path d="M12 4L16 4" stroke="var(--blue)" stroke-width="2" stroke-linecap="round"/><path d="M16 4L11 9" stroke="var(--blue)" stroke-width="2" stroke-linecap="round"/></svg>
						{/if}
					</div>
				</td>
				<td> {alumno.dni} </td>
				<td><div class="cell-fc"> {alumno.expand ? alumno.expand.career.short_name : '-'} </div></td>
				<td>
				<button class="fc" type="button" on:click={()=>copyToClipboard(alumno.expand?.user_id.email)}>
					<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="var(--blue)"><path d="M368.37-237.37q-37.78 0-64.39-26.61t-26.61-64.39v-474.26q0-37.78 26.61-64.39t64.39-26.61h354.26q37.78 0 64.39 26.61t26.61 64.39v474.26q0 37.78-26.61 64.39t-64.39 26.61H368.37Zm0-91h354.26v-474.26H368.37v474.26Zm-171 262q-37.78 0-64.39-26.61t-26.61-64.39v-565.26h91v565.26h445.26v91H197.37Zm171-262v-474.26 474.26Z"/></svg>
					{alumno.expand ? alumno.expand.user_id.email : '-'} 
				</button>
				</td>
				<td><div class="status active"></div></td>
				<td>
					<div class="cell-fc">
						<a href="">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.0608 3.26083C13.5486 2.77305 14.2102 2.49902 14.9 2.49902C15.2416 2.49902 15.5798 2.5663 15.8953 2.69701C16.2109 2.82772 16.4976 3.01931 16.7392 3.26083C16.9807 3.50235 17.1723 3.78908 17.303 4.10465C17.4337 4.42021 17.501 4.75843 17.501 5.1C17.501 5.44156 17.4337 5.77978 17.303 6.09535C17.1723 6.41091 16.9807 6.69764 16.7392 6.93916L11.7917 11.8867C11.1544 12.5243 10.3274 12.9381 9.435 13.0658L7.61833 13.3242C7.49033 13.3425 7.35982 13.3308 7.23712 13.29C7.11442 13.2492 7.0029 13.1804 6.91138 13.089C6.81986 12.9977 6.75086 12.8863 6.70983 12.7637C6.66881 12.641 6.65688 12.5105 6.675 12.3825L6.93417 10.5658C7.06175 9.6731 7.47551 8.84585 8.11333 8.20833L13.0608 3.26083ZM15.5608 4.43916C15.4741 4.35224 15.3711 4.28327 15.2577 4.23621C15.1443 4.18915 15.0228 4.16493 14.9 4.16493C14.7772 4.16493 14.6557 4.18915 14.5423 4.23621C14.4289 4.28327 14.3259 4.35224 14.2392 4.43916L9.29167 9.38666C8.90904 9.76909 8.66078 10.2653 8.58417 10.8008L8.48167 11.5175L9.19833 11.4158C9.73415 11.3394 10.2307 11.0911 10.6133 10.7083L15.5608 5.76083C15.6478 5.67413 15.7167 5.57113 15.7638 5.45774C15.8108 5.34434 15.8351 5.22277 15.8351 5.1C15.8351 4.97722 15.8108 4.85566 15.7638 4.74226C15.7167 4.62886 15.6478 4.52586 15.5608 4.43916ZM9.16667 3.33333C9.16667 3.55435 9.07887 3.76631 8.92259 3.92259C8.76631 4.07887 8.55435 4.16666 8.33333 4.16666C7.50167 4.16666 6.915 4.17333 6.45583 4.21666C6.00583 4.26 5.7375 4.33416 5.53167 4.43916C5.06128 4.67884 4.67885 5.06128 4.43917 5.53166C4.3275 5.75083 4.25083 6.04083 4.20917 6.545C4.1675 7.05916 4.16667 7.72 4.16667 8.66666V11.3333C4.16667 12.2808 4.16667 12.9408 4.20917 13.455C4.25083 13.9592 4.3275 14.2492 4.43917 14.4683C4.67885 14.9387 5.06128 15.3212 5.53167 15.5608C5.75083 15.6725 6.04083 15.7492 6.545 15.7908C7.05917 15.8325 7.72 15.8333 8.66667 15.8333H11.3333C12.2808 15.8333 12.9408 15.8333 13.455 15.7908C13.9592 15.7492 14.2492 15.6725 14.4683 15.5608C14.9387 15.3212 15.3212 14.9387 15.5608 14.4683C15.6658 14.2625 15.74 13.9942 15.7825 13.545C15.8267 13.085 15.8325 12.4983 15.8325 11.6658C15.8326 11.5564 15.8543 11.4481 15.8963 11.347C15.9382 11.2459 15.9997 11.1541 16.0772 11.0768C16.1546 10.9995 16.2466 10.9382 16.3477 10.8964C16.4488 10.8547 16.5572 10.8332 16.6667 10.8333C16.7761 10.8334 16.8844 10.8551 16.9855 10.8971C17.0866 10.9391 17.1784 11.0005 17.2557 11.078C17.333 11.1555 17.3943 11.2474 17.4361 11.3485C17.4778 11.4497 17.4993 11.5581 17.4992 11.6675C17.4992 12.4825 17.4942 13.1508 17.4417 13.7025C17.3883 14.2633 17.2817 14.7608 17.0458 15.225C16.6464 16.009 16.009 16.6464 15.225 17.0458C14.7317 17.2975 14.1983 17.4025 13.5908 17.4517C13 17.5 12.2725 17.5 11.3692 17.5H8.63083C7.7275 17.5 6.99917 17.5 6.40917 17.4517C5.8025 17.4017 5.26833 17.2975 4.77583 17.0458C3.99155 16.6465 3.35385 16.0091 2.95417 15.225C2.7025 14.7317 2.5975 14.1975 2.54833 13.5908C2.5 13 2.5 12.2725 2.5 11.3692V8.63083C2.5 7.7275 2.5 6.99916 2.54833 6.40916C2.59833 5.80166 2.7025 5.26833 2.95417 4.775C3.35363 3.99102 3.99103 3.35363 4.775 2.95416C5.23833 2.7175 5.73667 2.61166 6.2975 2.55833C6.85 2.50583 7.5175 2.5 8.33333 2.5C8.55435 2.5 8.76631 2.5878 8.92259 2.74408C9.07887 2.90036 9.16667 3.11232 9.16667 3.33333Z" fill="#7D7D7D"/>
							</svg>						
						</a>
					</div>
				</td>
			</tr>
			{/each}
			</tbody>
		</table>
	</div>
	<div class="justify-between fc">
		<div class="fc g24">	
			<span>{data.perPage * (data.page - 1) + 1} - {data.perPage*data.page > data.totalItems ? data.totalItems : data.page*data.perPage} de {data.totalItems} estudiantes</span>
			<span class="text-blue">x estudiantes seleccionados</span>
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
	header {
		justify-content: space-between;
	}
	.main {
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding: 24px;
	}
	h1 {
		margin: 0;
	}
	.btns {
		gap: 8px;
	}
	.svg-container {
		justify-content: center;
	}
	button.fc {
		color: var(--blue);
		gap: 4px;
	}
	button.fc:hover {
		text-decoration: underline;
	}
	.disabled > svg > path{
		stroke: #B4B4B4;
	}
</style>