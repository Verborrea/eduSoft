<script>
  export let color, text, href
</script>

<a {href} class="fcol16" style="--theme-color: {color}">
  <slot/>
  {text}
</a>

<style>
  a {
    width: 120px;
    text-align: center;
    align-items: center;
    font-size: 20px;
    padding: 4px;
    gap: 8px;
    text-decoration: none;
    color: var(--theme-color);
  }
  @media (max-width: 700px) {
    a {
      font-size: 16px;
      width: 100%;
      flex-direction: row;
    }
    a :global(svg) {
      width: 36px;
      height: 36px;
    }
  }
</style>