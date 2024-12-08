<script lang="ts">
  import { FileDropzone, getToastStore } from '@skeletonlabs/skeleton';
  import type { ToastSettings } from '@skeletonlabs/skeleton';
  import { goto } from '$app/navigation';
  import { profileData } from './shared/profile-store';

  const toastStore = getToastStore();
  let profile: FileList;
  
  async function dropHandler() {

    let jsonData = await JSON.parse(await profile[0].text());
    profileData.set(jsonData);

    // Clear filelist
    const dropzone = document.getElementById('dropzone') as HTMLInputElement;
    if (dropzone) {
      dropzone.value = "";
    }

    // Toast
    const t: ToastSettings = {
      message: "Loaded profile!",
      hideDismiss: true,
      timeout: 2000,
      background: 'bg-success-900',
    };
    toastStore.trigger(t);
    
    goto('/viewer');
  };
</script>

<div class="grid grid-cols-1 md:grid-cols-[auto_1fr] h-full">

  <main class="container flex-1">
    <div class="flex-1 place-items-center">
      
      <img class="w-6/12" src="sfy.png" alt="Specify Logo"/>
      
      <FileDropzone id="dropzone" accept="application/json" class="w-6/12" name="files" bind:files={profile} on:change={ dropHandler }>
        <svelte:fragment slot="lead">(icon)</svelte:fragment>
        <svelte:fragment slot="message">(message)</svelte:fragment>
        <svelte:fragment slot="meta">(meta)</svelte:fragment>
      </FileDropzone>

    </div>
  </main>
</div>

<style>
  
</style>