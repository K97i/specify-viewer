<script lang="ts">
    import { profileData } from '../shared/profile-store';
    import { eolness } from './functions/eol';

    interface Dictionary<T> {
        [key: string]: T
    }

    let eolColor: Dictionary<string> = {
        "Not EOL": "text-success-600",
        "Insider": "text-warning-600",
        "EOL": "text-red-600"
    }

    let upToDatenessColor: Dictionary<string> = {
        "Up-to-date": "text-success-600",
        "Insider": "text-warning-600",
        "Not Up-to-date": "text-warning-600",
    }
    
</script>

<!-- Notes -->
<div class="bg-gray-800 rounded max-w-md h-max">
    <div class="p-2 px-6 container flex-1">

        <!-- Main Header -->
        <div class="p-4">
            <h2 class="text-4xl font-bold text-neutral-50 place-self-center ">
                Notes
            </h2>
        </div>

        <!-- OS Version -->
        <div class="text-sm">
            <p class="text-sm">
                The OS is 
                <span class={eolColor[eolness[0]]}>{eolness[0]}</span> 
                (build number: <span class={upToDatenessColor[eolness[1]]}>{$profileData["BasicInfo"]["Version"]}, 
                    {$profileData["BasicInfo"]["FriendlyVersion"]}</span>)
            </p>
        </div>

    </div>
</div>