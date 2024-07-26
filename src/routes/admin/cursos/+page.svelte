<script>
  export let data;
</script>

<svelte:head>
  <title>eduSoft | Cursos</title>
</svelte:head>

<main>
  <h1>Cursos</h1>
  <table>
    <thead>
      <tr>
        <th> ID </th>
        <th> Nombre </th>
        <th> Descripción </th>
      </tr>
    </thead>
    <tbody>
      {#each data.cursos as curso}
        <tr>
          <td>{curso.id_curso}</td>
          <td>{curso.nombre_curso}</td>
          <td>{curso.descripcion}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>

<style>
  
</style>