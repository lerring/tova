<template>
    <sdodtTitle>
        <view slot="title" @click="handleBack" class="head">测试向导</view>
        <view slot="mainContent">
            <view class="guide">
                <view class="guide-blank"></view>
                <view class="guide-image"> 
                    <image src="../../static/pic/desk.png" mode="aspectFill" class="guide-desk"/>
                </view>
                <view class="guide-title">请跟随向导完成测试教程</view>
                <view class="guide-content">测试教程耗时3分钟，请做出正确的响应。正式测试 <br> 耗时20分钟，建议您在安静的环境进行测试。</view>
            </view>
            <view class="btn" @click="handleToGamePage">
                进入教程
            </view> 
        </view>
    </sdodtTitle>
</template>
<script>
import sdodtTitle from '@/components/sdodtTitle/sdodtTitle'
export default {
    components:{sdodtTitle},
    methods:{
        handleBack(){
            uni.navigateTo({
                url:'/pages/homePage/homePage'
            })
        },
        handleToGamePage(){
            uni.navigateTo({
                url:'/subPages/testGuide/preTestPage'
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.head{
    position: absolute;
    z-index: 999;
    width: 110rpx;
    bottom: -4rpx;
    left: -30rpx;
    padding-left: 30rpx;
}
.guide{
    width: 304rpx;
    background: linear-gradient(180deg, #D9EBFF 0%, #F4FAFF 39%, #FFFFFF 55%, #FFFFFF 100%);
    border-radius: 7rpx;
    opacity: 1;
    margin: 33rpx auto 0;
    &-image{
        width: 257rpx;
        height: 134rpx;
        background: #FFFFFF;
        border-radius: 8rpx;
        opacity: 1;
        margin-left: 23rpx;
    }
    &-desk{
        width: 74%;
        height: 70%;
        margin-top: 22rpx;
        margin-left: 36rpx;
    }
    &-blank{
        height: 23rpx;
    }
    &-title{
        margin-top: 12rpx;
        font-size: 16rpx;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        text-align: center;
    }
    &-content{
        height: 31rpx;
        font-size: 10rpx;
        font-family: PingFang SC-Regular, PingFang SC;
        color: #666666;
        margin: 7rpx auto;
        letter-spacing: -1rpx;
        text-align: center;
    }
}
.btn{
    width: 103rpx;
    height: 33rpx;
    background: #367BF9;
    border-radius: 5rpx;
    opacity: 1;
    margin:38rpx auto;
    text-align: center;
    line-height: 33rpx;
    font-size: 12rpx;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
}

</style>