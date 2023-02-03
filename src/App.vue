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
    <div class="d-flex flex-column justify-content-between h-100">
        <header class="w-100">
            <AppHeader/>
        </header>

        <main class="w-100 border p-5 position-relative">
            <AppMain/>
        </main>

        <footer class="w-100">
            <AppFooter/>
        </footer>
    </div>
</template>

<style lang="scss">
    @import "./css/style.scss";
    main {
        min-height: calc(100vh - 128px);
    }
</style>
