<script setup lang="ts">
import { ref } from 'vue';
const categroys = ref(['泵站资讯', '通知公告', '专题栏目', '制度文件', '财务公示'])
</script>

<template>
    <div class="wrap">
        <div class="title">信息分类</div>
        <div class="item" v-for="(item, index) in categroys" :key="index">
            {{ item }}
        </div>

    </div>
</template>

<style lang="scss" scoped>
$item-height: 48px;
$font-size: 1.2em;

.wrap {
    width: 280px;
    height: 800px;

    .title {
        height: $item-height;
        line-height: $item-height;
        font-size: $font-size;
        background-color: $primary-color;
        color: #fff;
        text-align: center;
    }

    .item {
        height: $item-height;
        line-height: $item-height;
        text-align: center;
        font-size: $font-size;
        border-left: 2px solid #fff;
        cursor: pointer;

        &:hover {
            background-color: #E5E5E5;
            border-left: 2px solid $primary-color;
        }
    }
}
</style>