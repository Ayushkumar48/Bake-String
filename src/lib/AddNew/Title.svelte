<script>
  export let title;
</script>

<div class="title">
  <input
    type="text"
    id="title"
    bind:value={title}
    placeholder="enter the title of task"
  />
</div>

<style>
  .title {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  input {
    border-radius: 10px;
  }
</style>
