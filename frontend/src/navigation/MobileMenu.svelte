<script>

    const dispatch = createEventDispatcher();
    let showMobileMenu = false;
    
    function toggleMenu() {
        showMenu.set(false);
    }

    const unsubscribe = showMenu.subscribe(value => {
	    showMobileMenu = value;
    });
</script>