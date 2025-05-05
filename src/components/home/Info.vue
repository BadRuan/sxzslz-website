<script lang="ts" setup>
import type { InfoInter, EventsInter } from "@/model";
import { ref, onMounted } from 'vue'

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

const info_list: InfoInter[] = [
    {
        title: "新坝站更新改造完成，泵站冬修工作完成。",
        describe: "新坝站更新改造完成，泵站冬修工作完成。新坝站更新改造完成，泵站冬修工作完成。新坝站更新改造完成，泵站冬修工作完成。",
        src: "src/assets/pic/1.jpg"
    },
    {
        title: "大桥站更新改造完成，泵站冬修工作完成。",
        describe: "大桥站更新改造完成，泵站冬修工作完成。",
        src: "src/assets/pic/2.jpg"
    },
    {
        title: "老坝站更新改造完成，泵站冬修工作完成。",
        describe: "泵站冬修工作完成。",
        src: "src/assets/pic/3.jpg"
    },
    {
        title: "裕溪站更新改造完成，泵站冬修工作完成。",
        describe: "裕溪站更新改造完成，泵站工程标准化工作推进显著。",
        src: "src/assets/pic/4.jpg"
    },
    {
        title: "雍镇站更新改造完成，泵站冬修工作完成。",
        describe: "雍镇站泵站工程标准化工作推进显著。",
        src: "src/assets/pic/5.jpg"
    },
    {
        title: "新坝站更新改造完成，泵站冬修工作完成。",
        describe: "泵站冬修工作完成。",
        src: "src/assets/pic/6.jpg"
    },
]

const index = ref(1);

const pre = () => {
    index.value = index.value - 1;
    if (index.value < 1) {
        index.value = 6;
    }
}

const next = () => {
    index.value = index.value + 1;
    if (index.value > 6) {
        index.value = 1;
    }
}

const play = () => {
    next()
}

onMounted(() => {
    setInterval(play, 3500)
})
</script>

<template>
    <div class="box">
        <div class="info1">
            <img :src="info_list[index].src">
            <div class="describe">
                <h3>{{ info_list[index].title }}</h3>
                <p>{{ info_list[index].describe }}</p>
            </div>
            <div class="pre" @click="pre">&lt;</div>
            <div class="next" @click="next">&gt;</div>
        </div>

        <div class="info2">
            <div class="event-item" v-for="(item, index) in Events" :key="index">
                <span>
                    <div class="part1">{{ item.date.slice(8, 10) }}</div>
                    <div class="part2">{{ item.date.slice(0, 4) }}.{{ item.date.slice(5, 7) }}</div>
                </span>
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
        overflow: hidden;
        position: relative;

        img {
            width: $box1-width;
            height: $box-height;
            transition: scale 1s;

            &:hover {
                scale: 1.05;
            }
        }

        .describe {
            width: $box1-width;
            background-image: linear-gradient(to top, rgb(30, 30, 30), transparent);
            color: #fff;
            position: absolute;
            bottom: 0;
            padding: 0 40px;

            h3 {
                font-size: 0.9em;
                padding: 0;
                margin: 0;
            }

            p {
                margin: 20px 0px;
                font-size: 0.8em;
            }
        }

        .pre {
            position: absolute;
            font-size: 2em;
            left: 10px;
            top: 200px;
            width: 24px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: #444343;
            border-radius: 8px;
            cursor: pointer;

            &:hover {
                background-color: #c4c4c4;
                color: #fff;
            }
        }

        .next {
            position: absolute;
            font-size: 2em;
            right: 10px;
            top: 200px;
            width: 24px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: #444343;
            border-radius: 8px;
            cursor: pointer;

            &:hover {
                background-color: #c4c4c4;
                color: #fff;
            }
        }

    }

    .info2 {
        box-sizing: border-box;
        width: $box2-width;
        height: $box-height;
        background-color: #ececec;

        .event-item {
            width: $box2-width;
            display: flex;
            flex-direction: row;
            border-bottom: 1px solid rgb(223, 223, 223);
            padding: 12px 0;

            span {
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