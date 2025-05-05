<script lang="ts" setup>
import type { EventsInter } from "@/model"
const Events: EventsInter[] = [
    {
        title: "新坝站更新改造完成，泵站冬修工作完成。",
        date: "2025-04-21"
    },
    {
        title: "新坝站更新改造完成，泵站冬修工作完成。",
        date: "2025-04-21"
    },
    {
        title: "新坝站更新改造完成，泵站冬修工作完成。",
        date: "2025-04-21"
    },
    {
        title: "新坝站更新改造完成，泵站冬修工作完成。",
        date: "2025-04-21"
    },
    {
        title: "新坝站更新改造完成，泵站冬修工作完成。",
        date: "2025-04-21"
    },
    {
        title: "新坝站更新改造完成，泵站冬修工作完成。",
        date: "2025-04-21"
    },
]
</script>

<template>
    <div class="box">
        <div class="info1">

        </div>

        <div class="info2">
            <div class="event-item" v-for="(item, index) in Events" :key="index">
                <date>
                    <div class="part1">{{ item.date.slice(8, 10) }}</div>
                    <div class="part2">{{ item.date.slice(0, 4) }}.{{ item.date.slice(5, 7) }}</div>
                </date>
                <div class="event-content">{{ item.title }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$box-height: 400px;
$box1-width: 700px;
$box2-width: 280px;

.box {
    width: $box-width;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .info1 {
        width: $box1-width;
        height: $box-height;
        background-color: #707070;
    }

    .info2 {
        box-sizing: border-box;
        width: $box2-width;
        height: $box-height;
        background-color: #b7b7b7;

        .event-item {
            width: $box2-width;
            display: flex;
            flex-direction: row;
            border-bottom: 1px solid rgb(223, 223, 223);
            padding: 12px 0;

            date {
                display: block;
                width: 60px;
                height: auto;

                .part1 {
                    font-size: 1.5em;
                    text-align: center;
                }

                .part2 {
                    font-size: 0.8em;
                    text-align: center;
                }
            }

            .event-content {
                border-left: 1.5px dashed rgb(144, 144, 144);
                padding-left: 8px;
                padding-right: 10px;
                height: 40px;
                font-size: 1em;
                width: 220px;
                overflow: hidden;
            }

            &:hover {
                background-color: rgb(51, 52, 138);
                color: #fff;

                .event-content {
                    border-left: 1.5px solid rgb(255, 255, 255);
                }

            }
        }
    }
}
</style>