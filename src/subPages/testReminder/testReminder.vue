<template>
    <view class="reminderPage">
        <view class="remind">
            <view class="remind-title">
                正式测试时长为20分钟
                <image class="remind-close" src="../../static/icon/close.png" mode="aspectFill" @click="handleBack"/>
            </view>
            <view class="splitLine"></view>
            <view class="remind-alert"></view>
            <view class="remind-btn white" @click="testParden">稍后再测</view>
            <view class="remind-btn blue" @click="testNow">现在开始</view>
        </view>
    </view>
</template>

<script>
export default {
    methods:{
        handleBack(){
            uni.navigateTo({
                url:'/pages/homePage/homePage'
            })
        },
        testParden(){
            uni.navigateTo({
                url:'/pages/homePage/homePage'
            })
        },
        testNow(){
            uni.navigateTo({
                url:'/subPages/countDown/countDown'
            })
            uni.clearStorage();
        },
    }
}
</script>

<style lang="scss" scoped>
.reminderPage{
    width: 100vw;
    min-height: 100vh;
    background-color: #bdbdbd;
}
.remind{
    width: 316rpx;
    height: 344rpx;
    background: #FFFFFF;
    border-radius: 9rpx;
    position: relative;
    top: 43rpx;
    margin: 0 auto;
    z-index: 10;
    &-title{
        height: 45rpx;
        background: #FFFFFF;
        border-radius: 8px 8px 0px 0px;
        font-size: 13rpx;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: bold;
        color:black;
        line-height: 45rpx;
        text-align: center;
        position: relative;
    }
    &-close{
        width: 9rpx;
        height: 9rpx;
        position: absolute;
        top: 18rpx;
        right: 19rpx;
    }
    &-alert{
        width: 270rpx;
        height: 216rpx;
        margin: 13rpx auto;
        background: url('../../static/pic/testReminder.png') no-repeat;
        background-size: cover;
        position: relative;
    }
    &-btn{
        width: 86rpx;
        height: 30rpx;
        border-radius: 16rpx;
        opacity: 1;
        border: 1px solid #1A7AF9;
        display: inline-block;
        margin-top: 10rpx;
        line-height: 30rpx;
        text-align: center;
        font-size: 12rpx;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
    }
}
.splitLine{
    width: 316rpx;
    height: 0.1rpx;
    opacity: 1;
    background: #DEDEDE;
}
.white{
    color: #1A7AF9;
    margin-left: 105rpx;
}
.blue{
    background: #1A7AF9;
    margin-left: 12rpx;
    color: #FFFFFF;
}
</style>