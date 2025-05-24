<script lang="ts" setup>
import Mark from '@/components/common/Mark.vue';
</script>

<template>
    <div class="header">
        <Mark>
            <template #first>运行概览</template>
            <template #second>Overview</template>
        </Mark>
        <div class="range">2025年5月22日 18时 - 2025年5月23日 6时</div>
    </div>

    <div class="table">

    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;

    .range {
        margin-bottom: 10px;
        color: #808080;
    }
}

.table {
    width: 700px;
    height: 420px;
    background-color: #F7F7F7;
    overflow: hidden;
}
</style>