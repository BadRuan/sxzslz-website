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
    <h1>文章内容页</h1>
    <p>id : {{ article.article_id }}</p>
    <p>title : {{ article.title }}</p>
    <p>content : {{ article.content }}</p>

</template>

<style lang="scss" scoped>
h1 {
    text-align: center;
}
</style>