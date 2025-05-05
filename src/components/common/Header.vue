<script lang="ts" setup>
const nav_list: string[] = [
    "网站首页",
    "组织管理",
    "安全管理",
    "工程管理",
    "运行维护管理",
    "信息化管理",
]
</script>

<template>
    <header>
        <div class="heder-container">
            <div class="logo">
                <img src="@/assets/icon/logo.svg" alt="LOGO" />
                <span class="logo-text">芜湖市鸠江区沈巷镇水利站</span>
            </div>
            <nav>
                <ul>
                    <li v-for="(item, index) in nav_list" :key="index">
                        <a href="#">{{ item }}</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 60px;
    background-color: #E5E5E5;

    .heder-container {
        width: $box-width;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        line-height: 60px;

        .logo {
            display: flex;
            flex-direction: row;
            justify-items: center;

            img {
                width: 44px;
            }
        }

        .logo-text {
            font-size: 1.4em;
        }

        nav ul {
            display: flex;
            flex-direction: row;
            gap: 20px;
            animation: move 2s;

            li a {
                font-size: 1.2em;
                color: #000;

            }
        }
    }

}

@keyframes move {
    0% {
        line-height: 0px;
    }

    100% {
        line-height: 60px;
    }
}
</style>