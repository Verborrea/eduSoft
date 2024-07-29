<script lang="ts">
  import HeaderAdmin from '$lib/compo/HeaderAdmin.svelte'
  import Sidebar from '$lib/compo/Sidebar.svelte'
</script>

<HeaderAdmin/>
<div>
  <Sidebar/>
  <slot/>
</div>

<style>
  div {
    display: flex;
    height: calc(100dvh - 72px);
    border-top: 2px solid var(--gray-dark);
  }
  div>:global(main) {
    flex: 1;
    padding: 24px;
  }
</style>