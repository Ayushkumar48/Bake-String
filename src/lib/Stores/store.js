import { writable } from "svelte/store";

export const loggedIn = writable(false);
export const showLogin = writable(false);
export const showSignUp = writable(false);
export const showHome = writable(true);
export const showContent = writable(false);
export const showLogout = writable(false);
export const isVisible = writable(false);
