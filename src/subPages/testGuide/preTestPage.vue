<template>
    <sdodtHeader :bgColor=bgColor>
        <view slot="title" @click="handleBack" class="head">测试向导</view>
		<view slot="tips">{{ tips }}</view>
        <view slot="mainContent">
			<view class="game">
				<view :class="{'game-box1':true, 'game-isShowBox':isShowBox==1||isShowBox==3}"></view>
				<view class="game-splitLine"></view>
				<view :class="{'game-box2':true, 'game-isShowBox':isShowBox==2}"></view>
			</view>
            <view class="clickOnce" v-show="isShowBox==1" style="color: #367BF9;">
                <image src="../../static/icon/blueClick.png" mode="aspectFill" class="clickBlue"/>
                单机一次
            </view>
            <view class="clickOnce" v-show="isShowBox==3" style="color: #FF6638;">
                <image src="../../static/icon/orangeClick.png" mode="aspectFill" class="clickBlue"/>
                长按五秒
            </view>
            <view class="nextPage" @click="toTestPageTwo" v-show="isShowBox==1">
                下一步
                <image src="../../static/icon/right.png" mode="aspectFill" class="iconRight"/>
            </view>
            <view class="nextPage" @click="toTestPageThree" v-show="isShowBox==2">
                下一步
                <image src="../../static/icon/right.png" mode="aspectFill" class="iconRight"/>
            </view>
            <view class="nextPage" @click="toTryPage" v-show="isShowBox==3">
                试一试
                <image src="../../static/icon/right.png" mode="aspectFill" class="iconRight"/>
            </view>
            <u-popup :show="showPopup" mode="center" round="7rpx" bgColor="#FFFFFF">
                <view class="popup">
                    <view class="popup-tips">
                        是否退出测试向导
                    </view>
                    <view class="bottom">
                        <view class="bottom-left" @click="sureExit">确定退出</view>
                        <view class="bottom-right" @click="cancelExit">我再想想</view>
                    </view>
                </view>
            </u-popup>
		</view>
    </sdodtHeader>
</template>

<script>
import sdodtHeader from '@/components/sdodtHeader/sdodtHeader'
export default {
    components:{sdodtHeader},
    data() {
        return {
            bgColor:'#367BF9',
            tips:'当屏幕上方出现黑色方块时，迅速点击屏幕任意位置',
            isShowBox:1,
            showPopup:false
        }
    },
    methods:{
        handleBack(){
            this.showPopup=true
        },
        toTestPageTwo(){
            this.isShowBox=2,
            this.tips='当屏幕下方出现黑色方块时，不做任何操作',
            this.bgColor='#888888'
        },
        toTestPageThree(){
            this.isShowBox=3,
            this.tips='测试过程中需要退出测试，请长按屏幕任意位置5s',
            this.bgColor='#FF6638'
        },
        toTryPage(){
            uni.navigateTo({
                url:'/subPages/countDown/countDownTest'
            })
        },
        sureExit(){
            uni.navigateTo({
                url:'/pages/homePage/homePage'
            })
        },
        cancelExit(){
            this.showPopup=false
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
.game{
	&-box1,
	&-box2{
		width: 87rpx;
		height: 63rpx;
		background-color: #2D2D2D;
		margin: 48rpx 50%;
		transform: translateX(-50%);
		opacity: 0;
	}
	&-splitLine{
		width: 169rpx;
		height: 0.01rpx;
		background-color:#2D2D2D ;
		border: 0rpx solid #2D2D2D;
		margin: 0 50%;
		transform: translateX(-50%)
	}
	&-isShowBox{
		opacity: 1;
	}
}
.clickOnce{
    font-size: 9rpx;
    font-family: PingFang SC-Medium, PingFang SC;
    font-weight: 500;
    position: absolute;
    top: 179rpx;
    right: 125rpx;
}
.nextPage{
    width: 53rpx;
    height: 19rpx;
    background: rgba(255,255,255,0);
    border-radius: 2rpx;
    border: 0.5px solid #CCCCCC;
    position: absolute;
    line-height: 19rpx;
    text-align: center;
    bottom: 47rpx;
    right: 53rpx;
    font-size: 11px;
}
.clickBlue{
    position: absolute;
    width: 12rpx;
    height: 16rpx;
    left: -15rpx;
    bottom: 2rpx;
}
.iconRight{
    width: 4rpx;
    height: 9rpx;
    position: relative;
    left: 3rpx;
    top: 1rpx;
}
.popup{
    width: 195rpx;
    height: 104rpx;
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