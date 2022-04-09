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
<div class="pb-grid-container">
	<div class="pb-header-fill"></div>
	<div class="pb-header"><Header /></div>
	<div class="pb-sidebar"></div>
	<main class="pb-main">
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
</div>
<style>

.pb-grid-container {
	display: grid;
	height: 100vh;
	width: 100%;
}

.pb-header {
	grid-area: header;
}

.pb-header-fill {
	grid-area: header-fill;
}

.pb-sidebar {
	grid-area: sidebar;
}

.pb-main {
	display: flex;
	flex-direction: row;
	grid-area: main;
}


 @media only screen and (max-width: 600px) {
	.pb-grid-container {
		grid-template-areas:
			"header"
			"main";
		grid-template-columns: 1fr;
        grid-template-rows: 1fr;
	}

	.pb-header, .pb-main {
		grid-column: auto;
		grid-row: auto;
	}

	.pb-header-fill {
		display: none;
	}

	.pb-sidebar {
		display: none;
	}
 }

 @media only screen and (min-width: 601px) {
	.pb-grid-container {
		grid-template-areas: 
		"header-fill header"
		"sidebar main";
		grid-template-rows: 116px 5fr;
		grid-template-columns: 190px 5fr;
	}
 }

</style>