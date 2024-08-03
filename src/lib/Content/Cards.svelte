<script>
  import axios from "axios";
  import Card from "./Card.svelte";
  import { fade, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import AddNew from "../AddNew/AddNew.svelte";
  import { isVisible } from "../Stores/store";

  export let cardData = [];
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const addTodo = async (newCard) => {
    try {
      const response = await axios.post(`${baseURL}/addTodo`, newCard);
      cardData = [...cardData, response.data];
    } catch (err) {
      console.log("Failed to add data: ", err);
    }
  };

  const deleteTodo = async (_id) => {
    try {
      const response = await axios.post(`${baseURL}/deleteTodo`, { _id });
      cardData = cardData.filter((card) => card._id !== response.data._id);
    } catch (err) {
      console.log("Could not delete data: ", err);
    }
  };

  function handleCard(event) {
    const newCard = event.detail;
    addTodo(newCard);
  }

  function refreshData(cardId) {
    deleteTodo(cardId);
  }
</script>

<section>
  {#each cardData as card (card._id)}
    <div in:fade out:scale animate:flip={{ duration: 500 }} class="cards">
      <Card {card} onDelete={() => refreshData(card._id)} />
    </div>
  {/each}
  {#if $isVisible}
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
