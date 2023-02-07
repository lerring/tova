<template>
    <view class="sdodt-header">
        <view class="header">
            <image class="return-png" src="../../static/icon/left.png" mode="aspectFill"></image>
            <view class="title">
                <view v-if="title">{{title}}</view>
                <slot v-else name="title"></slot>
            </view>
        </view>
        <slot name="mainContent">
        </slot>
    </view>
</template>

<script>
export default {
    name:"sdodtHeader",
    props:['title'],
}
</script>

<style lang="scss" scoped>
.sdodt-header{
    width: 100vw;
    min-height: 100vh;
    height: auto;
    background-color: #F9FCFF;
}
.header{
    position: relative;
    height: 53rpx;
    background-color: #FFFFFF;
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
</style>