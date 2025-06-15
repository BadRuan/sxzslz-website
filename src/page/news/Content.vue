<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useArticleStore } from '@/store/articleStore';

const articleStore = useArticleStore();
const { article } = storeToRefs(articleStore)
const { getArticle } = articleStore;
const route = useRoute()
const { article_id } = route.params

onMounted(() => {
    const data = getArticle(Number(article_id));
});

</script>

<template>
    <div class="location">当前位置：首页>泵站咨询>通知公告</div>
    <h1>{{ article.title }}</h1>
    <div class="desc">
        <div class="desc1">发布时间：2025-05-34 16:42</div>
        <div class="desc2">信息来源： 沈巷镇水利站</div>
        <div class="desc3">浏览次数：264</div>
    </div>
    <p>{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{
        article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{
            article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{
            article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{
            article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{
            article.content }}{{ article.content }}{{ article.content }}{{ article.content }}</p>
    <p>{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{
        article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{
            article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{
            article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{
            article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{
            article.content }}{{ article.content }}{{ article.content }}{{ article.content }}</p>
    <p>{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{
        article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{
            article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{
            article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{
            article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{ article.content }}{{
            article.content }}{{ article.content }}{{ article.content }}{{ article.content }}</p>

</template>

<style lang="scss" scoped>
.location {
    margin: 20px 0;
}

h1 {
    text-align: center;
}

.desc {
    color: #383838;
    display: flex;
    justify-content: space-between;
    padding-bottom: 4px;
    border-bottom: .5px solid #A6A6A6;
}

p {
    line-height: 1.5em;
}
</style>