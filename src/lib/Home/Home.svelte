<script>
  import { onMount } from "svelte";
  import {
    showContent,
    showHome,
    showLogin,
    showLogout,
    showSignUp,
  } from "../Stores/store";

  function redirectToTodos() {
    if (window.location.pathname !== "/todos") {
      window.location.replace("/todos");
    }
  }

  onMount(() => {
    const userId = localStorage.getItem("userId");
    console.log(`userId: ${userId}`);
    if (userId) {
      redirectToTodos();
      sessionStorage.setItem("redirected", "true");
      showContent.set(true);
      showSignUp.set(false);
      showLogin.set(false);
      showHome.set(false);
      showLogout.set(true);
    }
  });
</script>

<div>
  <h1>This is my application's homepage</h1>
</div>

<style>
  div {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
