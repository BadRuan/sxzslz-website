<template>
    <div class="box">
        <div class="txt">
            <p>（一）宣传、贯彻党和国家有关水利方针、政策等法律法规； </p>
            <p>（二）负责所在区域的水利规划、小型农田水利工程设计、施工等农田水利基本建设技术业务工作； </p>
            <p>（三）负责水政和水资源管理工作等； </p>
            <p> （四）负责辖区内工农业生产灌排水。</p>
        </div>

        <div class="pic">
            <img src="@/assets/pic/duty.jpg" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
$box-height: 340px;
$txt-width: 400px;
$pic-width: 600px;

.box {
    width: $box-width;
    height: $box-height;
    display: flex;
    justify-content: space-between;
    background-color: #dddddd;
    overflow: hidden;


    .txt {
        width: $txt-width;
        height: $box-height;
        box-sizing: border-box;
        padding: 40px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #F5F5F5;
    }

    .pic {
        width: $pic-width;
        height: $box-height;

        img {
            transition: scale .5s;
            width: 100%;
            height: 100%;

            &:hover {
                scale: 1.05;
            }
        }

    }


}
</style>