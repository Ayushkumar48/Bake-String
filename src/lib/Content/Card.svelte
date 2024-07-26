<script>
  import Item from "./Item.svelte";
  export let card;
  export let onDelete;
  function handleClick() {
    onDelete();
  }
</script>

<div>
  <button class="bin" on:click={handleClick}
    ><img src="./src/assets/Trashcan.svg" alt="trashcan" /></button
  >
  <p>{card.title}</p>
  <ul>
    {#each card.subtasks as item}
      <Item title={item.title_subtask}>{item.description}</Item>
    {/each}
  </ul>
</div>

<style>
  p {
    font-size: 1.25rem;
    text-align: center;
  }
  .bin {
    position: absolute;
    direction: rtl;
    width: 8%;
    top: 11%;
    right: 6%;
  }
  ul {
    list-style-type: none;
  }
</style>
