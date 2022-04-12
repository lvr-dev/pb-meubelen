<script>
    import Icon from 'svelte-awesome';
    import { times } from 'svelte-awesome/icons';
    import Nav from '../navigation/Nav.svelte';
  

</script>
<div class="pb-sidebar">
    <div class="pb-sidebar-container">
        <Nav />
    </div>
    <div class="pb-menu-icon">
        <div class="pb-icon">
            <Icon scale="3" data={times}/>
        </div>
    </div>  
</div>
<style>


@media only screen and (max-width: 825) {
    .pb-sidebar {
        display: none;
    }
    .pb-sidebar {
        display: block;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgb(0,0,0);
    }
    .pb-sidebar-container {
        height: 100%;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 4rem 2rem;
    }
    .pb-menu-icon {
        color: #ff7f00;
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

@media only screen and (min-width: 826px) {
    .pb-sidebar {
        display: block;
    }
    .pb-sidebar-container {
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

    