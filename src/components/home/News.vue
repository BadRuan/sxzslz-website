<script setup lang="ts">
import type { NewsInter } from '@/model'
const NewsList: NewsInter[] = [
    {
        title: "沈巷水利站组织开展2025年五一节前泵站安全检查工作",
        date: "2025/04/29"
    },
    {
        title: "沈巷水利站组织开展2025年五一节前泵站安全检查工作",
        date: "2025/04/29"
    },
    {
        title: "沈巷水利站组织开展2025年五一节前泵站安全检查工作",
        date: "2025/04/29"
    },
    {
        title: "沈巷水利站组织开展2025年五一节前泵站安全检查工作",
        date: "2025/04/29"
    },
    {
        title: "沈巷水利站组织开展2025年五一节前泵站安全检查工作",
        date: "2025/04/29"
    },
    {
        title: "沈巷水利站组织开展2025年五一节前泵站安全检查工作",
        date: "2025/04/29"
    },
    {
        title: "沈巷水利站组织开展2025年五一节前泵站安全检查工作",
        date: "2025/04/29"
    },
    {
        title: "沈巷水利站组织开展2025年五一节前泵站安全检查工作",
        date: "2025/04/29"
    },
]
</script>

<template>
    <div class="news-list">
        <div class="news-item" v-for="(news, index) in NewsList" :key="index">
            <div class="pic"><img src="@/assets/pic/news.jpg" alt="封面图片"></div>
            <div class="txt">
                <p>{{ news.title }}</p>
                <time>{{ news.date }}</time>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$news-item-width: 240px;
$news-item-pic-height: 130px;
$news-item-txt-height: 100px;

.news-list {

    width: $box-width;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px 12px;


    .news-item {
        width: $news-item-width;
        height: auto;
        overflow: hidden;
        transition: box-shadow 0.3s;

        .pic {

            width: $news-item-width;
            height: $news-item-pic-height;
            background-color: #aeaeae;
            transition: scale 0.5s;

            img {
                width: 100%;
            }
        }

        .txt {
            width: $news-item-width;
            height: $news-item-txt-height;
            background-color: rgb(243, 243, 246);
            font-size: 1em;

            p {
                padding: 10px 20px;
                width: 200px;
                height: 2em;
                overflow: hidden;

            }

            time {
                margin: 0 20px;
                width: 240px;
                color: #333;
            }

        }

        &:hover {
            box-shadow: 5px 5px 5px rgb(106, 106, 106);

            .pic {
                scale: 1.1;
            }

            .txt {
                background-color: rgb(51, 52, 138);

                p,
                time {
                    color: #fff;
                }

            }

        }
    }
}
</style>