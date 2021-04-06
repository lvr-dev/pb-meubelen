<script>
     import Icon from 'svelte-awesome';
     import { bars } from 'svelte-awesome/icons';
     import { showMenu } from '../store.js';

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
        width: 100%;
        height: 86px;
        margin: 0;
        padding: 0;
        position: absolute
    }
    .pb-header-toolbar {
        display: flex;
        flex-direction: row;
        padding-top: 4px;
        border: solid 1px #e41586;
        width: 70%;
        margin: 1rem auto;
    }

    .pb-menu-icon {
       display: none;
    }
    .inset-12 {
        padding: 0 12px; 
    }

    @media only screen and (max-width: 824px) {
        .pb-fw-header {
            height: 86px;
        }
        .pb-header-toolbar {
            border: none;
            padding: 0;
            width: 100%;
        }
        .pb-menu-icon {
            width: 20%;
            display: flex;
            justify-content: center;
            padding-top: 12px;
        }
    }
</style>