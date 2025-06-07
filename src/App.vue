<script setup lang="ts">
import Header from './components/common/Header.vue';

</script>

<template>
    <Header></Header>

    <main>
        <router-view />
    </main>

</template>

<style lang="scss" scoped>
main {
    width: $box-width;
    margin: auto;
}
</style>
