<script>
     import Icon from 'svelte-awesome';
     import { times } from 'svelte-awesome/icons';
     import { showMenu } from '../stores/ui-store';
    
     export let id;
     export let tags;
     export let selected;
     export let title;
     export let text;
     export let badgeImage;
     export let additionalImages;

     function closeModal() {
        showMenu.set(false);
     }

</script>
<div class="pb-modal-overlay">
    <div class="pb-modal">
        <div class="pb-modal-header">
            <div class="pb-title-header">
                <div class="pb-title">{title}</div>
            </div>
            <div class="pb-menu-icon">
                <div 
                    class="pb-icon"
                    on:click={closeModal}
                >
                    <Icon scale="2" data={times}/>
                </div>
            </div>
        </div>
        <div class="pb-modal-content">
            <div class="pb-modal-text">
                {text}
            </div>
            <div class="pb-modal-image-container">
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
                    <img src={addImg.src} alt={addImg.alt}>
                </div>
            {/each}
        </div>
        {/if}
    </div>
</div>
<style>

   .pb-modal-overlay {
       position: fixed;
       top: 0;
       bottom: 0;
       right: 0;
       left: 0;
       background-color: rgba(40,40,40);
   }
   .pb-modal {
       z-index: 100;
       width: 68vw;
       height: 600px;
       margin: 4rem auto;
       background-color: rgb(40,40,40);
       opacity: 1;
       border: solid 1px #ff7f00;
       padding: 1rem;
       overflow: scroll;
   }
   .pb-modal-header {
       display: flex;
       align-items: baseline;
       margin-bottom: 2rem;
   }
   .pb-modal-content {
       display: flex;
   }
   .pb-modal-text{
        width: 60%;
   }
   .pb-modal-image-container {
       width: 40%;
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
   .pb-menu-icon {
        width: 20%;
        text-align: right;
    }

   @media only screen and (max-width: 600px) {
       .pb-modal-content {
           flex-direction: column-reverse;
           width: 90%;
           margin: 0 auto;
       }

       .pb-modal-text{
            width: 90%;
            margin-bottom: 0.2rem;
        }
        .pb-modal-image-container {
            margin-bottom: 1rem;
            width: 90%;
        }
        .pb-image-container {
            flex-direction: column;
        }

        .pb-title-header {
            width: 90%;
        }
        .pb-title {
            word-wrap: break-word;
            font-size: 1.6rem;
        }
        .pb-menu-icon {
            width: 10%;
            align-self: center;
        }
   }

   @media only screen and (min-width: 601px) and (max-width: 825px) {

   }
</style>