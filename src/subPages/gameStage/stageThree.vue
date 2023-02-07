<template>
    <view class="stageOnePage">
        <view class="stagePage">
            <view class="stagePage-title">
                您已经完成3/4阶段
            </view>
            <image src="../../static/pic/stageThree.png" mode="aspectFill"  class="stagePage-img"/>
            <image src="../../static/pic/circle.png" mode="aspectFill"  class="stagePage-circle"/>
            <view class="stagePage-countDown">
                {{ num }}
            </view>
            <view class="stagePage-tips">
                不要松懈，做好准备 <br>
                即将进入下一阶段
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            num:10
        }
    },
    methods:{
        countDown(){
            const temper=setInterval(() => {
                    this.num--
                    if(this.num==0){
                        clearInterval(temper)
                        uni.navigateTo({
                            url:'/pages/game/gameFormalFour'
                        })
                        console.log('结束');
                    }
                }, 1000);
        }
    },
    mounted(){
        this.countDown()
    }
}
</script>

<style lang="scss" scoped>
.stageOnePage{
    width: 100vw;
    min-height: 100vh;
    background-color: #bdbdbd;
}
.stagePage{
    width: 316rpx;
    height: 344rpx;
    background: #FFFFFF;
    border-radius: 9rpx;
    opacity: 1;
    position: relative;
    top: 60rpx;
    margin: 0rpx auto;
    &-title{
        font-size: 20rpx;
        font-family: Alibaba PuHuiTi-Bold, Alibaba PuHuiTi;
        font-weight: bold;
        color: #4383F9;
        position: absolute;
        top: 42rpx;
        width: 100%;
        text-align: center;
    }
    &-img{
        width: 252rpx;
        height: 33rpx;
        margin-top: 88rpx;
        margin-left: 32rpx;
    }
    &-circle{
        width: 104rpx;
        height: 104rpx;
        position: absolute;
        left: 106rpx;
        top: 141rpx;
    }
    &-countDown{
        font-size: 52rpx;
        font-family: D-DIN-DIN-Bold, D-DIN-DIN;
        font-weight: bold;
        color: #4383F9;
        position: absolute;
        width: 100%;
        text-align: center;
        top: 158rpx;
    }
    &-tips{
        width: 100%;
        text-align: center;
        font-size: 11rpx;
        font-family: PingFang SC-Regular, PingFang SC;
        color: #444444;
        margin-top: 138rpx;
    }
}
</style>