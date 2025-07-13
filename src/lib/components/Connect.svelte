<script>
  import { socials } from '../api/socials/socials';
  import SocialButton from './buttons/SocialButton.svelte';
</script>

<section id="contact" class="py-16 bg-[#2DD4BF] border-t-4 border-black">
  <div class="container">
    <h2 class="text-5xl font-orbitron font-black text-center mb-8">Connect With Me</h2>
    <div class="flex flex-col items-center gap-6">
      <div class="grid grid-cols-2 gap-6 w-full max-w-xl">
        {#each socials as social}
          <SocialButton {social} />
        {/each}
      </div>
    </div>
  </div>
</section>
