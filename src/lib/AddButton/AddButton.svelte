<script>
  import showAddWindow from "../Stores/store";
  function handleClick() {
    showAddWindow.update((value) => !value);
  }
</script>

<div>
  <button on:click={handleClick}>New Task +</button>
</div>

<style>
  button {
    background-color: rgba(227, 37, 37, 0.735);
    border-radius: 10px;
    padding: 8px 15px;
    transition: background-color 0.1s ease-in-out;
  }
  button:hover {
    background-color: rgb(237, 30, 30);
    transition: all 0.1s ease-in-out;
  }
  div {
    direction: rtl;
    margin-top: 10vh;
  }
</style>
