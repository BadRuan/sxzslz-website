<script lang="ts" setup>
import type { EventsInter } from "@/model";

const NewsList: EventsInter[] = [
    {
        title: '鸠江区2025年度农田灌溉水有效利用系数测算项目询价公告',
        date: "2025-04-21"
    },
    {
        title: '鸠江区河道管理所2025年万春圩圈堤管养维护服务及扁担河水面、莲花湖保洁养护服务采购竞争性磋商公告',
        date: "2025-04-21"
    },
    {
        title: '鸠江区2025年度农田灌溉水有效利用系数测算项目询价公告',
        date: "2025-04-21"
    },
    {
        title: '鸠江区河道管理所2025年万春圩圈堤管养维护服务及扁担河水面、莲花湖保洁养护服务采购竞争性磋商公告',
        date: "2025-04-21"
    },
    {
        title: '鸠江区2025年度农田灌溉水有效利用系数测算项目询价公告',
        date: "2025-04-21"
    },
    {
        title: '鸠江区河道管理所2025年万春圩圈堤管养维护服务及扁担河水面、莲花湖保洁养护服务采购竞争性磋商公告',
        date: "2025-04-21"
    },
    {
        title: '鸠江区河道管理所2025年万春圩圈堤管养维护服务及扁担河水面、莲花湖保洁养护服务采购竞争性磋商公告',
        date: "2025-04-21"
    },
    {
        title: '鸠江区八届人大四次会议代表议案及建议办理任务分解表（涉及区水务局）',
        date: "2025-04-21"
    },
    {
        title: '鸠江区河道管理所2025年万春圩圈堤管养维护服务及扁担河水面、莲花湖保洁养护服务采购竞争性磋商公告',
        date: "2025-04-21"
    },
    {
        title: '鸠江区水务局行政执法职责、执法依据、执法程序、监督途径',
        date: "2025-04-21"
    },
    {
        title: '鸠江区2025年度农田灌溉水有效利用系数测算项目询价公告',
        date: "2025-04-21"
    },
    {
        title: '鸠江区河道管理所2025年万春圩圈堤管养维护服务及扁担河水面、莲花湖保洁养护服务采购竞争性磋商公告',
        date: "2025-04-21"
    },
    {
        title: '鸠江区河道管理所2025年万春圩圈堤管养维护服务及扁担河水面、莲花湖保洁养护服务采购竞争性磋商公告',
        date: "2025-04-21"
    },
    {
        title: '鸠江区水务局行政执法职责、执法依据、执法程序、监督途径',
        date: "2025-04-21"
    },
    {
        title: '鸠江区2025年度农田灌溉水有效利用系数测算项目询价公告',
        date: "2025-04-21"
    },
    {
        title: '鸠江区河道管理所2025年万春圩圈堤管养维护服务及扁担河水面、莲花湖保洁养护服务采购竞争性磋商公告',
        date: "2025-04-21"
    },
]
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
            <li v-for="(item, index) in NewsList" :key="index">
                <span>-</span>
                <span class="news-title">{{ item.title }}</span>
                <span class="news-date">{{ item.date }}</span>
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