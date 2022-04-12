<script>
    import Projects from '../content/Projects.svelte';
    import About from '../content/About.svelte';
    import Internships from '../content/Internships.svelte';
    import { selectedComponent } from '../stores/content-store';
 
    let selectedMenuOption;
	
    selectedComponent.subscribe(value => {
        selectedMenuOption = value;
    });

</script>
<section class="pb-content">
	{#if selectedMenuOption === 'projecten'}
   		<Projects />
	{:else if selectedMenuOption === 'stages'}
   		<Internships />
	{:else}
   		<About />
	{/if}
</section>