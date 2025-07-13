<script lang="ts">
  import { onMount } from 'svelte';
  import { navLinks } from '$lib/components/navigation';
  
  let navbar: HTMLElement;
  let scrollY = 0;
  let prevScrollpos = scrollY;
  let prevScrollpos2 = scrollY;

  onMount(() => {
    autoHideMenu();
    window.onscroll = async () => {
      autoHideMenu();
      autoHideNavbar();
    };
  });

  function autoHideNavbar() {
    let currentScrollPos = scrollY;
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = '-100px';
    }
    prevScrollpos = currentScrollPos;
  }

  function autoHideMenu() {
    let currentScrollPos = scrollY;
    if (currentScrollPos > prevScrollpos2 + 250 || currentScrollPos < prevScrollpos2 - 250) {
      prevScrollpos2 = currentScrollPos;
    }
  }
  </script>

  <svelte:window bind:scrollY />

  <section bind:this={navbar} class="fixed top-0 left-0 w-full z-40 duration-300">
    <div class="container">
      <nav class="flex items-center justify-between px-10 py-10 w-full bg-transparent">
      <div class="flex items-center">
        <h1 class="text-3xl text-[#FF1211] tracking-widest font-['grafmassa']">JLTDIGITAL</h1>
      </div>
      <div class="flex gap-6">
      {#each navLinks as link}
            <a class="px-6 py-2 border-2 w-40 text-center border-black rounded bg-white transition" href="#{link.link}" style="box-shadow: 6px 6px 0 0 #{link.color};"><span class="font-['orbitron'] font-black text-black">{link.text}</span></a>
          {/each}
      </div>
    </nav>
  </div>
</section>

