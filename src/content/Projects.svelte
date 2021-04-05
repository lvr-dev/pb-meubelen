<script>
import { onMount } from "svelte";
import ProjectModal from "../ui/ProjectModal.svelte";
import { toggleModalValue } from "../store";
import { filterBadges, getTags } from "../utils";

    let selectedBadge = 'all';
    let badgeTags = [];
    let allProjects = [];
    let showModal = false;
    let selectedProject;
   

    onMount(() => {
        allProjects = [...currentProjects];
        badgeTags = getTags(allProjects);
        badgeTags = [...badgeTags, "all"];
    });

    function filterBadge(event) {
        selectedBadge = event.target.id;
        if (selectedBadge === "all") {
            allProjects = [...currentProjects];
        } else {
            allProjects = filterBadges(selectedBadge, currentProjects);
        }
    }

    function toggleModal(project) {
        showModal = !showModal;
        toggleModalValue.set(showModal);
        selectedProject = project;
    }

    const unsubscribe = toggleModalValue.subscribe(value => {
	    showModal = value;
    });

    const currentProjects = [
        {
            "id": "kastje",
            "title": "Het kastje",
            "tags": ["kastje", "tweede leerjaar"],
            "badgeImage": {
                "src": "assets/kastje_1.jpeg",
                "alt": "kastje",
            },
            "text": "In het eerste deel van mijn tweede leerjaar heb ik een kastje ontworpen en uitgevoerd. TODO: tekst aanvullen.",
            "selected": true,
            "additionalImages": [
                {
                    "src": "assets/la_in_lijmklemmen.jpeg",
                    "alt": "la in lijmklemmen"
                },
                {
                    "src": "assets/la_zijde.jpeg",
                    "alt": "zijkant lade"
                },
                {
                    "src": "assets/la_zijdes.jpeg",
                    "alt": "zijkanten lade"
                }
            ]
        },
        {
            "id": "halfhout_overkeping",
            "title": "Halfhout overkeping",
            "tags": ["tweede leerjaar", "houtverbindingen"],
            "badgeImage": {
                "src": "assets/halfhout_overkeping_2.jpeg",
                "alt": "halfhout overkeping",
            },
            "text": "De halfhout overkeping is een houtverbinding gebruikt voor een eenvoudig raamwerk. TODO: aanvullen ",
            "selected": true
        },
        {
            "id": "slisverbinding",
            "title": "Slisverbinding",
            "tags": ["tweede leerjaar", "houtverbindingen"],
            "badgeImage": {
                "src": "assets/slisverbinding_1.jpeg",
                "alt": "dikkie de eerste",
            },
            "text": "De slisverbinding is een houtverbinding waarbij drie of meer vlakken verlijmd moeten worden. TOD: aanvullen",
            "selected": true
        }
    ]

</script>
{#if showModal}
    <ProjectModal {...selectedProject} />
{/if} 

<div class="content-wrapper">
    <h2 class="page-title mobile">Projecten</h2>
    <div class="tag-filter"> 
        {#each badgeTags as badge}
            <span 
            class="badge-tag" 
            class:badge-active={selectedBadge === badge}
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
                    src="{project.badgeImage.src}" 
                    alt="{project.badgeImage.alt}"
                    class="main-image"
                />
            </div>
            <div 
                class="badge-content"
                on:click={() => toggleModal(project)}
            >
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
    .badge-active {
        color: #f1fb12;
    }
    .badge {
        width: 240px;
        height: 340px;
        border-bottom: solid 1px #e41586;
        background-color: rgb(31, 31, 31);
        margin: 1rem;
    }
    .badge-image {
        width: 100%;
        height: 200px;
    }
    .badge-content {
        overflow: hidden;
        -webkit-line-clamp: 4;
        line-clamp: 4;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        display: -webkit-box;
        padding: 1rem 0.3rem;
        cursor: pointer;
    }
    .outfiltered {
        display: none;
    }

</style>