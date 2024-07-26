<script>
  import { createEventDispatcher } from "svelte";

  export let title_subtask = "";
  export let description = "";

  const dispatch = createEventDispatcher();

  $: dispatch("update", { title_subtask, description });

  function updateSubtask() {
    dispatch("update", { title_subtask, description });
  }
</script>

<div>
  <input
    type="text"
    id="subtasktitle"
    bind:value={title_subtask}
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
