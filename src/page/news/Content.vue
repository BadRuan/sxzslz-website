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
    <div class="location">当前位置：首页>新闻列表>{{ article.subset_name }}</div>
    <h1>{{ article.title }}</h1>
    <div class="desc">
        <div class="desc1">发布时间：{{ article.create_time }}</div>
        <div class="desc2">编辑： {{ article.nick_name }}</div>
        <div class="desc3">浏览次数：{{ article.read_count }}</div>
    </div>
    <div v-html="article.content"></div>
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
</style>