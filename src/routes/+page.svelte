<script lang="ts">
  import { FileDropzone, getToastStore } from '@skeletonlabs/skeleton';
  import type { ToastSettings } from '@skeletonlabs/skeleton';

  const toastStore = getToastStore();
  
  async function triggerToast() {
    const t: ToastSettings = {
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    };
    toastStore.trigger(t);
  };

  let profile: FileList;
</script>

<div class="grid grid-cols-1 md:grid-cols-[auto_1fr] h-full">

  <main class="container flex-1">
    <div class="flex-1 place-items-center">
      <img class="w-6/12" src="sfy.png" alt="Specify Logo"/>
      <FileDropzone class="w-6/12" bind:files={profile} on:change={ console.log(profile) }>
        <svelte:fragment slot="lead">(icon)</svelte:fragment>
        <svelte:fragment slot="message">(message)</svelte:fragment>
        <svelte:fragment slot="meta">(meta)</svelte:fragment>
      </FileDropzone>

      <p>{profile}</p>
    </div>
  </main>
</div>

<style>

</style>
