<template>
    <sdodtTitle>
        <view slot="title" @click="handleBack" class="head">报告详情</view>
        <view slot="mainContent">
            <view class="content">
                <view class="content-header">
                    <view class="header-left">
                        <view class="header-leftUp">
                            <view class="header-leftGray">本次测试： </view>
                            <view class="header-leftBlue">{{ resJudge }}</view>
                        </view>
                        <view class="header-leftDown">
                            注意力功能障碍
                        </view>
                    </view>
                    <view class="header-right" @click="handleToSuggestPage">
                        <image src="../../static/icon/bluetips.png" mode="aspectFill" class="header-tips" />
                        <view class="header-suggest">
                            查看干预建议
                        </view>
                    </view>
                </view>
                <view class="content-showRes">
                    <view class="ascData showRes-left">
                        <view class="showRes-title">ACS值:{{ascData}}
                            <image src="../../static/icon/question.png" mode="aspectFill" class="showRes-tips" @click="ascExplain"/>
                            <u-popup :show="isShowAscExplain" mode="center"  @close="close" :round="10" class="popup" >
                                <view >
                                    <image src="../../static/pic/ACSrate.png" mode="aspectFill" class="popup-img" />  
                                    <view class="popup-explain">注意力比较分数ACS是综合测试各四分位的特征值使用特有算法模型 构建的注意力得分模块测试以分值0为基准线，将测试结果划分为以下五个症状级别，根据症状程度会给予您干预治疗建议。</view> 
                                    <view class="popup-button" @click="close">我知道了</view>
                                </view>
                            </u-popup>
                        </view>
                        <view class="ascData-content">
                            <view class="ascData-title">反应速度：</view>
                            <view class="ascData-data">{{ responseTime }}</view>
                            <view class="ascData-judge" :class="responseTime>1?'ascData-orangeFont':'ascData-blueFont'">{{ responseJudge }}</view>
                        </view>
                        <view class="ascData-content">
                            <view class="ascData-title">反应敏感度：</view>
                            <view class="ascData-data">{{ sensitive }}</view>
                            <view class="ascData-judge" :class="sensitive>1?'ascData-orangeFont':'ascData-blueFont'">{{ sensitiveJudge }}</view>
                        </view>
                        <view class="ascData-content">
                            <view class="ascData-title">前后反应差异度：</view>
                            <view class="ascData-data">{{ reactionDiff }}</view>
                            <view class="ascData-judge" :class="reactionDiff>3?'ascData-orangeFont':'ascData-blueFont'">{{ reactionJudge }}</view>
                        </view>
                    </view>
                    <view class="ascRadar showRes-center">
                        <view class="showRes-title">ACS数据雷达图</view>
                        <view class="charts-radabox">
                            <qiun-data-charts type="radar" :opts="opts" :chartData="chartRadarData"/>
                        </view>
                    </view>
                    <view class="ascCensus showRes-right">
                        <view class="showRes-title">ACS目标统计</view>
                        <view class="charts-linebox">
                            <qiun-data-charts type="line" :opts="opts" :chartData="chartLineData"/>
                        </view>
                        
                    </view>
                </view>
                <view class="tipsLeft tips">测试时间：2022-3-12｜建议7天后再做测试</view>
                <view class="tipsRight tips">测试结果可能受环境个人因素影响，如需专业诊断的前往医院就诊</view>
            </view>
        </view>
    </sdodtTitle>
</template>

<script>
import sdodtTitle from '@/components/sdodtTitle/sdodtTitle'
export default {
    components:{sdodtTitle},
    data() {
        return {
            resJudge:'注意力模块最为薄弱',
            ascData:3.5,
            responseTime:3.12,
            responseJudge:'偏高',
            sensitive:1.21,
            sensitiveJudge:'偏高',
            reactionDiff:2.5,
            reactionJudge:'正常',
            isShowAscExplain:false,
            // 雷达图数据
            chartRadarData: {},
            // 折线统计图数据
            chartLineData: {},
            opts: {
                color: ["#4686FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
                padding: [15,10,0,15],
                dataLabel: false,
                enableScroll: false,
                dataPointShape:false,
                fontSize:9,
                fontColor:'#333333',
                
                legend: {
                    show: false,
                },
                xAxis: {
                    disableGrid: true,
                    fontSize:9
                },
                yAxis: {
                    dashLength: 2,
                    disableGrid: true,
                    splitNumber:3,
                    padding:6,
                },
                extra: {
                    radar: {
                        gridType: "circle",
                        gridColor: "#f3f3f4",
                        gridCount: 4,
                        opacity: 0.35,
                        max: 200,
                        labelShow: true,
                        border:true,
                        labelPointColor:'#222222',
                        borderWidth:1,
                        radius:60,
                        fontSize:8,
                    },
                    line: {
                        type: "curve",
                        width: 1,
                        activeType: "hollow",
                    },
                }
            }
        }
    },
    methods:{
        getServerData() {
      //模拟从服务器获取雷达图数据时的延时
            setTimeout(() => {
                //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
                let resRada = {
                    categories: ["注意力","反应速度","感知敏感度","专注稳定性","冲动控制"],
                    series: [
                        {
                            name: "",
                            data: [45,170,175,150,177]
                        }
                    ]
                };
                this.chartRadarData = JSON.parse(JSON.stringify(resRada));
                let resLine = {
                    categories: ["1-5","5-10","10-15","15-20"],
                    series: [
                    {
                        name: "错误数",
                        data: [5,10,7,15]
                    },
                    {
                        name: "正确数",
                        data: [3,8,5,7]
                    },
                    {
                        name: "遗漏数",
                        data: [2,3,2,5]
                    }
                    ]
                };
                this.chartLineData = JSON.parse(JSON.stringify(resLine));
            }, 500);
        },

        handleBack(){
            uni.navigateBack()
        },
        handleToSuggestPage(){
            uni.$u.toast('待开发')
        },
        ascExplain(){
            this.isShowAscExplain=true
        },
        close(){
            this.isShowAscExplain=false
        },
    },
    onReady() {
        this.getServerData();
    },
}
</script>

<style lang="scss" scoped>
.content{
    font-family: PingFang SC-Regular, PingFang SC;
    width: 722rpx;
    height: calc(100vh - 80rpx);
    background: #FFFFFF;
    border-radius: 5rpx;
    margin-top: 13rpx;
    &-header{
        display: flex;
        align-items: center;
        width: 694rpx;
        height: 64rpx;
        background: #f8fbff;
        border-radius: 2rpx;
        position: relative;
        top: 15rpx;
        left: 15rpx;
        margin-bottom: 14rpx;
    }
    &-showRes{
        width: 694rpx;
        display: flex;
        padding-top: 14rpx;
        padding-left: 15rpx;
        
    }
}
.header{
    &-leftBlue,
    &-leftGray{
        display: inline-block;

    }
    &-leftBlue{
        font-size: 9rpx;
        font-weight: 500;
        color: #1D6FE9;
    }
    &-leftGray{
        font-size: 9rpx;
        color: #888888;
    }
    &-tips{
        width: 10rpx;
        height: 14rpx;
    }
    &-leftDown{
        width: 101rpx;
        height: 26rpx;
        background: #1D6FE9;
        border-radius: 2rpx;
        opacity: 1;
        line-height: 26rpx;
        text-align: center;
        font-size: 12rpx;
        font-weight: 500;
        color: #FFFFFF;
        margin-top: 5rpx;
    }
    &-leftUp,
    &-leftDown{
        margin-left: 14rpx;
    }
    &-right{
        position: absolute;
        right: 19rpx;
    }
    &-suggest{
        display: inline-block;
        color: #4690FD;
        border-bottom: 0.5px solid #4690FD;
        position: relative;
        left: 3rpx;
        bottom: 4rpx;
        font-size: 11rpx;
    }
}
.showRes{
    &-left,
    &-right{
        width: 197rpx;
    }
    &-left,
    &-center{
        margin-right: 14rpx;
    }
    &-center{
        flex: 1;
    }
    &-left,
    &-center,
    &-right{
        border-radius: 5rpx;
        border: 0.5rpx solid #e5e8ea;
    }
    &-tips{
        width: 14rpx;
        height: 14rpx;
        position: relative;
        left: 3rpx;
        top: 2rpx;
    }
    &-title{
        width: 85.7%;
        height: 40rpx;
        line-height: 40rpx;
        border-bottom: 0.5rpx solid #e5e8ea;
        text-align: center;
        margin-left: 7%;
    }
}
.ascData{
    &-content{
        padding-left: 10%;
        padding-right: 10%;
        height: 60rpx;
    }
    &-title{
        font-size: 9rpx;
        font-weight: 300;
        color: #888888;
        padding-top: 10rpx;
    }
    &-data{
        font-size: 15rpx;
        font-family: D-DIN-DIN-Bold, D-DIN-DIN;
        font-weight: bold;
        color: #222222;
        display: inline-block;
        margin-top: 5rpx;
    }
    &-judge{
        font-size: 9rpx;
        font-weight: 500;
        float: right;
        margin-top: 8rpx;
    }
    &-blueFont{
        color: #1D6FE9;
    }
    &-orangeFont{
        color: #FC6D4C;
    }
}
::v-deep{
    .u-popup__content[data-v-52d4ddd1]{
        width: 400rpx;
        height: 268rpx;
    }
}
.popup{
    &-img{
        width: 344rpx;
        height: 113rpx;
        background: rgba(162,162,162,0);
        border-radius: 7rpx;
        padding-top: 23rpx;
    }
    &-explain{
        font-size: 11rpx;
        color: #333333;   
        line-height: 19rpx;
        padding-left: 28rpx;
        padding-right: 28rpx;
        text-align: justify;
        letter-spacing: -0.1rpx;
    }
    &-button{
        width: 156rpx;
        height: 28rpx;
        background: rgba(26,122,249,0);
        border-radius: 16rpx;
        border: 0.5rpx solid #dedede;
        line-height: 28rpx;
        margin-top: 19rpx;
        margin-left: 122rpx;
        font-size: 12rpx;
        color: #666666;
    }
}
.tipsRight{
    float: right;
    padding-right: 13rpx;
}
.tipsLeft{
    float: left;
    padding-left: 15rpx;
}
.tips{
    font-size: 9rpx;
    font-weight: 300;
    color: #777777;
    margin-top: 11rpx;
}
.charts-radabox {
    height:150rpx;
    width: 240rpx;
    padding-left: 20rpx;
    padding-top: 10rpx;
}
.charts-linebox {
    height:150rpx;
    width: 180rpx;
    padding-left: 10rpx;
    padding-top: 20rpx;
}
</style>