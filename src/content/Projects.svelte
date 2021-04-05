<script>
import { onMount } from "svelte";
import { filterBadges, getTags } from "../utils";

    let selectedBadge = 'all';
    let badgeTags = [];
    let allProjects = [];

    onMount(() => {
        allProjects = [...currentProjects];
        badgeTags = getTags(allProjects);
    });

    function filterBadge(event) {
        selectedBadge = event.target.id;
        allProjects = filterBadges(selectedBadge, currentProjects);
    }

    const currentProjects = [
        {
            "id": "kastje",
            "tags": ["kastje", "tweede leerjaar"],
            "image": {
                "src": "assets/kastje_1.jpeg",
                "alt": "kastje",
            },
            "text": "In het eerste deel van mijn tweede leerjaar heb ik een kastje ontworpen en uitgevoerd. TODO: tekst aanvullen.",
            "selected": true
        },
        {
            "id": "halfhout_overkeping",
            "tags": ["tweede leerjaar", "houtverbindingen"],
            "image": {
                "src": "assets/halfhout_overkeping_2.jpeg",
                "alt": "halfhout overkeping",
            },
            "text": "De halfhout overkeping is een houtverbinding gebruikt voor een eenvoudig raamwerk. TODO: aanvullen ",
            "selected": true
        },
        {
            "id": "slisverbinding",
            "tags": ["tweede leerjaar", "houtverbindingen"],
            "image": {
                "src": "assets/slisverbinding_1.jpeg",
                "alt": "dikkie de eerste",
            },
            "text": "De slisverbinding is een houtverbinding waarbij drie of meer vlakken verlijmd moeten worden. TOD: aanvullen",
            "selected": true
        }
    ]

</script>
<div class="content-wrapper">
    <h2 class="page-title mobile">Projecten</h2>
    <div class="tag-filter"> 
        {#each badgeTags as badge}
            <span 
            class="badge-tag" 
            on:click={filterBadge} 
            id={badge}
            >
            {badge}
        </span>
        {/each}
    </div>
    <div class="content-flex-wrapper">
        {#each allProjects as project}
        <div    
            class="badge" 
            data-tag="{project.tags}"
            class:outfiltered="{!project.selected}"
        >
            <div class="badge-image">
                <img 
                    src="{project.image.src}" 
                    alt="{project.image.alt}"
                    class="main-image"
                />
            </div>
            <div class="badge-content">
                {project.text}
            </div>  
        </div>
        {/each}
    </div>
</div>
<style>
    .tag-filter {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 90%;
        margin-bottom: 2rem;
        padding: 1rem;
    }
    .badge-tag {
        margin: 0 1rem;
        font-weight: 700;
        cursor: pointer;
    }
    .badge-tag::before {
        content: '#';
    }
    .outfiltered {
        display: none;
    }

</style>