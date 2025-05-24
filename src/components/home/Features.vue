<script lang="ts" setup>
import Mark from '@/components/common/Mark.vue';
import type { EventsInter } from "@/model";

const Events: EventsInter[] = [
    {
        title: "沈巷镇水利站隐患巡检制度",
        date: "2025-04-21"
    },
    {
        title: "沈巷镇水利站故障排查制度",
        date: "2025-04-21"
    },
    {
        title: "沈巷镇水利站值班值守制度",
        date: "2025-04-21"
    },
    {
        title: "沈巷镇水利站维修保障制度",
        date: "2025-04-21"
    },
    {
        title: "沈巷镇水利站信息报送制度",
        date: "2025-04-21"
    }
]

</script>

<template>
    <Mark>
        <template #first>泵站特色</template>
        <template #second>Features</template>
    </Mark>
    <div class="features-list">
        <div class="item" v-for="(item, index) in Events" :key="index">
            <div class="content">{{ item.title }}</div>
            <div class="date-line">
                <div class="date">{{ item.date }} </div>
                <div class="line"></div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.features-list {
    width: 300px;
    height: 420px;
    background-color: #F7F7F7;
    overflow: hidden;

    .item {
        width: 300px;
        padding: 20px;
        height: 40px;
        overflow: hidden;

        .content {
            font-size: 1.2em;
        }

        .date-line {
            display: flex;
            flex-direction: row;
            margin: 10px 0;

            .date {
                font-size: 0.8em;
            }

            .line {
                margin-top: 10px;
                margin-left: 10px;
                background-color: #A6A6A6;
                height: 1px;
                width: 160px;
            }

        }

        &:hover {
            background-color: $primary-color;
            cursor: pointer;

            .content {
                color: #fff;
            }

            .date-line {
                .date {
                    color: #fff;
                }

                .line {
                    background-color: #fff;
                }

            }
        }
    }
}
</style>