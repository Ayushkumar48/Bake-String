<script>
  import Item from "./Item.svelte";
  export let card;
  export let onDelete;
  function handleClick() {
    onDelete();
  }
</script>

<div class="card">
  <button class="bin" on:click={handleClick}
    ><img src="./src/assets/Trashcan.svg" alt="trashcan" /></button
  >
  <p>{card.title}</p>
  <ul>
    {#each card.item as item}
      <Item title={item.title}>{item.description}</Item>
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
  .card {
    position: relative;
    background-color: rgb(105, 192, 195);
    padding: 1% 1%;
    border-radius: 10px;
    display: flex;
    /* justify-content: space-around; */
    flex-direction: column;
    gap: 10px;
    min-width: 23%;
  }
  ul {
    list-style-type: none;
  }
</style>
