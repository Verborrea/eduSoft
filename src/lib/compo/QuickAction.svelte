<script>
  export let color, text
</script>

<a href="/" class="fcol16" style="--theme-color: {color}">
  <slot/>
  {text}
</a>

<style>
  a {
    align-items: center;
    font-size: 20px;
    text-decoration: none;
    color: var(--theme-color);
  }
</style>