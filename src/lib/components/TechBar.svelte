<script lang="ts">
  import { Marquee } from "@selemondev/svelte-marquee";
  import "../../marquee.css";
  import Icon from '@iconify/svelte';

  const techs: Array<{ icon: string; color: string }> = [
    { icon: 'logos:html-5', color: '#FF1211' },
    { icon: 'logos:css-3', color: '#21D2ED' },
    { icon: 'logos:javascript', color: '#FFD600' },
    { icon: 'logos:php', color: '#8993be' },
    { icon: 'logos:nodejs', color: '#2DD4BF' },
    { icon: 'logos:react', color: '#21D2ED' },
    { icon: 'logos:vue', color: '#2DD4BF' },
    { icon: 'logos:git-icon', color: '#FF1211' },
    { icon: 'logos:npm-icon', color: '#EDE621' },
    { icon: 'logos:svelte-icon', color: '#FF3E00' },
    { icon: 'logos:shopify', color: '#2DD4BF' },
    { icon: 'logos:mysql', color: '#00758F' },
    { icon: 'logos:express', color: '#000000' },
    { icon: 'logos:wordpress-icon', color: '#21759B' },
    { icon: 'logos:typescript-icon', color: '#21759B' }
  ];
</script>

<div class="w-full bg-[#EDE621] py-6 overflow-hidden border-b-4 border-black">
  <div class="relative w-full h-[72px] overflow-hidden">
    <Marquee fade={true}>
      {#each techs.concat(techs) as tech}
        <span class="inline-block">
          <Icon icon={tech.icon} width="60" height="60" style={`color: ${tech.color}`} />
        </span>
      {/each}
    </Marquee> 
  </div>
</div>
