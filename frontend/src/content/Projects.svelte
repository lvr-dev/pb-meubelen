<script>
import { onMount, onDestroy } from "svelte";
import ProjectModal from "../ui/ProjectModal.svelte";
import Badge from "../ui/Badge.svelte";
import { showModal } from "../stores/ui-store";
import { filterBadges, getTags } from "../utils";

    let selectedBadge = 'all';
    let badgeTags = [];
    let allProjects = [];
    let modalIsShown = false;
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

    function toggleModal(event) {
        if (event.detail && event.detail.item) {
            const project = event.detail.item;
            modalIsShown = !modalIsShown;
            showModal.set(modalIsShown);
            selectedProject = project;
        }
    }

    const unsubscribe = showModal.subscribe(value => {
	    modalIsShown = value;
    });

    onDestroy(unsubscribe);

    const currentProjects = [
        {
            "id": "kastje",
            "title": "Het kastje",
            "tags": ["kastje", "tweede leerjaar", "werkstuk"],
            "badgeImage": {
                "src": "assets/kastje_1.jpeg",
                "alt": "kastje",
            },
            "text": "In de laatste periode van het eerste leerjaar heb ik een kastje bedacht en uitgewerkt die ik in het tweede leerjaar gemaakt heb. Ik heb multiplex met een mahonie fineer laag gebruikt en voor de lade en herlijst heb ik notenhout gebruikt. Voor de afwerking heb ik een witte lak gebruikt zodat de kleur van het noten hout er mooier uit komt.",
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
            "tags": ["eerste leerjaar", "houtverbindingen",],
            "badgeImage": {
                "src": "assets/halfhout_overkeping_2.jpeg",
                "alt": "halfhout overkeping",
            },
            "text": "Dit is een halfhout overkeping gemaakt in mijn eerste leerjaar. Ik moest eerst een vlak aftekenen dat weg gehaald moest worden, om daarna in dat vlak tot de helft diep te zagen. Daarna heb ik het rest hout weg gestoken met een beitel. Dit heb ik ook bij het andere deel hout gedaan zodat het in elkaar past. ",
            "selected": true
        },
        {
            "id": "slisverbinding",
            "title": "Slisverbinding",
            "tags": ["eerste leerjaar", "houtverbindingen"],
            "badgeImage": {
                "src": "assets/slisverbinding_1.jpeg",
                "alt": "dikkie de eerste",
            },
            "text": "De slisverbinding is een houtverbinding waarbij drie of meer vlakken verlijmd moeten worden. In het eerste jaar leer je een slisverbinding te maken met de hand, maar later in het jaar ga je al leren hoe je het machinaal moet gaan doen. je begint altijd eerst met het gat en daarna met de pen.",
            "selected": true
        },
        {
            "id": "Hamer",
            "title": "Hamer",
            "tags": [, "werkstuk", "eerste leerjaar"],
            "badgeImage": {
                "src": "assets/hamer_001.jpg.",
                "alt": "hamer",
            },
            "text": " In mijn eerste leerjaar heb ik een Engelse Hamer gemaakt, die ik nog met grote regelmaat gebruik in mijn praktijklessen. De hamer bestaat uit een steel en hamerkop en wordt beschermd met een olie laag",
            "selected": true,
            "additionalImages": [
                {
                    "src": "assets/hamer_002.jpg.",
                    "alt": "hamer 2"
                },
                {
                    "src": "assets/hamer_003.jpg.",
                    "alt": "hamer 3"
                },
                {
                    "src": "assets/hamer_004.jpg.",
                    "alt": "hamer 4"
                }
            ]
        }
    ]

</script>
{#if modalIsShown}
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
    <div class="content-grid">
        {#each allProjects as project}
            <div class="badge-container">
                <Badge item={project} on:badgeClick={toggleModal}/>
            </div>
        {/each}
    </div>
</div>
<style>
    .content-grid {
        display: grid;

    }
    .tag-filter {
        display: flex;
        flex-wrap: wrap;
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
        color: #FFC300;
    }

    @media only screen and (min-width: 826px) {
        .content-grid {
            grid-template-columns: repeat(3, 1fr);
            column-gap: 48px;
            row-gap: 48px;
        }
    }

</style>