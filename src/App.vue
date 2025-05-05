<script setup lang="ts">
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';

</script>

<template>
    <Header></Header>

    <main>
        <router-view />
    </main>

    <Footer></Footer>
</template>

<style lang="scss" scoped>
main {
    width: $box-width;
    margin: auto;
}
</style>
