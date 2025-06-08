<script setup lang="ts">
import Category from '@/components/news/Category.vue';
import List from '@/components/news/List.vue';
</script>

<template>
    <div class="parent-wrap">
        <Category></Category>
        <List></List>
    </div>

</template>

<style lang="scss" scoped>
.parent-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>