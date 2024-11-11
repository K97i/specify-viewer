<script lang="ts">
    import { profileStore } from '../shared/profile-store';

    let json;

    async function getJSON(profile) {
        let json = await getJSON(profile);
    }

    function setJSON(profile) {
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.readAsText(profile);
        });
        
    }

    profileStore.subscribe((value) => {
        getJSON(value);
    });

</script>

<div class="bg-surface-700 h-max">
    <main class="p-2 container flex-1">
        <p> {json} </p>
    </main>
</div>