<script>
  import Card from "./Card.svelte";
  import { onDestroy } from "svelte";
  import showAddWindow from "../Stores/store";
  import { fade, slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  import AddNew from "../AddNew/AddNew.svelte";
  let isVisible;

  const unsubscribe = showAddWindow.subscribe((value) => {
    isVisible = value;
  });
  onDestroy(() => {
    unsubscribe();
  });
  let cardData = [
    {
      id: 202223,
      title: "Grocery List",
      subtasks: [
        {
          title_subtask: "Milk",
          description: "buy from xyx store",
        },
        {
          title: "Ghee",
          description: "buy from xyx store",
        },
        {
          title: "Milk",
          description: "buy from xyx store",
        },
      ],
    },
  ];
  function handleCard(event) {
    cardData = [...cardData, event.detail];
  }
  function refreshData(cardId) {
    cardData = cardData.filter((card) => card.id !== cardId);
  }
</script>

<section>
  {#each cardData as card (card.id)}
    <div transition:fade class="cards">
      <Card {card} onDelete={() => refreshData(card.id)} />
    </div>
  {/each}
  {#if isVisible}
    <div class="addcard">
      <AddNew on:newCard={handleCard} />
    </div>
  {/if}
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2vw;
    justify-content: baseline;
  }
  .cards {
    position: relative;
    background-color: rgb(105, 192, 195);
    padding: 1% 1%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 23%;
  }
</style>
