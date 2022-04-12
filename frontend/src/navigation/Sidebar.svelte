<script>
    import Nav from '../navigation/Nav.svelte';
</script>
<div class="pb-sidebar">
    <div class="pb-sidebar-container">
        <Nav />
    </div>
</div>
<style>
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
}
</style>

    