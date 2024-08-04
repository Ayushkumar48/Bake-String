<script>
  import Navbar from "./lib/Navbar/Navbar.svelte";
  import Content from "./lib/Content/Content.svelte";
  import Home from "./lib/Home/Home.svelte";
  import { onMount } from "svelte";
  import {
    showHome,
    showLogin,
    showSignUp,
    showContent,
    showLogout,
  } from "./lib/Stores/store";
  import Login from "./lib/Login/Login.svelte";
  import SignUp from "./lib/Login/SignUp.svelte";
  let contentComponent;

  function handleLoginSuccess() {
    if (contentComponent) {
      contentComponent.fetchTodos();
    }
  }

  onMount(() => {
    const userId = localStorage.getItem("userId");
    if (userId && window.location.pathname !== "/todos") {
      showContent.set(true);
      showSignUp.set(false);
      showLogin.set(false);
      showHome.set(false);
      showLogout.set(true);
      setTimeout(() => {
        window.location.replace("/todos");
      }, 0);
    }
  });
</script>

<div>
  <Navbar />
  {#if $showHome}
    <Home />
  {/if}
  {#if $showLogin}
    <Login on:loginSuccess={handleLoginSuccess} />
  {/if}
  {#if $showSignUp}
    <SignUp />
  {/if}
  {#if $showContent}
    <Content bind:this={contentComponent} />
  {/if}
</div>

<style>
</style>
