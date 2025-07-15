<script lang="ts">
  // No props needed for now
</script>

<section class="relative w-full sm:h-[820px] h-[720px] flex items-center justify-center px-4 sm:px-8 lg:px-24 py-6 sm:py-12 bg-white overflow-hidden border-b-4 border-[#FF1211]" style="background-image: url('/portfolio_bg.png'); background-size: cover; background-repeat: repeat;">
  <div class="flex flex-col lg:grid lg:grid-cols-2 justify-start gap-6 sm:gap-12 sm:mt-20 lg:mt-0 w-full max-w-6xl items-center">
    <!-- Left column: text and button -->
    <div class="flex flex-col gap-4 sm:gap-6 z-10 h-full lg:justify-center w-full">
      <div class="bg-white p-3 sm:p-4 lg:p-8 rounded flex flex-col shadow-xl sm:w-3/4 lg:w-100 rotate-355">
        <span class="font-['orbitron'] font-black text-black mb-2 text-xl sm:text-3xl lg:text-5xl">I'm Jonny,<br>Full Stack Developer</span>
      </div>
      <button class="btn-shadow-drop mt-4 px-3 py-3 sm:px-6 sm:py-4 w-2/3 md:w-1/3 border-2 border-[#000000] rounded bg-white transition text-base sm:text-lg lg:text-xl" style="box-shadow: 6px 6px 0 0 #E879F9;"><span class="font-['orbitron'] font-black text-black">
        <a class="hero-contact" href="#contact">Contact Me</a></span></button>
    </div>
    <!-- Right column: image -->
    <div class="flex justify-center items-center h-full w-full mt-10">
      <div class="lg:w-[550px] sm:w-[450px] w-[330px] h-auto rotate-6 shadow-2xl" style="box-shadow: 8px 9px 0 0 #000000;">
        <img src="/hero_img.png" alt="Hero" class="w-full h-auto object-cover" />
      </div>
    </div>
  </div>
</section>
