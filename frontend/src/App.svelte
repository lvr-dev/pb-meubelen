<script>
	import Header from './ui/Header.svelte';
    import Sidebar from './navigation/Sidebar.svelte';
	import MobileMenu from './navigation/MobileMenu.svelte';
	import Main from './templates/Main.svelte';

	
</script>
<div class="pb-grid-container">
	<div class="pb-header-fill"></div>
	<div class="pb-header"><Header /></div>
	<div class="pb-header-fill"></div>
	<div class="pb-sidebar"><Sidebar /></div>
	<main class="pb-main"><Main /></main>
	<div class="pb-fill"></div>
</div>
<MobileMenu />
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

.pb-fill {
	grid-area: pb-fill;
}


.pb-sidebar {
	grid-area: sidebar;
}

.pb-main {
	grid-area: main;
}


 @media only screen and (max-width: 825px) {
	.pb-grid-container {
		grid-template-areas:
			"header"
			"main";
		grid-template-columns: 1fr;
        grid-template-rows: 116px 5fr;
	}

	.pb-header, .pb-main {
		grid-column: auto;
		grid-row: auto;
	}


	.pb-fill, .pb-sidebar, .pb-header-fill {
		display: none;
	}
 }

 @media only screen and (min-width: 826px) {
	.pb-grid-container {
		grid-template-areas: 
		"header-fill header"
		"sidebar main";
	    grid-template-columns: 1fr 5fr 1fr;
		grid-template-rows: 128px auto;
	}
 }

</style>