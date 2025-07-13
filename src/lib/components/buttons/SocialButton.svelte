<script lang="ts">
    import type { Social } from '$lib/api/socials/types';
    export let social: Social;
</script>

<a href={social.href} target="_blank" class="px-6 py-2 border-2 border-black rounded font-orbitron font-black text-black bg-white" style={`box-shadow: 6px 6px 0 0 ${social.color};`}>
  {social.name}
</a>