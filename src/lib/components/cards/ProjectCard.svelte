<script lang="ts">
  import type { Project } from '$lib/api/projects/types';
  export let project: Project;
</script>

<div class="bg-[#FF1211] border-4 border-black rounded-lg shadow-xl w-2/3 h-170 flex flex-col items-center justify-center p-6" style="box-shadow: 6px 6px 0 0 #000000;">
  <div class="bg-white w-full h-32 flex items-center mb-4">
    <img src="{project.image}" alt="{project.title}" class="w-full h-auto object-cover rounded" />
  </div>
  <div class=" w-full h-32 flex mt-16 justify-center flex-col font-orbitron font-black text-sm text-black">
    <span class="text-xl">{project.title}</span><br>
    <span class="text-sm">{project.subdescription}</span>  
  </div>
    <a href={project.href} target="_blank" class="btn-shadow-drop w-full mb-5 px-4 py-2 mt-10 border-2 border-[#21D2ED] rounded bg-white text-black font-orbitron font-black transition" style="box-shadow: 6px 6px 0 0 #21D2ED;">Visit</a>
    <a href={project.github} target="_blank" class="btn-shadow-drop w-full px-4 py-2 border-2 border-[#21D2ED] rounded bg-white text-black font-orbitron font-black transition" style="box-shadow: 6px 6px 0 0 #2DD4BF;">Github</a>
</div>