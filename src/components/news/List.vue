<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useArticleStore } from '@/store/articleStore';

const articleStore = useArticleStore();
const { articles } = storeToRefs(articleStore);
const { getArticles } = articleStore;



const router = useRouter();


const to_detail = (article_id: number) => {
    router.push({
        name: "content",
        params: {
            article_id: article_id
        }
    })
};

onMounted(() => {
    getArticles(1)
});
</script>


<template>
    <div class="wrap">
        <div class="title">
            <div class="text">泵站资讯</div>
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
</template>

<style lang="scss" scoped>
$title-height: 48px;
$font-size: 1.4em;
$line-height: 2px;

.wrap {

    width: 720px;

    .title {
        .text {
            width: 100px;
            text-align: center;
            margin-left: 40px;
            height: $title-height - $line-height;
            line-height: $title-height;
            font-size: $font-size;

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
</style>