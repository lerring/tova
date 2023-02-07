<template>
    <sdodtHeader :bgColor="bgColor" class="infoPage">
        <view slot="title" @click="handleBack" class="head">完善信息</view>
		<view slot="tips" >请如实填写测试者的个人信息以保证测试结果尽可能准确</view>
        <view slot="mainContent">
			<view class="infoOne" v-show="currentPage===0">
                使用者的年龄是
                <view class="picker">
                    <u-picker :show="show" :columns="columns" :showToolbar="showToolbar" :defaultIndex="defaultIndex"  @change="changeHandler"></u-picker>
                </view>
                <view style="margin-left:45rpx ;">岁</view>
                <view class="btnRight btnFont"  @click="handleToInfoTwo">
                    下一步
                </view>
            </view>
            
            <view class="infoTwo" v-show="currentPage===1">
                <view class="chooseTips">
                    请选择使用者性别
                </view>
                <view :class="{'sexImg':true, 'sexImg-active': sexFlag}" style="margin-left:206rpx" @click="sexIsBoy">
                    <view class="sexImg-img" :style="{background: 'url('+ boyImg+')' }"></view>
                    <view class="sexImg-boy">男</view>
                </view>
                <view :class="{'sexImg':true, 'sexImg-active': !sexFlag}" style="margin-left:23rpx" @click="sexIsGirl">
                    <view class="sexImg-img " :style="{background: 'url('+ girlImg+')' }"></view>
                    <view class="sexImg-girl">女</view>
                </view>
                <view class="btnLeft btnFont"  @click="handleToInfoOne">
                    上一步
                </view>
                <view class="btnRight btnFont"  @click="handleToInfoThree">
                    下一步
                </view>
            </view>

            <view class="infoThree" v-show="currentPage===2">
                <view class="chooseTips">
                    使用者是否参与过干预治疗
                </view>
                <view class="infoThreeBtn">
                    <view :class="{'isJoin':true,'isActive':hasJoined}" @click="hasJoinedTreatment">参与过</view>
                    <view :class="{'isJoin':true,'isActive':!hasJoined,'mt16':true}" @click="hasntJoinedTreatment">没参与过</view>
                </view>
                <view class="btnLeft btnFont"  @click="handleToInfoTwo">
                    上一步
                </view>
                <view class="btnRight btnFont"  @click="handleToTestHomePage">
                    开始体验
                </view>
            </view>
		</view>
    </sdodtHeader>
</template>
<script>
    import sdodtHeader from "@/components/sdodtHeader/sdodtHeader";
    export default{
        components:{sdodtHeader},
        data:function(){
            return {
                bgColor:'#367BF9',
                show: true,
                showToolbar:false,
                defaultIndex:[11],
                userAge:0,
                columns: [
                    ['0', '1', '2','3','4','5', '6', '7','8','9','10', '11', '12','13','14','15', '16', '17','18','19','20', '21', '22','23','24',]
                ],
                currentPage:0,
                hasJoined:true,
                boyImg:'../../static/pic/boyHigh.png',
                girlImg:'../../static/pic/girlLow.png',
                sexFlag:true,
            }
        },
        methods:{
            changeHandler(item){
                this.userAge=item.value.toString()-0
            },
            handleToInfoOne(){
                this.currentPage=0
            },
            handleToInfoTwo(){
                this.currentPage=1
            },
            handleToInfoThree(){
                this.currentPage=2
            },
            handleToTestHomePage(){
                uni.navigateTo({
                    url:'/pages/homePage/homePage'
                })
            },
            hasJoinedTreatment(){
                this.hasJoined=true
            },
            hasntJoinedTreatment(){
                this.hasJoined=false
            },
            handleBack(){
                uni.navigateBack()
            },
            sexIsBoy(){
                this.sexFlag=true
                this.boyImg='../../static/pic/boyHigh.png'
                this.girlImg='../../static/pic/girlLow.png'
            },
            sexIsGirl(){
                this.sexFlag=false
                this.boyImg='../../static/pic/boyLow.png'
                this.girlImg='../../static/pic/girlHigh.png'
            }
        },
    }
</script>

<style lang="scss" scoped>
    .head{
        position: absolute;
        z-index: 999;
        width: 60rpx;
        bottom: -4rpx;
        left: -30rpx;
        padding-left: 30rpx;
    }
    .infoPage{
        background: #F9FCFF;
    }
    .infoOne{
        font-size: 31rpx;
        color: #000000;
        margin-left: 163rpx;
        margin-top: 143rpx;
        display: flex;
    }
    .picker{
        background-color: rgba(0, 0, 0, 0) !important;
        width: 75rpx !important;
    }
    .uni-picker-view-indicator{
        position: absolute;
        left: 40%;
        width: 20%;
        z-index: 3;
        pointer-events: none;
        height: 56rpx !important;
    }
    .u-popup__content[data-v-52d4ddd1] {
        background-color: #fff;
        position: relative; 
        width: 75rpx;
    }
    .btnRight{
        width: 74rpx;
        height: 31rpx;
        border-radius: 18rpx;
        opacity: 1;
        border:0.5px solid #295FD2;
        position: fixed;
        right: 47rpx;
        bottom: 47rpx;
    }
    .btnLeft{
        width: 74rpx;
        height: 31rpx;
        border-radius: 18rpx;
        opacity: 1;
        border: 0.5px solid #295FD2;
        position: fixed;
        left: 47rpx;
        bottom: 47rpx;
    }
    .btnFont{
        font-size: 15rpx;
        font-weight: 500;
        color: #295FD2;
        text-align: center;
        line-height: 31rpx;
    }
    .chooseTips{
        font-size: 19rpx;
        font-weight: 500;
        color: #222222;
        text-align: center;
        margin-top: 32rpx;
    }
    .isJoin{
        width: 231rpx;
        height: 70rpx;
        background: #FFFFFF;
        border-radius: 5rpx;
        border: 1px solid #BFBFBF;
        font-size: 19rpx;
        font-weight: 500;
        text-align: center;
        line-height: 70rpx;
    }
    .isActive{
        border: 1px solid #367BF9;
        color: #367BF9;
    }
    .infoThreeBtn{
        margin:38rpx 50%;
        transform: translateX(-115rpx);
    }
    .sexImg{
        width: 157rpx;
        height: 157rpx;
        border-radius: 9rpx;
        display: inline-block;
        margin-top: 38rpx;
        border: 0.1rpx solid #C3C3C3;
        position: relative;
        &-sex{
            font-size: 14rpx;
            font-family: PingFang SC-Medium, PingFang SC;
            font-weight: 500;
        }
        &-boy,
        &-girl{
            position: absolute;
            right: 71rpx;
            bottom: 15rpx;
        }
        &-active{
            color: #367BF9;
            border: 0.1rpx solid #367BF9;
        }
    }

    ::v-deep {
        .sexImg-img{
            height: 60%;
            background-size: contain !important;
            background-repeat: no-repeat !important;
            margin: 20rpx 49rpx;
            background-position-y: center;
        }
        .u-fade-enter-to{
            background-color: rgba(0, 0, 0, 0) !important;
        }
        .u-picker__view__column__item[data-v-d45639b2] {
            font-size:29rpx;
            display: inline-block;
            color: #367BF9;
            width: 75rpx;
            height: 56rpx !important;
            line-height: 56rpx !important;
        }
        .uni-picker-view-indicator{
            width: 0;
            height: 56rpx !important;
            margin: 9rpx 25rpx;
        }
        uni-picker-view-column{
            height:190rpx
        }
        .u-picker__view__column__item{
            height: 56rpx !important; 
            line-height: 56rpx !important; 
            font-weight: bold !important;
        }
        .uni-picker-view-content {
            top: 0rpx;
            width: 75rpx;
        }
        .u-picker__view__column{
            width: 75rpx !important;
            // height: 190rpx !important;
        }
        .u-transition{
            width: 75rpx !important;
            position: relative !important;
            left: 404rpx;
            bottom:72rpx !important;
            margin: 0 23rpx;
        }
        .u-picker__view{
            height: 190rpx !important;
        }
        .u-transition{
            transition-duration: 0ms !important;
        }
    }
</style>