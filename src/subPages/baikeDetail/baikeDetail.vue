<template>
    <sdodtTitle>
        <view slot="title" @click="handleBack" class="head">Ccmd-3诊断标准</view>
        <view slot="mainContent">
            <view class="pageContent">
                <view class="pageContent-CCMD">
                    <view class="CCMD-title">
                        CCMD-3(中国精神障碍分类与诊断标准)
                    </view>
                    <view class="CCMD-content">
                        注意缺陷与多动障碍（儿童多动症）是发生于儿童时期 <view class="CCMD-strong">（多在3岁左右）</view> ，与同龄儿童相比，表现为同时有明显<view class="CCMD-strong">注意集中困难</view>、注意特续时间短暂，及活动过度或冲动的一组综合征。症状发生在各种场合（如家里、学较和诊室）， <view class="CCMD-strong">男童明显多于女童</view>。具体可通过以下症状标准进行评价：
                    </view>
                    <image src="../../static/pic/homeChatu.png" mode="aspectFill" class="CCMD-insertImg"/>
                </view>

                <view class="pageContent-attention">
                    <view class="attention-title">
                        <image src="../../static/icon/baikeBlue.png" mode="aspectFill" class="attention-insertImg"/>
                        注意障碍-至少有下列4项 
                    </view>
                    <view class="attention-content" >
                        <view class="attention-text" v-for="(item,index) in attention_disorder" :key="index">
                            {{item}}
                        </view>
                    </view>
                </view>

                <view class="pageContent-hyperactivity">
                    <view class="attention-title">
                        <image src="../../static/icon/baikeOrange.png" mode="aspectFill" class="attention-insertImg"/>
                        多动障碍：至少有下列4项
                      </view>
                    <view class="attention-content" >
                        <view class="attention-text" v-for="(item,index) in hyperactive_disorder" :key="index" style="background: rgba(255,247,237,0.4);"> 
                            {{item}}
                        </view>
                    </view>
                </view>
            </view>
            <view class="blank"></view>
        </view>
    </sdodtTitle>
</template>

<script>
import sdodtTitle from '@/components/sdodtTitle/sdodtTitle'
export default {
    components:{sdodtTitle},
    data() {
        return {
            attention_disorder:[
                '1.学习时容易分心，听见任何外界声音都要去探望。',
                '2.上课很不专心听讲，常东张西望或发呆。',
                '3.做作业拖拉，边做边玩，作业又脏又乱，常少做或做错。',
                '4.不注意细节，在做作业或活动中出现粗心大意的错误。',
                '5.丢失或不爱惜东西，如常把衣服、书本等弄得很脏很乱。',
                '6.难以始终遵守指令，完成家庭作业或家务劳动等。',
                '7.做事难于持久，常常一件事没做完，又去干别的事。',
                '8.与他说话时，常常心不在焉。似听非听。',
                '9.在日常活动中常常丢三拉四。'
            ],
            hyperactive_disorder:[
                '1.需要静坐的场合难于静坐或在座位上扭来扭去',
                '2.上课时常小动作，或玩东西或与同学讲悄悄话',
                '3.话多好插嘴，别人问话未完成就抢着回答',
                '4.十分喧闹，不安静的玩耍',
                '5.难以遵守集体活动的自序和纪律，如游戏时不能等待',
                '6.干扰他人的活动',
                '7.好与小朋友打斗，易于同学发生纠纷，不受同伴欢迎',
                '8.容易兴奋和冲动，有一些过火的行为',
                '9.在不适的场合奔跑或者登高爬楼，好冒险，易出事故'
            ]
        }
    },
    methods:{
        handleBack(){
            uni.navigateTo({
                url:'/pages/homePage/homePage'
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
.pageContent{
    margin: 14rpx 53rpx 0 53rpx;
    height: auto;
    &-CCMD,
    &-attention,
    &-hyperactivity{
        width: 598rpx;
        background: #FFFFFF;
        border-radius: 5rpx ;
        padding: 14rpx 23rpx 19rpx 23rpx;
    }
    &-attention{
        margin-top: 14rpx;
    }
    &-hyperactivity{
        margin-top: 24rpx;
    }
}
.CCMD{
    &-title{
        font-size: 19rpx;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #222222;
    }
    &-content{
        width: 405rpx;
        border-radius: 5rpx;
        margin-top: 7rpx;
        text-align: justify;
        font-size: 11rpx;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
    }
    &-strong{
        display: inline-block;
        font-weight: bold;
        color: #222222;
    }
    &-insertImg{
        height: 90rpx;
        width: 90rpx;
        position: absolute;
        top: 88rpx;
        right: 107rpx;
    }
}
.attention{
    &-title{
        font-size: 14rpx;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #222222;
    }
    &-content{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    &-text{
        width: 166rpx;
        background: rgba(237,246,255,0.4);
        font-size: 11rpx;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #151B27;
        margin-top: 14rpx;
        padding: 12rpx 14rpx;
    }
    &-insertImg{
        width: 15rpx;
        height: 15rpx;
        border-radius: 2rpx;
        position: relative;
        top: 3rpx;
        margin-right: 5rpx;
    }
}
.blank{
    height: 35rpx;
}
</style>