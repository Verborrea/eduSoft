<script>
  export let data
</script>

<svelte:head>
  <title>eduSoft | Alumnos</title>
</svelte:head>

<main>
  <h1>Alumnos</h1>
  <table>
    <thead>
      <tr>
        <th> ID </th>
        <th> Nombre </th>
        <th> Apellido </th>
        <th> Correo electrónico </th>
        <th> Pensión </th>
      </tr>
    </thead>
    <tbody>
      {#each data.alumnos as alumno}
      <tr>
        <td> {alumno.id_alumno} </td>
        <td> {alumno.nombre} </td>
        <td>  </td>
        <td>  </td>
        <td> {alumno.pension} </td>
      </tr>
      {/each}
    </tbody>
  </table>
</main>