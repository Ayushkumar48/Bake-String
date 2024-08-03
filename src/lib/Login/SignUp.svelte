<script>
  import { slide } from "svelte/transition";
  import axios from "axios";
  import {
    showContent,
    showHome,
    showLogin,
    showSignUp,
    showLogout,
  } from "../Stores/store";

  let firstname, lastname, username, email, password1, password2, password;
  $: name = firstname + " " + lastname;
  $: password = password1;
  $: userData = {
    name,
    username,
    email,
    password,
  };

  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const handleCheck = async () => {
    try {
      if (!username || username.length < 4) {
        console.log("please type 4 or more words to check");
        return;
      }
      const response = await axios.post(`${baseURL}/users`, { username });
      if (response.data.exists) {
        console.log("username already exists, use another");
      } else {
        console.log("user doesnot exists, you can procced with this username");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async () => {
    try {
      const checkEmail = await axios.post(`${baseURL}/email`, { email });
      if (checkEmail.data.exists) {
        console.log("email already exists, use another");
        return;
      }
      if (password1 !== password2) {
        console.log("Password did not matched, re-enter passwords.");
        return;
      }
      const response = await axios.post(`${baseURL}/saveUser`, userData);
      console.log(response.data.message);
      localStorage.setItem("userId", response.data.userId);
      $showSignUp = false;
      $showLogin = false;
      $showHome = false;
      $showContent = true;
      $showLogout = true;
    } catch (err) {
      console.log(err);
    }
  };
</script>

<div class="outer" transition:slide>
  <div class="inner">
    <h1>Create an account</h1>
    <div class="namediv">
      <input
        type="text"
        placeholder="firstname"
        bind:value={firstname}
        required
      />
      <input
        type="text"
        placeholder="lastname"
        bind:value={lastname}
        required
      />
    </div>
    <div class="username">
      <input
        type="text"
        placeholder="enter your username"
        bind:value={username}
        required
      />
      <button class="check" on:click={handleCheck}>check</button>
    </div>
    <input
      type="email"
      placeholder="enter your email"
      bind:value={email}
      required
    />
    <input
      type="password"
      placeholder="enter your password"
      bind:value={password1}
      required
    />
    <input
      type="password"
      placeholder="re-enter your password"
      bind:value={password2}
      required
    />
    <button class="signup" on:click={handleSubmit}>SignUp</button>
  </div>
</div>

<style>
  .outer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 30vw;
  }
  .namediv {
    display: flex;
    flex-direction: row;
    gap: 2vw;
    width: 100%;
  }
  input {
    border-radius: 8px;
    width: 100%;
  }
  h1 {
    font-size: 25px;
  }
  .username {
    display: flex;
    width: 100%;
    gap: 1vw;
  }
  .signup {
    background-color: rgba(42, 42, 215, 0.937);
    color: aliceblue;
    padding: 5px 10px;
    width: 100%;
    border-radius: 5px;
  }
  .check {
    background-color: rgba(42, 42, 215, 0.937);
    color: aliceblue;
    padding: 5px 10px;
    border-radius: 10px;
  }
  button:hover {
    background-color: rgb(0, 0, 253);
    transition: all 0.3s ease-in-out;
  }
</style>
