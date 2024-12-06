<script>
    import { AppBar } from '@skeletonlabs/skeleton';

    const title = "Specify Viewer";
</script>

<AppBar class="sticky top-0" gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
    <svelte:fragment slot="lead">
        <img class="size-1/12" src="specify-glass.png" alt="Home"/>
    </svelte:fragment>
    {title}
    <svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>

<div class="max-h-svh p-6">
    <slot>
    </slot>
</div>