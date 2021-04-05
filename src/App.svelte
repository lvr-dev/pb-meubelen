<script>
	import Header from './ui/Header.svelte'
    import Slider from './ui/Slider.svelte'
	import Projects from './content/Projects.svelte'
	import Internships from './content/Internships.svelte'
	import About from './content/About.svelte'

	let selectedMenuOption;

	function selectComponent(event) {
		selectedMenuOption = event.detail.menuOption;
	}
</script>

<Header />
<main class="pb-main">
<Slider on:menuOption={selectComponent}/>
<section class="pb-content">
	{#if selectedMenuOption === 'projecten'}
   		<Projects />
	{:else if selectedMenuOption === 'stages'}
   		<Internships />
	{:else}
   		<About />
	{/if}
</section>
</main>
<style>
.pb-main {
    height: 100%;
    display: flex;
    flex-direction: row;
	position: absolute;
	top: 86px;
	right: 0;
	left: 0;
	bottom: 0;
}

</style>