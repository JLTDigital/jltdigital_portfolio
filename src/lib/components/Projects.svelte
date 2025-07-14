<script lang="ts">
  import { projects } from '../api/projects/projects';
  import ProjectCard from "./cards/ProjectCard.svelte";
</script>

<section id="projects" class="py-16 bg-white">
  <h2 class="text-5xl font-orbitron font-black text-center mb-12">Projects</h2>
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center justify-items-center sm:pl-2 sm:pr-2">
      {#each projects as project}
        <ProjectCard {project} />
      {/each}
    </div>
 </div>
</section>
