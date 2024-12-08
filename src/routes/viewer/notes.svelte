<script lang="ts">
    import { profileData } from '../shared/profile-store';
    import { eolness } from './functions/eol';
    import { profileUptime } from './functions/uptime';
    import { avList } from './functions/av_check';

    interface Dictionary<T> {
        [key: string]: T
    }

    let eolColor: Dictionary<string> = {
        "Not EOL": "text-success-500",
        "Insider": "text-warning-500",
        "EOL": "text-red-500"
    }

    let upToDatenessColor: Dictionary<string> = {
        "Up-to-date": "text-success-500",
        "Insider": "text-warning-500",
        "Not Up-to-date": "text-warning-500",
    }

    console.log(avList)
    
</script>

<!-- Notes -->
<div class="bg-primary-500 rounded max-w-lg h-max">
    <div class="p-2 px-6 container flex-1">

        <!-- Main Header -->
        <div class="p-4">
            <h2 class="text-4xl font-bold text-neutral-50 place-self-center ">
                Notes
            </h2>
        </div>

        <!-- OS Version -->
        <div id="notes-os-version" class="text-sm">
            <p class="text-sm">
                The OS is 
                <span class={eolColor[eolness[0]]}>{eolness[0]}</span> 
                (<span class={upToDatenessColor[eolness[1]]}>build {$profileData["BasicInfo"]["Version"]}, 
                    {$profileData["BasicInfo"]["FriendlyVersion"]}</span>)
            </p>
        </div>

        <!-- Uptime -->
        <div id="notes-uptime" class="text-sm">
            <p class="text-sm">
                The current uptime is <span class={profileUptime[1]}>{profileUptime[0]}</span>.
            </p>
        </div>

        <!-- AVs -->
        <div id="notes-avs" class="text-sm">
            <p class="text-sm">
                {#if !avList}
                    <span class="text-red-600">No AVs Found!</span>
                {:else if avList.includes(",")}
                    The currently installed AVs are <span>{avList}</span>.
                {:else}
                    The currently installed AV is <span>{avList}</span>.
                {/if}
            </p>
        </div>

        <!-- Username Special Characters -->
        {#if $profileData["System"]["UsernameSpecialCharacters"]}
            <div id="notes-special-characters" class="text-sm">
                <p class="text-sm">
                    Username found with <span class="text-warning-600">Special Characters</span>
                </p>
            </div>
        {/if}

    </div>
</div>

