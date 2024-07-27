<script>
  import Cards from "./Cards.svelte";
  import AddButton from "../AddButton/AddButton.svelte";
  export let cardData;
</script>

<section>
  <div class="button">
    <AddButton />
  </div>
  <Cards {cardData} />
</section>

<style>
  .button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 5%;
  }
  section {
    margin: 12vh 3vw;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
</style>
