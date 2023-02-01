<script>
    import AppHeader from './components/AppHeader.vue';
    import AppMain from './components/AppMain.vue';
    import AppFooter from './components/AppFooter.vue';

    export default {
        components: {
            AppHeader,
            AppMain,
            AppFooter
        }
    }
</script>

<template>
    <header class="w-100 border border-dark text-center">
        <AppHeader/>
    </header>

    <main class="w-100 h-100 border border-dark text-center">
        <AppMain/>
    </main>

    <footer class="w-100 border border-dark text-center">
        <AppFooter/>
    </footer>
</template>

<style lang="scss">
    @import "./css/style.scss";
</style>
