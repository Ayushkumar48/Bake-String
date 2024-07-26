<script>
  import { createEventDispatcher } from "svelte";
  import showAddWindow from "../Stores/store";
  const dispatch = createEventDispatcher();
  function dispatchAdd() {
    dispatch("add");
    showAddWindow.update((value) => !value);
  }
</script>

<div>
  <button on:click={dispatchAdd}>Add task</button>
</div>

<style>
  div {
    display: flex;
    justify-content: end;
  }
  button {
    background-color: rgba(0, 0, 255, 0.752);
    color: antiquewhite;
    padding: 8px 13px;
    border-radius: 7px;
  }
  button:hover {
    background-color: rgba(0, 0, 255, 0.895);
  }
</style>
