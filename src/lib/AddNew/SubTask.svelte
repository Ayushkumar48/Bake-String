<script>
  import { createEventDispatcher } from "svelte";

  export let title = "";
  export let description = "";

  const dispatch = createEventDispatcher();

  $: dispatch("update", { title, description });

  function updateSubtask() {
    dispatch("update", { title, description });
  }
</script>

<div>
  <input
    type="text"
    id="subtasktitle"
    bind:value={title}
    placeholder="subtask title"
    on:input={updateSubtask}
  />
  <input
    type="text"
    name="description"
    id="description"
    placeholder="subtask content"
    bind:value={description}
    on:input={updateSubtask}
  />
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    gap: 2vw;
  }
  #subtasktitle {
    border-radius: 10px;
    width: 30%;
  }
  #description {
    border-radius: 10px;
    width: 69%;
  }
</style>
