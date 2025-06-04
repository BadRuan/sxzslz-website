<script lang="ts" setup>
import { onMounted } from 'vue';
import { useArticleStore } from '@/store/article'
const { article_data, get_article } = useArticleStore()

onMounted(() => {
    get_article()
})
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
            <li v-for="(item, index) in article_data" :key="index">
                <span>-</span>
                <span class="news-title">{{ item.title }}</span>
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