<script>
  export let title;
  let isChecked = false;
  function handleCheck() {
    isChecked = !isChecked;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li on:click={handleCheck}>
  <input type="checkbox" bind:checked={isChecked} />
  <span class={isChecked ? "line" : ""}>
    <span>{title} - </span>
    <slot></slot>
  </span>
</li>

<style>
  .line {
    text-decoration-line: line-through;
    opacity: 0.4;
    transition: all 0.15s ease-in-out;
  }
  input[type="checkbox"] {
    border-radius: 2px;
  }
  input[type="checkbox"]:hover {
    cursor: pointer;
  }
  input[type="checkbox"]:focus {
    outline: none;
    box-shadow: none;
  }
  li:hover {
    cursor: pointer;
    user-select: none;
  }
  li {
    display: flex;
    align-items: center;
    gap: 3%;
  }
</style>
