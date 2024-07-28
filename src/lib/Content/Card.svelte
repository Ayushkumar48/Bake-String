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
    ><img src="./Trashcan.svg" alt="trashcan" /></button
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
    width: 35px;
    border-radius: 100px;
    background-color: cadetblue;
    padding: 2px;
    top: 11%;
    right: 6%;
    transition: background-color 0.2s ease-in-out;
  }
  .bin:hover {
    background-color: rgb(19, 146, 151);
  }
  ul {
    list-style-type: none;
  }
</style>
