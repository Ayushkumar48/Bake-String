<script>
  import axios from "axios";
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import {
    showContent,
    showHome,
    showLogin,
    showSignUp,
    showLogout,
  } from "../Stores/store";
  const dispatch = createEventDispatcher();
  let username, password;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${baseURL}/userlogin`, {
        username,
        password,
      });
      if (response.status === 400) {
        console.log("User does not exists.");
      } else if (response.status === 401) {
        console.log("Password is incorrect, please enter a new password!!!");
      } else if (response.status === 200) {
        localStorage.setItem("userId", response.data.userId);
        console.log("User logged in successfully");
        $showSignUp = false;
        $showLogin = false;
        $showHome = false;
        $showContent = true;
        $showLogout = true;
        dispatch("loginSuccess");
      }
    } catch (err) {
      console.log(err);
    }
  };
  function handleEnterKey(e) {
    if (e.keycode === 13) {
      handleLogin();
    }
  }
</script>

<div transition:slide>
  <h1>Login to your account</h1>
  <input type="text" placeholder="enter your username" bind:value={username} />
  <input
    type="password"
    placeholder="enter your password"
    bind:value={password}
  />
  <button on:click={handleLogin} on:keydown={handleEnterKey}>Login</button>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    height: 100vh;
    width: 100vw;
  }
  input {
    width: 30vw;
    border-radius: 8px;
  }
  h1 {
    font-size: 25px;
  }
  button {
    background-color: rgba(42, 42, 215, 0.937);
    color: aliceblue;
    padding: 5px 10px;
    border-radius: 5px;
    width: 30vw;
  }
  button:hover {
    background-color: rgb(0, 0, 253);
    transition: all 0.3s ease-in-out;
  }
</style>
