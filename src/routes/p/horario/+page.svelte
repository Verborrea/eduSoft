<script>
  const days = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];

  const courses = [
    {
      curso: 'Administración de Negocios - Grupo A',
      horarios: [
        { dia: 'lunes', inicio: '8:00', fin: '10:00' },
        { dia: 'miércoles', inicio: '8:00', fin: '10:00' }
      ]
    },
    {
      curso: 'Comunicación - Grupo B',
      horarios: [
        { dia: 'martes', inicio: '11:00', fin: '14:00' },
        { dia: 'jueves', inicio: '9:00', fin: '11:00' }
      ]
    },
    {
      curso: 'Matemática - Grupo C',
      horarios: [
        { dia: 'viernes', inicio: '10:00', fin: '12:00' },
        { dia: 'lunes', inicio: '10:00', fin: '12:00' }
      ]
    }
  ];

  const hours = [
    '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const schedule = days.reduce((acc, day) => {
    acc[day] = hours.reduce((acc2, hour) => {
      acc2[hour] = []; // Cambiado para que guarde un array de cursos
      return acc2;
    }, {});
    return acc;
  }, {});

  // Llenar el horario con los cursos
  courses.forEach(course => {
    course.horarios.forEach(({ dia, inicio, fin }) => {
      const startIndex = hours.indexOf(inicio);
      const endIndex = hours.indexOf(fin);

      for (let i = startIndex; i < endIndex; i++) {
        if (schedule[dia] && schedule[dia][hours[i]].length === 0) {
          schedule[dia][hours[i]].push({ course, startIndex, endIndex });
        }
      }
    });
  });

  // Estructura para trackear cursos ya renderizados por celda
  let renderedCourses = {};

  // Función para verificar duplicados
  function isDuplicate(day, course) {
    if (!renderedCourses[day]) {
      renderedCourses[day] = new Set();
    }
    const key = course.curso;
    if (renderedCourses[day].has(key)) {
      return true;
    }
    renderedCourses[day].add(key);
    return false;
  }
</script>

<svelte:head>
  <title>eduSoft | Sistema Educativo Virtual</title>
</svelte:head>

<main class="super">
  <h1>Mi Horario</h1>

  <div class="grid">
    <div class="hora"></div>
    {#each days as day}
      <div class="cell dia">{day.charAt(0).toUpperCase() + day.slice(1)}</div>
    {/each}

    {#each hours as hour}
      <div class="cell hora">{hour}</div>
      {#each days as day}
        <div class="cell content">
          {#if schedule[day] && schedule[day][hour].length > 0}
            {#each schedule[day][hour] as {course, startIndex, endIndex}}
              {#if !isDuplicate(day, course)} 
                <div class="block" style="grid-row: span {endIndex - startIndex}; height: {(endIndex - startIndex)  * 100}%; ">
                  {course.curso}
                </div>
              {/if}
            {/each}
          {/if}
        </div>
      {/each}
    {/each}
  </div>
</main>

<style>
  h1 {
    margin: 0;
    color: var(--green);
  }
  .block {
    width: 95%;
    background-color: #8ac926;
    border-radius: 16px;
    text-align: left;
    padding: 12px 16px;
    z-index: 10;
    position: relative;
  }
  .grid {
    width: 80%;
    height: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 80px repeat(5, 1fr); /* 1 columna para horas + 5 columnas para días */
    grid-template-rows: repeat(13, 5.1vh); /* 13 filas de clases */
  }
  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hora {
    align-items: flex-start;
    line-height: 10px;
    font-size: 14px;
  }
  .dia {
    font-weight: bold;
  }
  .content {
    border-top: 1px solid #e2e2e2;
    align-items: start;
  }
  
  @media (max-width: 700px) {
    h1 {
      font-size: 24px;
    }
    .grid {
      grid-template-columns: 40px repeat(5, 1fr);
      overflow-x: scroll;
      margin: 0;
      width: 100%;
    }
    .hora{
      justify-content: left;
      position: sticky;
      left: 0;
      background-color: white;
      z-index: 11;
    }
  }
</style>
