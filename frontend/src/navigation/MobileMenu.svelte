<script>
    import { onDestroy } from 'svelte';
    import Icon from 'svelte-awesome';
    import { times } from 'svelte-awesome/icons';
    import Nav from './Nav.svelte';
    import { showMenu } from '../stores/ui-store.js';
    
    let showMobileMenu = false;

    function toggleMenu() {
        console.log('toggle menu');
        showMenu.set(false);
    }

    const unsubscribe = showMenu.subscribe(value => {
        console.log('the value of showmenu', value);
	    showMobileMenu = value;
    });

    onDestroy(unsubscribe);

</script>
<div 
    class="pb-mobile-menu"
    class:open="{showMobileMenu}"
>
    <div class="pb-mobile-menu-container">
        <Nav />
    </div>
    <div class="pb-menu-icon">
        <div  
            class="pb-icon"
            on:click={toggleMenu}>
            <Icon scale="3" data={times}/>
        </div>
    </div>  
</div>
<style>

    .pb-mobile-menu {
        display: none;
    }

    @media only screen and (max-width: 825px) {

        .pb-mobile-menu.open {
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            background-color: rgb(0,0,0);
        }
        .pb-mobile-menu-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 12rem 2rem 0 2rem;
        }
        .pb-menu-icon {
            color: #ff7f00;
            width: 20%;
            display: flex;
            justify-content: center;
            padding-top: 12px;
            position: fixed;
            top: 12px;
            right: 12px;
        }
        .pb-icon {
            cursor: pointer;
        }
}

</style>