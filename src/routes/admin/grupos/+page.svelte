<script>
  export let data

  console.log(data.grupos[0])
</script>

<svelte:head>
  <title>eduSoft | Grupos</title>
</svelte:head>

<main>
  <h1>Grupos</h1>
  <table>
    <thead>
      <tr>
        <th> ID </th>
        <th> Nombre de grupo </th>
        <th> Curso </th>
        <th> Profesor </th>
        <th> Semestre </th>
      </tr>  
    </thead>  
    <tbody>
      {#each data.grupos as grupo }
      <tr>
        <td> {grupo.id_grupo} </td>
        <td> {grupo.nombre_grupo} </td>
        <td> {grupo.id_curso} </td>
        <td> {grupo.id_profesor} </td>
        <td> {grupo.semestre} </td>
      </tr>
      {/each}
    </tbody>  
  </table>  
</main>