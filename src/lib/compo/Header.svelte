<header class="rel fcol16">
	<div class="top fc justify-between">
		<a href="/p" title="Inicio" class="fc">
			<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M7.23974 21.0837C6.23686 20.5333 5.60262 19.4835 5.60262 18.3371V13.1985L3.16516 11.867C2.1043 11.2896 2.08739 9.72553 3.16516 9.14957L12.5288 4.04657C13.4173 3.54337 14.5828 3.54343 15.4712 4.04657L26.5011 10.0637C27.0069 10.3225 27.3114 10.8675 27.3114 11.4307V18.6667C27.3114 19.4548 26.6855 20.0807 25.8974 20.0807C25.113 20.0807 24.467 19.4553 24.467 18.6667V12.0636L22.3974 13.1985V18.3371C22.3974 19.4835 21.7631 20.5333 20.7602 21.0837L15.4545 23.9204C14.5714 24.4206 13.4286 24.4206 12.5455 23.9204L7.23974 21.0837ZM14 14.4871L21.3818 10.5L14 6.5129L6.6182 10.5L14 14.4871ZM14 21.4996L19.553 18.4981V14.7204L15.4837 16.9534C14.5923 17.4582 13.4077 17.4582 12.5163 16.9534L8.44695 14.7204V18.4981L14 21.4996Z" fill="var(--blue)"/>
			</svg>
			<h1 class="logo">eduSoft</h1>
		</a>
		<a href="/p/profile" type="button" class="btn btn-outline">
			<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="var(--text)"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-80q134 0 227.5-94T800-482q-71-7-109-44.5T626-618q-5-11-14.5-16.5T591-640H370q-12 0-21.5 5.5T334-618q-27 55-66 92.5T160-481q0 134 93.5 227.5T480-160ZM360-390q-21 0-35.5-14.5T310-440q0-21 14.5-35.5T360-490q21 0 35.5 14.5T410-440q0 21-14.5 35.5T360-390Zm240 0q-21 0-35.5-14.5T550-440q0-21 14.5-35.5T600-490q21 0 35.5 14.5T650-440q0 21-14.5 35.5T600-390Z"/></svg>
			Mi Perfil
		</a>
	</div>
	<div class="abs wrapper">
		<select id="course" class="focus-visible" name="course" title="Curso">
			<option>Matemática CCOMP2-1</option>
			<option>Ciencias Sociales CCOMP2-1</option>
			<option>Lenguas CCOMP2-1</option>
		</select>
	</div>
</header>

<style>
	header {
		padding: 16px 24px;
	}
	.top {
		align-self: stretch;
	}
	a[title="Inicio"] {
		text-decoration: none;
		color: inherit;
		gap: 4px;
	}
	a[title="Inicio"]:hover {
		color: var(--blue);
	}
	a:hover {
		text-decoration: none;
	}
	.wrapper {
		left: 50%;
		transform: translateX(-50%);
	}
	select {
		appearance: none;
		background: var(--gray);
		border: none;
		border-radius: 8px;
		padding: 10px 24px;
		padding-right: 52px;
		color: var(--text);
		outline-color: var(--outline);
	}
	select:hover {
		background: var(--gray-dark);
	}
	.wrapper::after {
		content: "";
		width: 20px;
		height: 20px;
		background-image: url('/select.svg');
		font-size: 1rem;
		top: 50%;
		transform: translateY(-50%);
		right: 24px;
		position: absolute;
	}
	@media (max-width: 700px) {
		header {
			padding: 16px;
		}
		.wrapper {
			position: relative;
		}
		select {
			width: 100%;
		}
	}
</style>