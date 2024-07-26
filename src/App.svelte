<script>
  import Navbar from "./lib/Navbar/Navbar.svelte";
  import Content from "./lib/Content/Content.svelte";
  import AddButton from "./lib/AddButton/AddButton.svelte";
</script>

<div>
  <Navbar />
  <div class="button">
    <AddButton />
  </div>
  <Content />
</div>

<style>
  .button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 5%;
  }
</style>
