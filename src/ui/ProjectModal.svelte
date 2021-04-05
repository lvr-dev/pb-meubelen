<script>
     import Icon from 'svelte-awesome';
     import { times } from 'svelte-awesome/icons';
     import { toggleModalValue } from '../store';
    
     export let id;
     export let tags;
     export let selected;
     export let title;
     export let text;
     export let badgeImage;
     export let additionalImages;

     function closeModal() {
        toggleModalValue.set(false);
     }

</script>
<div class="pb-modal-overlay">
    <div class="pb-modal">
        <div class="pb-modal-header">
            <h1 class="modal-header">{title}</h1>
            <div 
                class="pb-icon"
                on:click={closeModal}
            >
                <Icon scale="2" data={times}/>
            </div>
        </div>
        <div class="pb-modal-content">
            <div>
                {text}
            </div>
            <div>
                <img 
                src={badgeImage.src} 
                alt ={badgeImage.alt}
                class:cropped={additionalImages}
                >
            </div>
        </div>
        {#if additionalImages}
        <div class="pb-hr"></div>
        <div class="pb-image-container">
            {#each additionalImages as addImg}
                <div class="pb-modal-image">
                    <img src={addImg.src} alt={addImg}>
                </div>
            {/each}
        </div>
        {/if}
    </div>
</div>
<style>
   h1.modal-header {
       font-size: 2rem;
   }
   .pb-modal-overlay {
       position: fixed;
       top: 0;
       bottom: 0;
       right: 0;
       left: 0;
       background-color: rgba(10,10,10,0.7);
   }
   .pb-modal {
       z-index: 100;
       width: 68vw;
       height: 600px;
       margin: 4rem auto;
       background-color: rgb(10,10,10);
       opacity: 1;
       border: solid 1px #e41586;
       padding: 1rem;
       overflow: scroll;
   }
   .pb-modal-header {
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       align-items: baseline;
       margin-bottom: 1rem;
   }
   .pb-modal-content {
       display: flex;
       flex-direction: row;
   }
   .pb-hr {
        border-bottom: solid 1px #e41586;
        margin: 2rem 0;
   }
   .pb-image-container {
       display: flex;
       flex-direction: row;
   }
   .pb-modal-image {
       padding: 0.5rem;
   }
   img.cropped {
       max-height: 240px;
   }

   @media only screen and (max-width: 824px) {
       .pb-modal-content {
           flex-direction: column;
       }
   }
</style>