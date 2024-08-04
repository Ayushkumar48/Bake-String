<script>
  import Cards from "./Cards.svelte";
  import AddButton from "../AddButton/AddButton.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  let cardData = [];
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const fetchTodos = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.get(`${baseURL}/todos`, {
        params: { userId }, // Pass userId as a query parameter
      });
      cardData = response.data;
    } catch (err) {
      console.log(err);
    }
  };

  onMount(() => {
    fetchTodos();
  });

  export { fetchTodos };
</script>

<section>
  <div class="button">
    <AddButton />
  </div>
  <Cards {cardData} />
</section>

<style>
  .button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 5%;
  }
  section {
    margin: 12vh 3vw;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
</style>
