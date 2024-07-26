<script>
  const fecha = 1;
</script>

<svelte:head>
    <title>eduSoft | Asistencias</title>
</svelte:head>

<main class="super">
  <table>
    <thead>
      <tr>
        <th> # </th>
        <th class="cell-l"> ESTUDIANTE </th>
        <th><span class="d-o">LUNES</span> 04/03 </th>
        <th><span class="d-o">MARTES</span> 05/03 </th>
        <th><span class="d-o">JUEVES</span> 07/03 </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="cell-c"> 1 </div>
        </td>
        <td> Juan Iñigo Quispe Pérez </td>
        <td>
          <div class="cell-c">
            {#if fecha}
            <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L3.5 8L1 6" stroke="#3EDD7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {:else}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_308_226" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                <rect width="20" height="20" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_308_226)">
                <path d="M10 11.0625L7.5644 13.4792C7.41037 13.6319 7.23613 13.7083 7.04169 13.7083C6.84724 13.7083 6.67363 13.6319 6.52085 13.4792C6.36808 13.3264 6.29169 13.1528 6.29169 12.9583C6.29169 12.7639 6.36808 12.5897 6.52085 12.4356L8.93752 10L6.52085 7.58521C6.36808 7.43118 6.29169 7.25694 6.29169 7.0625C6.29169 6.86806 6.36808 6.69444 6.52085 6.54167C6.67363 6.38889 6.84724 6.3125 7.04169 6.3125C7.23613 6.3125 7.41037 6.38889 7.5644 6.54167L10 8.95833L12.4148 6.54167C12.5688 6.38889 12.7431 6.3125 12.9375 6.3125C13.132 6.3125 13.3056 6.38889 13.4584 6.54167C13.6111 6.69444 13.6875 6.86806 13.6875 7.0625C13.6875 7.25694 13.6111 7.43118 13.4584 7.58521L11.0417 10L13.4584 12.4356C13.6111 12.5897 13.6875 12.7639 13.6875 12.9583C13.6875 13.1528 13.6111 13.3264 13.4584 13.4792C13.3056 13.6319 13.132 13.7083 12.9375 13.7083C12.7431 13.7083 12.5688 13.6319 12.4148 13.4792L10 11.0625Z" fill="#F46677"/>
              </g>
            </svg>
            {/if}        
          </div>
        </td>
        <td>
          <div class="cell-c"> Si </div>
        </td>
        <td>
          <div class="cell-c"> Si </div>
        </td>
      </tr>
    </tbody>
  </table>
</main>

<style>
  table {
    width: 90%;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    border-collapse: collapse;
  }
  th {
    font-weight: bold;
    background: black;
    color: white;
    font-size: 14px;
  }
  tr {
    font-weight: 500;
    background: #f5f5f5;
  }
  tr:hover {
    background-color: #E7E7E7;
  }
  /* ---- Table border radius ---- */
  tr:first-child th:first-child {
    border-top-left-radius: 16px;
  }
  tr:first-child th:last-child {
    border-top-right-radius: 16px;
  }
  tr:last-child td:first-child {
    border-bottom-left-radius: 16px;
  }
  tr:last-child td:last-child {
    border-bottom-right-radius: 16px;
  }
  /* --------------------------- */
  tr > th, td {
    padding: 8px 16px;
  }
  .cell-l {
    text-align: left;
  }
  .cell-c {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
</style>