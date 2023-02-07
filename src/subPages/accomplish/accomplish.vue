<template>
    <view class="page">
        <view class="content">
            <view class="content-title">恭喜您完成全部测试</view>
            <view class="content-tips">
                想要更准确的测试结果请完成 <br>
                量表测试
            </view>
            <view class="run">
                <view class="content-runOne" @click="gaugeTest">量表测试</view>
                <view class="content-runTwo" @click="myReport">我的报告</view>
                <view class="content-runThree" @click="endTest">结束测试</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            result:{},
        }
    },
    methods:{
        gaugeTest(){
            uni.$u.toast('页面待开发')
        },
        myReport(){
            uni.$u.toast('页面待开发')
        },
        endTest(){
            uni.navigateTo({
                url:'/pages/homePage/homePage'
            })
            this.result={...localStorage};
        }
    }
}
</script>

<style lang="scss" scoped>
.page{
    width: 100vw;
    min-height: 100vh;
    background-color: #bdbdbd;
}
.content{
    width: 195rpx;
    height: 184rpx;
    background: #FFFFFF;
    border-radius: 7rpx;
    opacity: 1;
    position: relative;
    top: 125rpx;
    text-align: center;
    &-title{
        font-size: 12rpx;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #222222;
        position: absolute;
        top: 23rpx;
        width: 100%;
        text-align: center;
    }
    &-tips{
        font-size: 9rpx;
        font-family: PingFang SC-Light, PingFang SC;
        font-weight: 300;
        color: #222222;
        position: absolute;
        top: 42rpx;
        width: 100%;
        text-align: center;
    }
    &-runOne,
    &-runTwo,
    &-runThree{
        font-size: 9rpx;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #1A7AF9;
        position: absolute;
        width: 100%;
        text-align: center;
        height: 33rpx;
        line-height: 33rpx;
    }
    &-runOne{
        top: 86rpx;
        border-top: 0.1rpx solid #e6e6e7;
        border-bottom: 0.1rpx solid #e6e6e7;
    }
    &-runTwo{
        top: 118rpx;
        border-bottom: 0.1rpx solid #e6e6e7;
    }
    &-runThree{
        color: #F91A1A;
        top: 151rpx;
    }
}
</style>