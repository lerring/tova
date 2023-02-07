<template>
    <view class="sdodt-header">
        <view class="header">
            <image class="return-png" src="../../static/icon/left.png" mode="aspectFill"></image>
            <view class="title">
                <view v-if="title">{{title}}</view>
                <slot v-else name="title"></slot>
            </view>
        </view>
        <view class="tipsBar" :style="{'backgroundColor':bgColor}">
            <view v-if="tips">{{tips}}</view>
            <slot v-else name="tips"></slot>
        </view>
        <slot name="mainContent" class="mainContent"></slot>
    </view>
</template>

<script>
export default {
    name:"sdodtHeader",
    props:['title','bgColor','tips'],
}
</script>

<style lang="scss" scoped>
.sdodt-header{
    width: 100vw;
    height: 100vh;
}
.header{
    position: relative;
    height: 53rpx;
}
.return-png{
    width: 6rpx;
    height: 13rpx;
    margin-left: 18rpx;
    margin-top: 29rpx;
}
.title{
    display: inline-block;
    margin-left:12rpx ;
    font-size: 13rpx;
    font-weight: 500;
    color: #333333;
    position: relative;
    bottom: 2rpx;
}
.tipsBar{
    width: 100%;
    // position: relative;
    height: 32rpx;
    // top: 29rpx;
    // margin-top:8rpx;
    text-align: center;
    line-height: 33rpx;
    color: #FFFFFF;
}
</style>