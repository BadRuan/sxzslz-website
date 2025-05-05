<script setup lang="ts">
import Mark from '@/components/Mark.vue';
import News from '@/components/home/News.vue';
import Info from '@/components/home/Info.vue';
import Duty from '@/components/home/Duty.vue';
</script>

<template>

    <aside>
        <Mark>
            <template #first>泵站信息</template>
            <template #second>Info</template>
        </Mark>
    </aside>

    <Info></Info>

    <aside>
        <Mark>
            <template #first>站内要闻</template>
            <template #second>News</template>
        </Mark>
    </aside>

    <News></News>

    <aside>
        <Mark>
            <template #first>泵站职责</template>
            <template #second>Duty</template>
        </Mark>
    </aside>

    <Duty></Duty>
</template>

<style lang="scss" scoped>
aside {
    display: flex;
    gap: 20px;
}
</style>