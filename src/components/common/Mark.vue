<template>
    <div class="mark">
        <div class="mark-second">
            <slot name="second"></slot>
        </div>
        <div class="mark-first">
            <slot name="first"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$line-width: 48px;

.mark {
    display: block;
    width: auto;
    margin: 20px 0 10px 0;
    border-left: 2px solid $primary-color;
    padding-left: 20px;

    .mark-first {
        font-size: 1.5em;
        color: #000;
    }

    .mark-second {
        font-size: 1em;
        color: #808080;
    }

    .line {
        margin-top: 8px;
        width: 0;
        height: 2px;
        background-color: #2A82E4;
        transition: width 0.8s;
    }

}
</style>