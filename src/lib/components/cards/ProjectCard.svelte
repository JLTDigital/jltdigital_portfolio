<script lang="ts">
  import type { Project } from '$lib/api/projects/types';
  export let project: Project;
</script>

<div class="bg-[#FF1211] border-4 border-black rounded-lg shadow-xl w-6/7 lg:w-10/12 sm:w-11/12 lg:h-190 sm:h-150 h-140 flex flex-col items-center justify-center p-6" style="box-shadow: 6px 6px 0 0 #000000;" itemscope itemtype="https://schema.org/CreativeWork">
  <div class="bg-white w-full h-30 flex items-center mb-4 lg:mt-12 mt-8">
    <img src={project.image} alt={project.title} class="w-full h-auto object-cover rounded" itemprop="image" />
  </div>
  <div class="w-full h-32 flex lg:mt-24 sm:mt-11 mt-14 justify-center flex-col font-orbitron font-black text-sm text-black">
    <span class="text-xl" itemprop="name">{project.title}</span><br>
    <span class="text-sm" itemprop="description">{project.subdescription}</span>  
  </div>
    <a href={project.href} target="_blank" class="btn-shadow-drop w-full mb-5 px-4 py-2 mt-10 border-2 border-[#21D2ED] rounded bg-white text-black font-orbitron font-black transition" style="box-shadow: 6px 6px 0 0 #21D2ED;" itemprop="url">Visit</a>
    <a href={project.github} target="_blank" class="btn-shadow-drop w-full px-4 py-2 border-2 border-[#21D2ED] rounded bg-white text-black font-orbitron font-black transition" style="box-shadow: 6px 6px 0 0 #2DD4BF;" itemprop="codeRepository">Github</a>
</div>