<script lang="ts">
  import { onMount } from 'svelte';
  import { navLinks } from '$lib/components/navigation';
  
  let navbar: HTMLElement;

  let scrollY = 0;
  let prevScrollpos = scrollY;
  let prevScrollpos2 = scrollY;

  let isBgTransparent = true;
  let backgroundClasses = 'bg-opacity-0 border-opacity-0';

  let menuOpen = false;

  let lastScrollY = 0;

  onMount(() => {
    changeColors();
    autoHideMenu();
    window.onscroll = async () => {
      autoHideMenu();
      autoHideNavbar();
      changeColors();
      if (menuOpen && scrollY > lastScrollY) {
        menuOpen = false;
      }
      lastScrollY = scrollY;
    };
  });

  function autoHideNavbar() {
    let currentScrollPos = scrollY;
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = '-140px';
    }
    prevScrollpos = currentScrollPos;
  }

  function changeColors() {
    if (scrollY < 150) {
      isBgTransparent = true;
      backgroundClasses = 'bg-opacity-0 border-opacity-0 transition';
    } else if (scrollY < 180) {
      isBgTransparent = true;
      backgroundClasses = 'bg-opacity-20 border-opacity-0 bg-[#EDE621] transition';
    } else if (scrollY < 200) {
      isBgTransparent = true;
      backgroundClasses = 'bg-opacity-30 border-opacity-0 bg-[#EDE621] transition';
    } else if (scrollY < 250) {
      isBgTransparent = true;
      backgroundClasses = 'bg-opacity-40 border-opacity-0 bg-[#EDE621] trasnsition';
    } else {
      isBgTransparent = false;
      backgroundClasses = 'bg-opacity-100 border-opacity-100 bg-[#EDE621] border-black border-b-4 transition duration-300';
    }
  }

  function autoHideMenu() {
    let currentScrollPos = scrollY;
    if (currentScrollPos > prevScrollpos2 + 250 || currentScrollPos < prevScrollpos2 - 350) {
      prevScrollpos2 = currentScrollPos;
    }
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<svelte:window bind:scrollY />

<section bind:this={navbar} class="fixed top-0 left-0 w-full z-40 duration-300 transition {backgroundClasses} {menuOpen ? 'bg-[#EDE621] border-b-4 border-black' : ''}">
  <div class="container mx-auto px-2 sm:px-4">
    <nav class="flex items-center justify-between px-4 sm:px-10 py-4 sm:py-10 w-full">
      <div class="flex items-center">
        <h1 class="text-xl sm:text-2xl lg:text-3xl text-[#FF1211] tracking-widest font-['grafmassa']">JLTDIGITAL</h1>
      </div>
      <!-- Hamburger for mobile -->
      <div class="sm:hidden flex items-center">
        <button aria-label="Open menu" class="focus:outline-none" on:click={toggleMenu}>
          <svg width="32" height="32" fill="none" stroke="#FF1211" stroke-width="3" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      <!-- Nav links desktop/tablet -->
      <div class="hidden sm:flex gap-6">
        {#each navLinks as link}
          <a class="btn-shadow-drop px-6 py-2 border-2 lg:w-40 text-center border-black rounded bg-white transition" href={`#${link.link}`} style={`box-shadow: 6px 6px 0 0 #${link.color};`}><span class="font-['orbitron'] font-black text-black">{link.text}</span></a>
        {/each}
      </div>
    </nav>
    <!-- Mobile menu -->
    {#if menuOpen}
      <div class="sm:hidden absolute top-full left-0 w-full bg-[#EDE621] border-b-4 border-black z-50 flex flex-col items-center py-4 gap-4 shadow-xl">
        {#each navLinks as link}
          <a class="btn-shadow-drop px-6 py-2 border-2 w-5/6 text-center border-black rounded bg-white transition text-lg" href={`#${link.link}`} style={`box-shadow: 6px 6px 0 0 #${link.color};`} on:click={() => menuOpen = false}><span class="font-['orbitron'] font-black text-black">{link.text}</span></a>
        {/each}
      </div>
    {/if}
  </div>
</section>

