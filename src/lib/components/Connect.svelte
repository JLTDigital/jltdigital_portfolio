<script>
  // Social links
  const socials = [
    { name: 'Github', url: '#', color: '#21D2ED' },
    { name: 'Linkedin', url: '#', color: '#E879F9' },
    { name: 'X', url: '#', color: '#FF1211' },
    { name: 'Medium', url: '#', color: '#EDE621' }
  ];
</script>

<section id="contact" class="py-16 bg-[#2DD4BF] border-t-4 border-black">
  <h2 class="text-5xl font-orbitron font-black text-center mb-8">Connect With Me</h2>
  <div class="flex flex-col items-center gap-6">
    <button class="px-6 py-2 border-2 border-black rounded bg-white text-black font-orbitron font-black mb-4" style="box-shadow: 6px 6px 0 0 #2DD4BF;">Email</button>
    <div class="grid grid-cols-2 gap-6 w-full max-w-xl">
      {#each socials as social}
        <a href={social.url} class="px-6 py-2 border-2 border-black rounded font-orbitron font-black text-black text-center bg-white" style={`box-shadow: 6px 6px 0 0 ${social.color};`}>{social.name}</a>
      {/each}
    </div>
  </div>
</section>
