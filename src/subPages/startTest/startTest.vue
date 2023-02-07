<template>
    <view class="startTestPage">
        <view class="startTestPage-popup">
            <view class="startTestPage-tips" style="white-space:pre-line; ">
                {{ tips }}
            </view>
            <view class="bottom">
                <view class="bottom-left" @click="handleToStartTestPage">开始测试</view>
                <view class="bottom-right" @click="handleToContinueTest">继续练习</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            tips:'',
            wrongNum:0
        }
    },
    methods:{
        handleToStartTestPage(){
            uni.navigateTo({
                url:'/subPages/testReminder/testReminder'
            })
        },
        handleToContinueTest(){
            uni.navigateTo({
                url:'/subPages/countDown/countDownTest',
            })
        },
    },
    created(){
        var that=this
        uni.getStorage({    
            key: 'errTime',
            success: function (res) {
                that.wrongNum=res.data
                if(res.data>5){
                    that.tips=`很遗憾！您的失误次数有${res.data}次 
                    建议重新进行练习`
                }else{
                    that.tips=`太棒啦！您的失误次数只有${res.data}次 
                    建议直接进入正式测试`
                }
            }
        });
    },
}
</script>

<style lang="scss" scoped>
    .startTestPage{
        width: 100vw;
        min-height: 100vh;
        background-color: #bdbdbd;
        &-popup{
            width: 195rpx;
            height: 104rpx;
            background: #FFFFFF;
            border-radius: 7rpx;
            opacity: 1;
            position: relative;
            top: 158rpx;
            margin: 0rpx auto;
        }
        &-tips{
            height: 30rpx;
            font-size: 11rpx;
            font-family: PingFang SC-Regular, PingFang SC;
            color: #222222;
            line-height: 15rpx;
            text-align: center;
            position: relative;
            top: 22rpx;
        }
    }
    .bottom{
        height: 33rpx;
        position: absolute;
        bottom: 0;
        border-radius: 0 0 7rpx 7rpx;
        font-size: 9rpx;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #1A7AF9;
        display: flex;
        width: 100%;
        &-left,
        &-right{
            width: 50%;
            line-height: 33rpx;
            text-align: center;
            border-top: 0.5rpx solid #e6e6e7;
        }
        &-left{
            border-right: 0.5rpx solid #e6e6e7;
        }
    }
</style>