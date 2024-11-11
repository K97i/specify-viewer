<script lang="ts">
  import { FileDropzone, getToastStore } from '@skeletonlabs/skeleton';
  import type { ToastSettings } from '@skeletonlabs/skeleton';
  import { goto } from '$app/navigation';
  import { profileStore } from './shared/profile-store';

  const toastStore = getToastStore();
  let profile: FileList;
  
  async function dropHandler() {
    const t: ToastSettings = {
      message: "Loaded " + profile[0].name,
      hideDismiss: true,
      timeout: 2000,
      background: 'bg-primary-500',
    };
    toastStore.trigger(t);
    
    profileStore.set(profile[0]);
    goto('/viewer');
  };
</script>

<div class="grid grid-cols-1 md:grid-cols-[auto_1fr] h-full">

  <main class="container flex-1">
    <div class="flex-1 place-items-center">
      
      <img class="w-6/12" src="sfy.png" alt="Specify Logo"/>
      
      <FileDropzone accept="application/json" class="w-6/12" name="files" bind:files={profile} on:change={ dropHandler }>
        <svelte:fragment slot="lead">(icon)</svelte:fragment>
        <svelte:fragment slot="message">(message)</svelte:fragment>
        <svelte:fragment slot="meta">(meta)</svelte:fragment>
      </FileDropzone>

    </div>
  </main>
</div>

<style>

</style>
