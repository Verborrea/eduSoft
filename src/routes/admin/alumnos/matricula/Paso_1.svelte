<script lang="ts">
  import { createEventDispatcher } from "svelte";

  let form: any
  const dispatch = createEventDispatcher()
  
  function nextPage() {
    const formData = new FormData(form)
    dispatch('formSubmit', { formData })
    dispatch('next', { page: 1 })  
  }

  function volver() {
		window.history.back();
	}

  let selectImage: any = null
  function handleFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        selectImage = e.target?.result
      }
      reader.readAsDataURL(file)
    }
  }

  let selectFile
</script>

<form bind:this={form} action="" name="paso1">
  <h2>1. Actualización de Datos personales</h2>
  <div class="flex g24">  
    <div class="seccion">
      <h2>Datos Personales</h2>
      <label class="flex1">
        Nombres y Apellidos:
        <input type="text" name="names" placeholder="Juan Pérez" />
      </label>
      <div class="row">
        <label class="flex1">
          Documento de Identidad:
          <input type="text" name="dni" placeholder="70625795" />
        </label>
        <label class="flex1">
          Fecha de Nacimiento:
          <input type="date" name="date"/>
        </label>
        <label class="age">
          Edad:
          <input type="text" name="age" placeholder="21">
        </label>
        <label class="flex1">
          <span>Género:</span>
            <select name="gender" class="select">
              <option value="0" selected disabled> Seleccione una opción </option>
              <option value="Masculino"> Masculino </option>
              <option value="Femenino"> Femenino </option>
            </select>
        </label>
      </div>
    </div>
  
    <div class="LUGAR DE LA FOTO">
      <label>
        <div class="foto">
          <input type="file" name="profileImage" accept="image/*" on:change={handleFileChange}>
          {#if selectImage}
            <img src={selectImage} alt="">
          {:else}
            <span>Seleccione una foto</span>
          {/if}
        </div>
      </label>
    </div>
  </div>


  <div class="seccion">
    <h2>Info de Contacto</h2>
    <div class="row">
      <label class="flex1">
        Correo Electrónico:
        <input type="email" name="mail" placeholder="juan.perez@ejemplo.com" />
      </label>
      <label class="flex1">
        Nro. Teléfono:
        <input type="text" name="phone1" placeholder="999 888 777" />
      </label>
      <label class="flex1">
        Nro. Teléfono Opcional:
        <input type="text" name="phone2" placeholder="999 888 777" />
      </label>
    </div>

    <p class="group"> Lugar de Nacimiento: </p>
    <div class="row">
      <label class="flex1">
        Departamento:
        <input type="text" name="dep" placeholder="Arequipa" />
      </label>
      <label class="flex1">
        Provincia:
        <input type="text" class="flex1" name="prov" placeholder="Islay" />
      </label>
      <label class="flex1">
        Distrito:
        <input type="text" class="flex1" name="distr" placeholder="Mollendo" />
      </label>
      <label class="flex1">
        País:
        <input type="text" class="flex1" name="pais" placeholder="Perú" />
      </label>
    </div>
    
    <p class="group">Residencia actual:</p>
    <div class="row grow">
      <label class="flex1">
        Dirección:
        <input type="text" name="adrss" placeholder="Residencial Santa Fe" />
      </label>
      <label class="flex1">
        Departamento:
        <input type="text" name="adrssDep" placeholder="Arequipa" />
      </label>
      <label class="flex1">
        Provincia:
        <input type="text" name="adrssProv" placeholder="Arequipa" />
      </label>
      <label class="flex1">
        Distrito:
        <input type="text" name="adrssDistr" placeholder="Yanahuara" />
      </label>
    </div>
  </div>

  <div class="seccion">
    <h2> Educación Previa </h2>
    <div class="row">
      <label class="flex1">
        Colegio:
        <input type="text" name="cole" placeholder="San Francisco de Asis" />
      </label>
      <label class="flex1">
        Dirección de la IE:
        <input type="text" name="adrssCole" placeholder="Calle San Francisco H-2">
      </label>
    </div>
  </div>

  <div class="seccion">
    <h2> Persona de contacto </h2>
    <div class="row grow">
      <label class="flex1">
        Nombre:
        <input type="text" name="contactName" placeholder="María Pérez" />
      </label>
      <label class="flex1">
        Relación:
        <input type="text" name="contactRel" placeholder="Mamá" />
      </label>
      <label class="flex1">
        Teléfono:
        <input type="text" name="contactPhone" placeholder="987 654 321" />
      </label>
    </div>
  </div>
  
  <div class="seccion">
  <h2> Documentos </h2>
    <div class="row">
      <label class="flex1">
        <span>Copia DNI:</span>
        <div class="file">
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3844 12.5497C10.3844 13.841 9.92311 14.9337 9.00061 15.8279C8.07811 16.7222 6.9679 17.1693 5.66999 17.1693C4.35638 17.1693 3.24395 16.7054 2.3327 15.7774C1.42144 14.8494 0.96582 13.7249 0.96582 12.4039V4.19015C0.96582 3.25084 1.30006 2.45605 1.96853 1.80577C2.637 1.15564 3.44422 0.830566 4.3902 0.830566C5.35006 0.830566 6.15908 1.173 6.81728 1.85786C7.47547 2.54286 7.80457 3.3689 7.80457 4.33598V12.0447C7.80457 12.6322 7.59652 13.129 7.1804 13.5352C6.76429 13.9413 6.26082 14.1443 5.66999 14.1443C5.06735 14.1443 4.56263 13.9332 4.15582 13.511C3.74888 13.0886 3.5454 12.5721 3.5454 11.9614V4.04473H5.22478V12.0447C5.22478 12.1693 5.26707 12.2713 5.35165 12.3508C5.4361 12.4304 5.54221 12.4701 5.66999 12.4701C5.7979 12.4701 5.90575 12.4312 5.99353 12.3533C6.08131 12.2755 6.1252 12.1727 6.1252 12.0447V4.19515C6.12853 3.72237 5.95922 3.32244 5.61728 2.99536C5.27533 2.66841 4.86492 2.50494 4.38603 2.50494C3.90714 2.50494 3.49728 2.67452 3.15645 3.01369C2.81561 3.353 2.6452 3.75904 2.6452 4.23182V12.5497C2.64853 13.3764 2.94596 14.0705 3.53749 14.632C4.12915 15.1934 4.84165 15.4811 5.67499 15.4949C6.51165 15.5088 7.22749 15.2177 7.82249 14.6216C8.41735 14.0254 8.71152 13.3 8.70499 12.4456V3.85557H10.3844V12.5497Z" fill="#111111"/>
          </svg>
          Seleccionar Archivo
          <input type="file"/>
        </div>
      </label>
      <label class="flex1">
        <span>Partida de Nacimiento:</span>
        <div class="file">
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3844 12.5497C10.3844 13.841 9.92311 14.9337 9.00061 15.8279C8.07811 16.7222 6.9679 17.1693 5.66999 17.1693C4.35638 17.1693 3.24395 16.7054 2.3327 15.7774C1.42144 14.8494 0.96582 13.7249 0.96582 12.4039V4.19015C0.96582 3.25084 1.30006 2.45605 1.96853 1.80577C2.637 1.15564 3.44422 0.830566 4.3902 0.830566C5.35006 0.830566 6.15908 1.173 6.81728 1.85786C7.47547 2.54286 7.80457 3.3689 7.80457 4.33598V12.0447C7.80457 12.6322 7.59652 13.129 7.1804 13.5352C6.76429 13.9413 6.26082 14.1443 5.66999 14.1443C5.06735 14.1443 4.56263 13.9332 4.15582 13.511C3.74888 13.0886 3.5454 12.5721 3.5454 11.9614V4.04473H5.22478V12.0447C5.22478 12.1693 5.26707 12.2713 5.35165 12.3508C5.4361 12.4304 5.54221 12.4701 5.66999 12.4701C5.7979 12.4701 5.90575 12.4312 5.99353 12.3533C6.08131 12.2755 6.1252 12.1727 6.1252 12.0447V4.19515C6.12853 3.72237 5.95922 3.32244 5.61728 2.99536C5.27533 2.66841 4.86492 2.50494 4.38603 2.50494C3.90714 2.50494 3.49728 2.67452 3.15645 3.01369C2.81561 3.353 2.6452 3.75904 2.6452 4.23182V12.5497C2.64853 13.3764 2.94596 14.0705 3.53749 14.632C4.12915 15.1934 4.84165 15.4811 5.67499 15.4949C6.51165 15.5088 7.22749 15.2177 7.82249 14.6216C8.41735 14.0254 8.71152 13.3 8.70499 12.4456V3.85557H10.3844V12.5497Z" fill="#111111"/>
          </svg>
          Seleccionar Archivo
          <input type="file"/>
        </div>
      </label>
      <label class="flex1">
        <span>Certificado de estudios:</span>
        <div class="file">
          <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3844 12.5497C10.3844 13.841 9.92311 14.9337 9.00061 15.8279C8.07811 16.7222 6.9679 17.1693 5.66999 17.1693C4.35638 17.1693 3.24395 16.7054 2.3327 15.7774C1.42144 14.8494 0.96582 13.7249 0.96582 12.4039V4.19015C0.96582 3.25084 1.30006 2.45605 1.96853 1.80577C2.637 1.15564 3.44422 0.830566 4.3902 0.830566C5.35006 0.830566 6.15908 1.173 6.81728 1.85786C7.47547 2.54286 7.80457 3.3689 7.80457 4.33598V12.0447C7.80457 12.6322 7.59652 13.129 7.1804 13.5352C6.76429 13.9413 6.26082 14.1443 5.66999 14.1443C5.06735 14.1443 4.56263 13.9332 4.15582 13.511C3.74888 13.0886 3.5454 12.5721 3.5454 11.9614V4.04473H5.22478V12.0447C5.22478 12.1693 5.26707 12.2713 5.35165 12.3508C5.4361 12.4304 5.54221 12.4701 5.66999 12.4701C5.7979 12.4701 5.90575 12.4312 5.99353 12.3533C6.08131 12.2755 6.1252 12.1727 6.1252 12.0447V4.19515C6.12853 3.72237 5.95922 3.32244 5.61728 2.99536C5.27533 2.66841 4.86492 2.50494 4.38603 2.50494C3.90714 2.50494 3.49728 2.67452 3.15645 3.01369C2.81561 3.353 2.6452 3.75904 2.6452 4.23182V12.5497C2.64853 13.3764 2.94596 14.0705 3.53749 14.632C4.12915 15.1934 4.84165 15.4811 5.67499 15.4949C6.51165 15.5088 7.22749 15.2177 7.82249 14.6216C8.41735 14.0254 8.71152 13.3 8.70499 12.4456V3.85557H10.3844V12.5497Z" fill="#111111"/>
          </svg>
          Seleccionar Archivo
          <input type="file"/>
        </div>
      </label>
    </div>
  </div>

  <div class="seccion">
    <h2> Observaciones </h2>
    <textarea name="details" id="" rows="5" placeholder="Detalles importantes..."></textarea>
  </div>

  <div class="row end">
    <button class="btn btn-secondary" type="button" on:click={volver}>Cancelar</button>
    <button class="btn btn-primary" type="submit" on:click={nextPage}>Siguiente</button>
  </div>
</form>
<style>
	h2 {
		margin: 0;
	}
  form {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.seccion {
    width: 100%;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.row {
		display: flex;
			flex-direction: row;
			gap: 12px;
			align-items: flex-end;
	}
	.end {
		justify-content: flex-end;
	}
	.group {
		font-size: 18px;
		font-weight: bold;
		margin: 16px 0 0 0;
	}
	label {
		font-weight: bold;
	}
	input, textarea, .select{
		margin-top: 8px;
		width: 100%;
		border-radius: 12px;
		padding: 10px 16px;
	}
	input[type=file] {
		display: none;
	}
	input[type=date] {
		height: 44px;
	}
  .age {
    width: 55px;
  }
  .flex {
    display: flex;
  }
	.flex1 {
		flex: 1;
	}
	.grow label:first-child {
		flex-grow: 2;
	}
	.file {
		padding: 10px 16px;
		margin: 8px 0 0;
		background-color: var(--gray);
		border-radius: 12px;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;
		font-weight: 500;
		line-height: 24px;
	}
  .foto {
    height: 196px;
    min-width: 156px;
    max-width: 180px;
    padding: 4px 6px;
    background-color: var(--gray);
    border-radius: 12px;
    display: flex;
    text-align: center;
  }
  img {
    border-radius: 8px;
    object-fit: contain;
  }
	.file:hover, .foto:hover{
		cursor: pointer;
	}
</style>