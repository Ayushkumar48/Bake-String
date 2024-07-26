<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
</script>

<div class="relative px-8" color="blue">
  <Navbar
    class="px-2 sm:px-20 py-1 fixed w-full z-20 top-0 start-0 border-b"
    fluid={true}
    color="orange"
  >
    <NavBrand href="/">
      <span
        class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >BakeString</span
      >
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/" active={true}>Login</NavLi>
      <NavLi href="/about">SignUp</NavLi>
    </NavUl>
  </Navbar>
</div>
