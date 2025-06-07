<template>
    <header>
        <div class="heder-container">
            <div class="logo">
                <img src="@/assets/icon/water-logo.svg" alt="logo" />
                <img src="@/assets/icon/logo-text.svg" alt="logo-text" />
            </div>
            <nav>
                <RouterLink :to="{ name: 'home' }">
                    <span>网站首页</span>
                    <div></div>
                </RouterLink>
                <RouterLink :to="{ name: 'list' }">
                    <span>新闻发布</span>
                    <div></div>
                </RouterLink>
                <RouterLink :to="{ name: 'about' }">
                    <span>关于</span>
                    <div></div>
                </RouterLink>
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