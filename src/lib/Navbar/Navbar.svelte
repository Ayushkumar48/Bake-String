<script>
  import {
    showContent,
    showHome,
    showLogin,
    showSignUp,
    showLogout,
  } from "../Stores/store";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
  function handleLogin() {
    $showLogin = true;
    $showSignUp = false;
    $showHome = false;
    $showContent = false;
  }
  function handleSignUp() {
    $showSignUp = true;
    $showLogin = false;
    $showHome = false;
    $showContent = false;
  }
  function handleNavbrand() {
    $showHome = true;
    $showSignUp = false;
    $showLogin = false;
    $showContent = false;
  }
  function handleLogout() {
    localStorage.removeItem("userId");
    $showHome = true;
    $showSignUp = false;
    $showLogin = false;
    $showContent = false;
    $showLogout = false;
  }
</script>

<div class="relative px-8" color="blue">
  <Navbar
    class="px-2 sm:px-20 py-1 fixed w-full z-20 top-0 start-0 border-b"
    fluid={true}
    color="orange"
  >
    <NavBrand href="/" on:click={handleNavbrand}>
      <span
        class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >BakeString</span
      >
    </NavBrand>
    <NavHamburger />
    <NavUl>
      {#if $showLogout}
        <NavLi class="navli" on:click={handleLogout}>Logout</NavLi>
      {:else}
        <NavLi class="navli" on:click={handleLogin}>Login</NavLi>
        <NavLi class="navli" on:click={handleSignUp}>SignUp</NavLi>
      {/if}
    </NavUl>
  </Navbar>
</div>

<style>
  :global(.navli:hover) {
    cursor: pointer;
  }
</style>
