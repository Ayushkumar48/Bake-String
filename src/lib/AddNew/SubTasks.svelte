<script>
  import SubTask from "./SubTask.svelte";
  import { scale } from "svelte/transition";
  export let subtasks = [
    {
      title_subtask: "",
      description: "",
    },
  ];

  function handleSubtask() {
    let newSubTask = {
      title_subtask: "",
      description: "",
    };
    subtasks = [...subtasks, newSubTask];
  }

  function handleUpdate(event, index) {
    subtasks[index] = event.detail;
    subtasks = [...subtasks];
  }
</script>

<div class="outer">
  {#each subtasks as subtask, index}
    <div class="inner" transition:scale>
      <SubTask
        title_subtask={subtask.title_subtask}
        description={subtask.description}
        on:update={(event) => handleUpdate(event, index)}
      />
    </div>
  {/each}
  <button on:click={handleSubtask}><img src="./Add.svg" alt="add" /></button>
</div>

<style>
  .outer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: height 0.5s ease-in-out;
  }
  button {
    width: 40px;
    opacity: 0.5;
    transition: opacity 0.15s ease-in-out;
  }
  button:hover {
    opacity: 1;
  }
</style>
