<script>
  import Title from "./Title.svelte";
  import SubTasks from "./SubTasks.svelte";
  import Add from "./Add.svelte";
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { isVisible } from "../Stores/store";
  const dispatch = createEventDispatcher();
  let title = "";
  let subtasks;
  let userId = localStorage.getItem("userId");
  function handleAdd() {
    let newTask = {
      userId,
      title,
      subtasks,
    };
    dispatch("newCard", newTask);
  }
  function handleClose() {
    $isVisible = false;
  }
</script>

<section
  class="newcard"
  transition:slide={{
    delay: 250,
    duration: 300,
    easing: quintOut,
    axis: "y",
  }}
>
  <div class="outer">
    <button on:click={handleClose}
      ><img src="./Close.svg" alt="closebutton" /></button
    >
    <div class="inner">
      <p>Add new task</p>
      <Title bind:title />
      <SubTasks bind:subtasks />
      <Add on:add={handleAdd} />
    </div>
  </div>
</section>

<style>
  .outer {
    background-color: blanchedalmond;
    padding: 30px;
    border-radius: 20px;
    position: relative;
  }
  section {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.65);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inner {
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }
  p {
    text-align: center;
  }
  button {
    position: absolute;
    width: 40px;
    right: 4%;
    top: 5%;
  }
</style>
