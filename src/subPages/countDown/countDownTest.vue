<template>
    <div >
        <view class="content">
            <view class="title">测试倒计时</view>
            <view class="num">{{ Num }}</view>
        </view>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                Num:3
            }
        },
        methods:{
            countDown(){
                const temper=setInterval(() => {
                    this.Num--
                    if(this.Num==0){
                        clearInterval(temper)
                        uni.navigateTo({
                            url:'/pages/game/gameTest'
                        })
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
    .content{
        position: relative;
        top: 165rpx;
        text-align: center;
    }
    .title{
        font-size: 12rpx;
        color: #367BF9;
    }
    .num{
        font-size: 108rpx;
        font-weight: bold;
        color: #4383F9;
    }
</style>