<script>
	import Header from './Header.svelte'
</script>

<Header />
<main class="pb-main">
    <slot>

    </slot>
</main>
<style>
.pb-main {
    background-color: #202020;
    height: 100%;
    padding: 16px 0;
}
</style>