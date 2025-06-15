<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useSubsetStore } from '@/store/subsetStore';
import { useArticleStore } from '@/store/articleStore';
const router = useRouter();
const subsetStore = useSubsetStore();
const articleStore = useArticleStore();
const current = ref(1);
const { subsets } = storeToRefs(subsetStore);
const { articles } = storeToRefs(articleStore);
const { getSubsets } = subsetStore;
const { getArticles } = articleStore;

const changeCurrent = (cursor: number) => {
    current.value = cursor;
}

const to_detail = (article_id: number) => {
    router.push({
        name: "content",
        params: {
            article_id: article_id
        }
    })
};

onMounted(() => {
    getSubsets();
    getArticles(1);
});

</script>

<template>
    <div class="parent-wrap">
        <div class="wrap1">
            <div class="title">信息分类</div>
            <div class="item" v-for="item in subsets" :key="item.subset_id" @click="changeCurrent(item.subset_id)"
                :class="{ active: item.subset_id == current }">
                {{ item.subset_name }}
            </div>
        </div>

        <div class="wrap2">
            <div class="title">
                <div class="text">{{ subsets[current - 1].subset_name }}</div>
                <div class="line">
                    <div class="bottom"></div>
                </div>
            </div>
            <ul>
                <li v-for="(item, index) in articles" :key="index">
                    <span>-</span>
                    <span class="news-title" @click="to_detail(item.article_id)">
                        {{ item.title }}
                    </span>

                    <span class="news-date">{{ item.create_time.slice(0, 10) }}</span>
                </li>
            </ul>
        </div>

    </div>

</template>

<style lang="scss" scoped>
$item-height: 48px;
$title-height: 48px;
$line-height: 2px;
$font-size: 1.2em;

.parent-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .wrap1 {
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

        .active {
            background-color: #E5E5E5;
            border-left: 2px solid $primary-color;
        }

    }

    .wrap2 {

        width: 720px;

        .title {
            .text {
                width: 100px;
                text-align: center;
                margin-left: 40px;
                height: $title-height - $line-height;
                line-height: $title-height;
                font-size: 1.5em;

            }

            .line {
                margin: 0;
                width: 100%;
                height: $line-height;
                background-color: #A6A6A6;

                .bottom {
                    width: 100px;
                    margin-left: 40px;
                    height: $line-height;
                    background-color: $primary-color;
                }
            }
        }

        ul {

            padding: 0;

            li {

                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 20px 0;

                .news-title {
                    width: 580px;
                    font-size: 1.2em;
                    cursor: pointer;
                }

                .news-date {
                    width: 100px;
                    text-align: right;
                    color: #808080;
                }

                &:hover {
                    .news-title {
                        color: $primary-color;

                    }
                }
            }
        }

    }
}
</style>