<script setup lang="ts">
import News from '@/components/home/News.vue';
import Features from '@/components/home/Features.vue';
import Overview from '@/components/home/Overview.vue';
import Duty from '@/components/home/Duty.vue';
</script>

<template>
    <News></News>

    <div class="section2">
        <div>
            <Features></Features>
        </div>
        <div>
            <Overview></Overview>
        </div>
    </div>


    <Duty></Duty>
</template>

<style lang="scss" scoped>
.section2 {
    display: flex;
    flex-direction: row;
}
</style>