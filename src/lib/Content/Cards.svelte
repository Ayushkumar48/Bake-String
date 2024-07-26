<script>
  import Card from "./Card.svelte";

  import AddNew from "../AddNew/AddNew.svelte";
  let cardData = [
    {
      id: 202223,
      title: "Grocery List",
      item: [
        {
          title: "Milk",
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
    {
      id: 202223,
      title: "Grocery List",
      item: [
        {
          title: "Milk",
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
    {
      id: 202223,
      title: "Grocery List",
      item: [
        {
          title: "Milk",
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
    {
      id: 202223,
      title: "Grocery List",
      item: [
        {
          title: "Milk",
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
    cardData = cardData.filter((card) => {
      card.id !== cardId;
    });
  }
</script>

<section>
  {#each cardData as card (card.id)}
    <Card {card} onDelete={() => refreshData(card.id)} />
  {/each}
  <AddNew on:newCard={handleCard} />
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2vw;
    justify-content: baseline;
  }
</style>
