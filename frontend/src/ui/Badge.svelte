 <script>
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    function handleClick(item) {
        dispatch('badgeClick',  {
            item
        });
    }
    export let item;
 </script>
 <div    
    class="badge badge-clickable" 
    data-tag="{item.tags}"
    class:outfiltered="{!item.selected}"
    on:click={handleClick(item)}
>
    <div class="badge-image">
        <img 
            src="{item.badgeImage.src}" 
            alt="{item.badgeImage.alt}"
            class="main-image"
        />
    </div>
    <div class="badge-content">
        {item.text}
    </div>  
</div>
<style>
    .badge {
        width: 100%;
        background-color: rgb(31, 31, 31);
        margin: 1rem;
        border: solid 1px rgb(70,70,70);
        border-bottom: solid 1px #FF5733 ;
        overflow: hidden;
    }
    .badge-clickable {
        cursor: pointer
    }
    .badge-image {
        width: 100%;
    }
    .main-image {
        width: 100%;
    }
    .badge-content {
        -webkit-line-clamp: 5;
        line-clamp: 5;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        display: -webkit-box;
        padding: 1rem;
        cursor: pointer;
        max-height: 96px;
        color: #fff;
    }
    .outfiltered {
        display: none;
    }

    @media only screen and (max-width: 825px) {
        .badge {
            width: 80vw;
            margin: 1rem auto;
        }
    }
</style>