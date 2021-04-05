<script>
    import { createEventDispatcher } from 'svelte';
    import Icon from 'svelte-awesome';
    import { times } from 'svelte-awesome/icons';
    import { showMenu } from '../store.js';

    const dispatch = createEventDispatcher();
    let selectedMenuOption = 'aboutme';
    let showMobileMenu = false;

    function selectMenu(event) {
        selectedMenuOption = event.target.id;
        dispatch('menuOption', {
            menuOption: event.target.id
        });
        toggleSlider();
    }

    function toggleSlider() {
        showMenu.set(false);
    }

    const unsubscribe = showMenu.subscribe(value => {
	    showMobileMenu = value;
    });

</script>
<div 
    class="pb-slider"
    class:open="{showMobileMenu}"
>
    <ul class="pb-slider-container">
        <li
            id="projecten"
            class="menu-link" 
            class:selected="{selectedMenuOption === 'projecten'}"
            on:click={selectMenu} 
        >
            Projecten
        </li>
        <li 
            id="stages" 
            class="menu-link" 
            class:selected="{selectedMenuOption === 'stages'}"
            on:click={selectMenu}
        >
            Stages
        </li>       
        <li 
            id="aboutme" 
            class="menu-link" 
            class:selected="{selectedMenuOption === 'aboutme'}"
            on:click={selectMenu}
        >
            Over Pippi
        </li>
    </ul>
    <div class="pb-menu-icon">
        <div 
        class="pb-icon"
        on:click={toggleSlider} 
        >
            <Icon scale="3" data={times}/>
        </div>
    </div>  
</div>
<style>


li.menu-link {
    width: 100%;
    text-decoration: none;
    padding: 1rem;
    color: #fff;
    cursor: pointer;
}

li.menu-link.selected {
    font-weight: bold;
    color: #f1fb12;
    cursor: crosshair;
}

@media only screen and (max-width: 824px) {
    .pb-slider {
        display: none;
    }
    .pb-slider.open {
        display: block;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgb(0,0,0);
    }
    .pb-slider-container {
        height: 100%;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 4rem 2rem;
    }
    .pb-menu-icon {
        color: #f1fb12;
        width: 20%;
        display: flex;
        justify-content: center;
        padding-top: 12px;
        position: fixed;
        top: 0;
        right: 0;
    }
    .pb-icon {
        cursor: pointer;
    }
}

@media only screen and (min-width: 825px) {
    .pb-slider {
        display: block;
        width: 15%;
    }
    .pb-slider-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 4rem 2rem;
    
    }
    .pb-menu-icon {
        display: none;
    }
}
</style>

    