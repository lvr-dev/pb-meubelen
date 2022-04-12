    
<script>
    import { selectedComponent } from '../stores/content-store';
    import { showMenu } from '../stores/ui-store';
    let selectedMenuOption = 'about';
    function selectMenu(event) {
        selectedMenuOption = event.target.id;
        selectedComponent.set(selectedMenuOption);
        showMenu.set(false);
    }
</script>
<ul class="pb-slider-container">
    <li 
        id="about" 
        class="menu-link" 
        class:selected="{selectedMenuOption === 'about'}"
        on:click={selectMenu}
    >
        Over Pippi
    </li>
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
</ul>
<style>

li.menu-link {
    text-decoration: none;
    padding: 1rem;
    color: #ff7f00;
    cursor: pointer;
    font-size: 1.3rem;
    text-align: end;
}

li.menu-link.selected {
    font-weight: bold;
    color: #FFC300;
    cursor: crosshair;
}

@media only screen and (min-width: 826px) {
    li.menu-link {
        text-align: end;
        width: 100%;
    }
}

@media only screen and (max-width: 825px) {
    li.menu-link {
        text-align: center;
    }
}
</style>