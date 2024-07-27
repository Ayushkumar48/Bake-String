<script>
  import Navbar from "./lib/Navbar/Navbar.svelte";
  import Content from "./lib/Content/Content.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  let cardData = [];
  // fetch todos
  const fetchTodos = async () => {
    try {
      const response = await axios.get("https://bakestring.tech/todos");
      cardData = response.data;
    } catch (err) {
      console.log("Error fetching todos: ", err);
    }
  };
  onMount(() => {
    fetchTodos();
  });
</script>

<div>
  <Navbar />
  <Content {cardData} />
</div>

<style>
</style>
