<script>
     import Icon from 'svelte-awesome';
     import { bars } from 'svelte-awesome/icons';
     import { showMenu } from '../stores/ui-store.js';

     function toggleSideMenu() {
        showMenu.set(true);
     }


</script>
<header class="pb-fw-header">
    <div class="pb-header-toolbar">
        <div class="pb-title-header inset-12">
            <div class="pb-title">Pippi Benneheij</div>
            <div>Houtbewerking</div>
        </div>
        <div class="pb-menu-icon">
            <div 
            class="pb-icon"
            on:click={toggleSideMenu} 
            >
                <Icon scale="2" data={bars}/>
            </div>
        </div>
    </div>
</header>
<style>
    .pb-fw-header {
        height: 100%;
        padding: 8px 8px 8px 0;
    }
    .pb-header-toolbar {
        display: flex;
        flex-direction: row;
        border: solid 1px #FFC300;
    }

    .pb-menu-icon {
       display: none;
    }
    .inset-12 {
        padding: 0 12px; 
    }

    @media only screen and (max-width: 825px) {

        .pb-header-toolbar {
            border: none;
            padding: 0;
            justify-content: space-between;
            
        }
        .pb-menu-icon {
            width: 20%;
            display: flex;
            justify-content: center;
            padding-top: 12px;
        }
    }
</style>