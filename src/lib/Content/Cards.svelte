<script>
  import axios from "axios";
  import Card from "./Card.svelte";
  import { onDestroy, onMount } from "svelte";
  import showAddWindow from "../Stores/store";
  import { fade, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import AddNew from "../AddNew/AddNew.svelte";

  let isVisible;
  export let cardData = [];

  const baseURL = "https://bakestring.tech";

  // Fetch todos from MongoDB backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${baseURL}/todos`);
      cardData = response.data;
    } catch (err) {
      console.log("Failed to fetch data: ", err);
    }
  };

  // Add new todo
  const addTodo = async (newCard) => {
    try {
      const response = await axios.post(`${baseURL}/todos`, newCard);
      cardData = [...cardData, response.data];
    } catch (err) {
      console.log("Failed to add data: ", err);
    }
  };

  // Delete todo by id
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${baseURL}/todos/${id}`);
      cardData = cardData.filter((card) => card._id !== id);
    } catch (err) {
      console.log("Could not delete data: ", err);
    }
  };

  const unsubscribe = showAddWindow.subscribe((value) => {
    isVisible = value;
  });

  onDestroy(() => {
    unsubscribe();
  });

  function handleCard(event) {
    const newCard = event.detail;
    addTodo(newCard);
  }

  function refreshData(cardId) {
    deleteTodo(cardId);
  }

  // Fetch initial data on component mount
  onMount(() => {
    fetchTodos();
  });
</script>

<section>
  {#each cardData as card (card._id)}
    <div in:fade out:scale animate:flip={{ duration: 500 }} class="cards">
      <Card {card} onDelete={() => refreshData(card._id)} />
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
