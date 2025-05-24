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
                <img src="@/assets/icon/water-logo.svg" alt="logo" />
                <img src="@/assets/icon/logo-text.svg" alt="logo-text" />
            </div>
            <nav>
                <a href="#" v-for="(item, index) in nav_list" :key="index">
                    <span>{{ item }}</span>
                    <div></div>
                </a>
            </nav>
        </div>
    </header>

</template>

<style lang="scss" scoped>
$header-height: 60px;

header {
    height: $header-height;
    background-color: #fff;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

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
            align-items: center;
        }

        nav {
            display: flex;
            flex-direction: row;
            gap: 20px;

            a {
                font-size: 1.2em;
                color: #000;


                span {
                    display: inline-block;
                    height: $header-height;

                }

                div {
                    width: 100%;
                    height: 2px;

                }

                &:hover {
                    color: $primary-color;

                    div {
                        background-color: $primary-color;
                    }
                }
            }
        }
    }

}
</style>