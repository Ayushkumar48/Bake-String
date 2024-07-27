<script>
  import Title from "./Title.svelte";
  import SubTasks from "./SubTasks.svelte";
  import Add from "./Add.svelte";
  import { createEventDispatcher } from "svelte";
  import { fade, slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  const dispatch = createEventDispatcher();
  let title = "";
  let subtasks;
  function handleAdd() {
    let newTask = {
      title,
      subtasks: subtasks,
    };
    dispatch("newCard", newTask);
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
    /* z-index: 1000; */
  }
  .inner {
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }
  p {
    text-align: center;
  }
</style>
