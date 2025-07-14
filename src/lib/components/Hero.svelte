<script>
  // No props needed for now
</script>

<section class="relative w-full h-[820px] flex items-center justify-center px-24 py-12 bg-white overflow-hidden border-b-4 border-[#FF1211]" style="background-image: url('/portfolio_bg.png'); background-size: cover; background-repeat: repeat;">
  <div class="lg:grid lg:grid-cols-2 flex flex-col justify-start gap-12 sm:mt-20 lg:mt-0 w-full max-w-6xl items-center">
    <!-- Left column: text and button -->
    <div class="flex flex-col gap-6 z-10 h-full lg:justify-center">
      <div class="bg-white lg:p-8 sm:p-4 rounded flex flex-col shadow-xl w-100 rotate-355">
        <span class="font-['orbitron'] font-black text-black mb-2 lg:text-5xl sm:text-3xl text-2xl">I'm Jonny,<br>Full Stack Developer</span>
      </div>
      <button class="btn-shadow-drop mt-2 px-6 py-4 lg:w-1/3 sm:w-2/3 border-2 border-[#000000] rounded bg-white transition" style="box-shadow: 6px 6px 0 0 #E879F9;"><span class="font-['orbitron'] font-black text-black">
        <a href="#contact">Contact Me</a></span></button>
    </div>
    <!-- Right column: image -->
    <div class="flex justify-center items-center h-full">
      <div class="w-[550px] h-auto rotate-6 shadow-2xl" style="box-shadow: 8px 9px 0 0 #000000;">
        <img src="/hero_img.png" alt="Hero" class="w-full h-auto object-cover" />
      </div>
    </div>
  </div>
</section>
