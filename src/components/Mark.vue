<template>
    <div class="mark">
        <div class="mark-second">
            <slot name="second"></slot>
        </div>
        <div class="mark-first">
            <slot name="first"></slot>
        </div>
        <div class="line"></div>
    </div>
</template>

<style lang="scss" scoped>
$line-width: 48px;

.mark {
    display: block;
    width: auto;
    margin: 16px 0;
    margin-left: 20px;
    animation: move 2s;

    .mark-first {
        font-size: 1.5em;
        color: #000;
    }

    .mark-second {
        font-size: 1em;
        color: #2f3182;
    }

    .line {
        margin-top: 8px;
        width: 0;
        height: 2px;
        background-color: #2A82E4;
        transition: width 0.8s;
    }


    &:hover .line {
        width: $line-width;
        ;
    }
}

@keyframes move {
    0% {
        margin-left: 0px;
    }

    100% {
        margin-left: 20px;
    }
}
</style>