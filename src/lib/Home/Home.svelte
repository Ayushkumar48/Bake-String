<script>
  import { onMount } from "svelte";
  import {
    showContent,
    showHome,
    showLogin,
    showLogout,
    showSignUp,
  } from "../Stores/store";
  onMount(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      showContent.set(true);
      showSignUp.set(false);
      showLogin.set(false);
      showHome.set(false);
      showLogout.set(true);
      if (window.location.pathname !== "/todos") {
        window.location.replace("/todos");
      }
    } else {
      showContent.set(false);
      showSignUp.set(true);
      showLogin.set(true);
      showHome.set(true);
      showLogout.set(false);
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
