<script>
  import { isVisible } from "../Stores/store";

  function handleClick() {
    $isVisible = true;
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
  }
</style>
