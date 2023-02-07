<template>
    <view class="testHomePage">
        <!-- sideBar页面 -->
        <view class="sideBar tac pt33">
            <view class="sdodtLogo ml19 ">
                <image src="../../static/icon/sdodtLogo.png" mode="aspectFill" class="sdodtLogo"/>
            </view>
            <view class="sdodtBlueFont fs9 fw5 mt5">数药智能</view>
            <view style="margin-top:53rpx">
                <view class="sideTitle" v-for="(item,index) in homePageData" :key="index" @click="changeCurrPage(index)" >
                    <image :src="currPage==index? item.blueImg:item.img" mode="aspectFill" class="sideTitle-img"/>
                    <view class="sideTitle-title" :class="{'sdodtBlueFont':currPage==index}">{{ item.title }}</view>
                </view>   
            </view>
        </view>

        <view class="content">
            <!-- 测试页面 -->
            <view class="testPage" v-show="currPage==0">
                <view class="testPage-chatu">
                    <image src="../../static/pic/homeChatu.png" mode="aspectFill" class="testPage-insertImg"/>
                </view>
                <view class="diagnosis mt16">
                    <view class="diagnosis-swiper">
                        <view class="diagnosis-cnTitle">
                            CCMD-3(中国精神障碍分类与诊断标准)
                        </view>
                        <view class="diagnosis-enTitle">
                            Chinese mental disorder classification and diagnostic standards
                        </view>
                        <image src="../../static/pic/seeMore.png" mode="aspectFill" class="diagnosis-seeMore" @click="handleToBaikeDetail"/>
                    </view>
                 </view>
                 <view class="testPage-tovaTest mt14">
                    <view class="proTest pl23">
                        <image src="../../static/pic/orangeLong.png" mode="aspectFill" class="proTest-longImg"/>
                        <view class="proTest-title">
                            TOVA视觉测试
                        </view>
                        <view class="proTest-time">
                            (20min)
                        </view>
                        <view class="proTest-intro" style="background: rgba(255,247,237,0.4);">
                            医院都在使用的权威tova视觉测试 <br>
                            不受色彩、知识、年龄限制的存粹测试
                        </view>
                        <image src="../../static/pic/testOrange.png" mode="aspectFill" class="proTest-testImg" @click="handleToEyeTestPage"/>
                    </view>

                    <view class="proTest ml14 pl23">
                        <image src="../../static/pic/purpleLong.png" mode="aspectFill" class="proTest-longImg"/>
                        <view class="proTest-title">
                            Tova听觉测试
                        </view>
                        <view class="proTest-time">
                            (10min)
                        </view>
                        <view class="proTest-intro">
                            医院都在使用的权威tova视觉测试 <br>
                            不受色彩、知识、年龄限制的存粹测试
                        </view>
                        <image src="../../static/pic/testPurple.png" mode="aspectFill" class="proTest-testImg" @click="handleToHearTestPage"/>
                    </view>
                 </view>
            </view>
            <!-- 报告页面 -->
            <view class="reportPage" v-show="currPage==1">
                <view class="report-title">
                    报表列表
                </view>
                <view class="report-time">
                    2020年5月23日
                </view>
                <view class="report-calender">
                    <view class="report-choosetime">
                        <view class="report-month" @click="chooseMonth" :class="{'report-active':timeActive=='month'}">月</view>
                        <view class="report-day" @click="chooseDay" :class="{'report-active':timeActive=='day'}">日</view>
                    </view>
                    <uni-calendar class="uni-calendar--hook" :selected="info.selected" :showMonth="false" @change="change"  startDate="2000" endDate="2040"/>
                    <view class="maskCurrDay" v-show="timeActive=='day'">{{ currMonth+'月'+currDay+'日 '+currWeek}}</view>
                </view>
                <view class="report-lists">
                    <scroll-view scroll-y="true" class="report-scrolly">
                        <view class="report-detail" v-for="(item,index) in reportResDate" :key="index" @click="handleToReportDetailPage">
                            <view class="report-circle" :class="{'report-blue':item.score>0, 'report-yellow':item.score>-4 && item.score<0,'report-red':item.score<-4}">{{item.score}}</view>
                            <view class="report-rate">
                                <view class="report-judge" :class="{'report-balckFont':item.score>0, 'report-yellowFont':item.score>-4 && item.score<0,'report-redFont':item.score<-4}">{{ item.judge }}</view>
                                <view class="report-timeRes">{{ item.time }}</view>
                            </view>
                            <view class="report-handleToDetail">报告详情</view>
                            <image src="../../static/icon/rightGray.png" mode="aspectFill" class="report-iconRight"/>
                        </view>
                    </scroll-view>
                </view>
            </view>
            <!-- 设置页面 -->
            <view class="configPage" v-show="currPage==2">
                <view class="setSideBar">
                    <view class="setSideBar-title">设置</view>
                    <view class="setSideBar-menu" v-for="(item,index) in setPageData" :key="index" @click="chooseSetPage(index)">
                        <image :src="currSetPage==index? item.iconBlueLeft:item.iconLeft" mode="aspectFill" class="setSideBar-iconLeft"/>
                        <view class="setSideBar-text" :class="{'sdodtBlueFont':currSetPage==index}">{{ item.text }}</view>
                        <image :src="currSetPage==index? item.iconBlueRight:item.iconRight" mode="aspectFill" class="setSideBar-iconRight"/>                       
                    </view>
                    <view class="loginOut" @click="userLoginOut">
                        退出登录
                    </view>
                </view>
                <view class="setContent">
                    <view class="commonQuestion" v-show="currSetPage==0">
                        <view class="setContent-setTitle">热点问题</view>
                        <view class="setContent-content" v-for="(item,index) in setPageQuestionPageData" :key="index" @click="changeSetPageQuestionPageSubTitle(item,index)">
                            <view class="setContent-subTitle">{{ item.title}}</view>
                            <image :src="item.flag==true? item.iconRight:item.iconBottom" mode="aspectFill" class="setContent-img" :class="{'setContent-currimg':item.flag==false}"/>     
                            <view class="setContent-text" v-show="item.flag==false">{{ item.text }}</view>
                        </view>
                    </view>
                    <view class="feedQuestion" v-show="currSetPage==1">
                        <view class="setContent-setTitle">解决方案</view>
                        <u--textarea v-model="value1" placeholder="您遇到了什么问题？" class="setContent-quiz" maxlength="-1" height="146rpx" placeholderClass="textarea-placeholder"></u--textarea>
                        <view class="setContent-submit" @click="submitQuestion">提交</view>
                    </view>
                    <view class="aboutUs" v-show="currSetPage==2" >
                        <view class="setContent-setTitle">关于我们</view>
                        <view class="aboutUs-content" v-for="(item,index) in setPageAboutUsPageData" :key="index" @click="handleSetPageAboutUsPage(item,index)">
                            <view class="aboutUs-name">{{ item.name }}</view>
                            <view class="aboutUs-title">{{ item.title }}</view>
                            <image :src="item.iconRight" mode="aspectFill" class="aboutUs-icon"/>     
                        </view>
                    </view>
                    <view class="setSystem" v-show="currSetPage==3">
                        <view class="setContent-setTitle">系统设置</view>
                        <view class="aboutUs-content" v-for="(item,index) in setPageSetSystemPageData" :key="index" @click="SetPageSetSystemPage(item,index)">
                            <view class="aboutUs-name">{{ item.name }}</view>
                            <view class="aboutUs-setSystem">{{ item.res }}</view>    
                        </view>
                    </view>
                    <view class="suggestion" v-show="currSetPage==4">
                        <view class="setContent-setTitle">个性治疗手段</view>
                        <view class="suggest">
                            <view class="suggest-picone">
                                <view class="suggest-title">超级无敌爆炸天际的王八羔子</view>
                                <view class="suggest-subtitle">这里是副标题这里是副标这里是副标题</view>
                            </view>
                            <view class="suggest-pictwo">
                                <view class="suggest-title">超级无敌爆炸天际的王八羔子</view>
                                <view class="suggest-subtitle">这里是副标题这里是副标这里是副标题</view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            currPage:0,
            testCurrStateImg:'../../static/icon/testHigh.png',
            reportCurrStateImg:'../../static/icon/reportLow.png',
            setCurrStateImg:'../../static/icon/settingLow.png',
            showCalendar: false,
            timeActive:'month',
            currMonth:'',
            currDay:'',
            currWeek:'',
            info: {
					lunar: true,
					range: true,
					insert: false,
					selected: []
				},
            homePageData:[
                {
                    img:'../../static/icon/testLow.png',
                    blueImg:'../../static/icon/testHigh.png',
                    title:'测试'
                },
                {
                    img:'../../static/icon/reportLow.png',
                    blueImg:'../../static/icon/reportHigh.png',
                    title:'报告'
                },
                {
                    img:'../../static/icon/settingLow.png',
                    blueImg:'../../static/icon/settingHigh.png',
                    title:'设置'
                }
            ],
            setPageData:[
                {
                    iconLeft:'../../static/icon/question.png',
                    iconBlueLeft:'../../static/icon/blueQuestion.png',
                    text:'常见问题',
                    iconBlueRight:'../../static/icon/blueRight.png',
                    iconRight:'../../static/icon/right.png'
                },{
                    iconBlueLeft:'../../static/icon/blueFeedBack.png',
                    iconLeft:'../../static/icon/feedBack.png',
                    text:'意见反馈',
                    iconRight:'../../static/icon/right.png',
                    iconBlueRight:'../../static/icon/blueRight.png'
                },{
                    iconBlueLeft:'../../static/icon/blueAboutUs.png',
                    iconLeft:'../../static/icon/aboutUs.png',
                    text:'关于我们',
                    iconRight:'../../static/icon/right.png',
                    iconBlueRight:'../../static/icon/blueRight.png',
                },{
                    iconBlueLeft:'../../static/icon/blueSetSystem.png',
                    iconLeft:'../../static/icon/setSystem.png',
                    text:'系统设置',
                    iconRight:'../../static/icon/right.png',
                    iconBlueRight:'../../static/icon/blueRight.png'
                },{
                    iconBlueLeft:'../../static/icon/blueSuggest.png',
                    iconLeft:'../../static/icon/suggest.png',
                    text:'干预建议',
                    iconRight:'../../static/icon/right.png',
                    iconBlueRight:'../../static/icon/blueRight.png'
                }
            ],
            setPageQuestionPageData:[
                {
                    title:'测试过程中需要退出怎么办？',
                    iconRight:'../../static/icon/right.png',
                    iconBottom:'../../static/icon/down.png',
                    flag:true,
                    text:'测试过程中需要退出怎么办？',
                },
                {
                    title:'附加量表测试报告在哪里？',
                    iconRight:'../../static/icon/right.png',
                    iconBottom:'../../static/icon/down.png',
                    flag:true,
                    text:'附加量表测试报告在哪里？',
                },
                {
                    title:'更换设备之后测试报告还在吗？',
                    iconRight:'../../static/icon/right.png',
                    flag:true,
                    iconBottom:'../../static/icon/down.png',
                    text:'更换设备之后测试报告还在吗？',
                },
                {
                    title:'更改性别年龄是否会影响测试结果？',
                    iconRight:'../../static/icon/right.png',
                    flag:true,
                    iconBottom:'../../static/icon/down.png',
                    text:'更改性别年龄是否会影响测试结果？',
                },
                {
                    title:'测试为什么要间隔很久才能做？',
                    iconRight:'../../static/icon/right.png',
                    flag:true,
                    iconBottom:'../../static/icon/down.png',
                    text:'测试为什么要间隔很久才能做？',
                },
                {
                    title:'从哪里可以获取到adhd数字治疗的游戏？',
                    iconRight:'../../static/icon/right.png',
                    flag:true,
                    iconBottom:'../../static/icon/down.png',
                    text:'您可以登录官网https/www.sdodt.com/或来电咨询相关事宜021-66666666',
                },
            ],
            setPageAboutUsPageData:[
                {
                    name:'给我们评分',
                    title:'',
                    iconRight:'../../static/icon/right.png',
                },
                {
                    name:'我的的公众号',
                    title:'数药智能',
                    iconRight:'../../static/icon/right.png',
                },
                {
                    name:'我的的其他产品',
                    title:'数眠',
                    iconRight:'../../static/icon/right.png',
                },
            ],
            setPageSetSystemPageData:[
                {
                    name:'系统版本',
                    res:'1.0.0'
                },
                {
                    name:'用户协议',
                    res:'查看'
                },
                {
                    name:'隐私政策',
                    res:'查看'
                },
                {
                    name:'清理缓存',
                    res:'24.1m'
                }
            ],
            reportResDate:[
                {
                    score:41,
                    judge:'注意力功能正常',
                    time:'2022.04.12',
                },
                {
                    score:-8,
                    judge:'注意力重度障碍',
                    time:'2022.04.12',
                },
                {
                    score:-3.4,
                    judge:'注意力轻度障碍',
                    time:'2022.04.12',
                },
            ],
            currSetPage:0,
            currSetSubPage:5,
            value1:'',
        }
    },
    methods:{
        changeCurrPage(index){
            this.currPage=index
        },
        handleToBaikeDetail(){
            uni.navigateTo({
                url:'/subPages/baikeDetail/baikeDetail'
            })
        },
        handleToEyeTestPage(){
            uni.navigateTo({
                url:'/subPages/testGuide/testGuide'
            })
        },
        handleToHearTestPage(){
            uni.$u.toast('页面待开发')
        },
        chooseSetPage(index){
            this.currSetPage=index
        },
        userLoginOut(){
            uni.redirectTo({
                url:'/pages/login/login'
            })
        },
        changeSetPageQuestionPageSubTitle(item,index){
            this.currSetSubPage=index
            item.flag=!item.flag
        },
        submitQuestion(){
            uni.$u.toast('待开发')
        },
        handleSetPageAboutUsPage(item,index){
            uni.$u.toast('页面待开发')
        },
        SetPageSetSystemPage(item,index){
            uni.$u.toast('页面待开发')
        },
        change(e){
            this.currWeek=e.lunar.ncWeek.replace('星期','周')
            this.timeActive='day'
            if(e.month[0]==0){
                e.month=e.month[1]
            }
            this.currMonth=e.month
            this.currDay=e.date
        },
        chooseMonth(){
            this.timeActive='month'
        },
        chooseDay(){
            this.timeActive='day'
        },
        handleToReportDetailPage(){
            uni.navigateTo({
                url:'/subPages/reportDetail/reportDetail'
            })
        }
    },
    mounted(){
        let date=new Date()
        let month=date.getMonth()+1
        let day=date.getDate()
        let weeks = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
        let week = weeks[date.getDay()];
        this.currWeek=week
        this.currMonth=month
        this.currDay=day
    }
}
</script>

<style lang="scss" scoped>
    .testHomePage{
        background: #F9FCFF;
        display: flex;
    }
    .sideBar{
        width: 64rpx;
        min-height: calc(100vh - 33rpx);
        background: #FFFFFF;
    }

    .sideTitle{
        width: 64rpx;
        height: 70rpx;
        &-img{
            position: relative;
            width: 28rpx;
            height: 28rpx;
            top: 14rpx;
        }
        &-title{
            font-size: 10rpx;
            font-family: PingFang SC-Regular, PingFang SC;
            color: #A8AFB9;
            position: relative;
            top: 14rpx;
        }
    }
    // 测试页面
    .testPage{
        width: 657rpx;
        margin-left: 12rpx;
        position: relative;
        &-tovaTest{
            width: 658rpx;
            height: 234rpx;
            display: flex;
        }
        &-chatu{
            position: absolute;
        }
        &-insertImg{
            height: 100rpx;
            width: 100rpx;
            margin-top: 20rpx;
            margin-left: 41rpx;
        }
    }
    .diagnosis{
            width: 657rpx;
            height: 145rpx;
            background: #FFFFFF;
            border-radius: 2rpx;
            background: url('../../static/pic/homeBanner.png') no-repeat;
            background-size: contain;
            &-swiper{
                text-align: right;
                margin-right: 38rpx;
                padding-top: 41rpx;
            }
            &-cnTitle{
                font-size: 19rpx;
                font-family: PingFang SC-Medium, PingFang SC;
                font-weight: 600;
                color: #2C2E34;
                letter-spacing: 4rpx;
            }
            &-enTitle{
                font-size: 9rpx;
                font-family: PingFang SC-Regular, PingFang SC;
                font-weight: 400;
                color: #2C2E34;
                margin-top: 5rpx;
            }
            &-seeMore{
                margin-top: 23rpx;
                width: 69rpx;
                height: 23rpx;
            }
        }
    .proTest{
        width: 322rpx;
        background: #FFFFFF;
        position: relative;
        &-longImg{
            position: absolute;
            width: 322rpx;
            height: 7rpx;
            left: 0;
            top: 0rpx;
        }
        &-title{
            font-size: 23rpx;
            font-weight: 500;
            font-family: PingFang SC-Medium, PingFang SC;
            color: #222222;
            margin-top: 38rpx;
        }
        &-time{
            font-size: 14rpx;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #222222;
            margin-top: 2rpx;
        }
        &-intro{
            width: 220rpx;
            background: rgba(110,132,172,0.06);
            border-radius: 5rpx;
            font-size: 12rpx;
            font-family: PingFang SC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            margin-top: 23rpx;
            padding: 7rpx 0 7rpx 7rpx;
        }
        &-testImg{
            margin-top: 21rpx;
            width: 73rpx;
            height: 23rpx;   
        }
    }
    .sdodtLogo
    {
        width: 26rpx;
        height: 26rpx;
        border-radius: 5rpx;
    }
    .sdodtFont{
        font-size: 10rpx;
        font-weight: 500;
        margin-top: 7rpx;
        color: #A8AFB9;
    }

    .sdodtBlueFont{
        color: #4B8FFA;
    }
.configPage{
    display: flex;
}


//报告页面
.reportPage{
    padding-left: 14rpx;
}

.report{
    &-title{
        font-size: 14rpx;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #222222;
        margin-top: 21rpx;
    }
    &-time{
        font-size: 9rpx;
        font-family: D-DIN-Regular, D-DIN;
        color: #444444;
        margin-top: 1rpx;
    }
    &-calender{
        position: relative;
        top: 12rpx;
        float: right;
        right: 14rpx;
        background: #FFFFFF;
        height: calc(100vh - 80rpx);
    }
    &-choosetime{
        display: flex;
        justify-content: center;
        margin-top: 20rpx;
        margin-bottom: 20rpx;
    }
    &-month,
    &-day{
        width: 94rpx;
        height: 23rpx;
        background: rgba(29,111,233,0);
        border: 1rpx solid #1D6FE9;
        text-align: center;
        line-height: 23rpx;
        font-size: 12rpx;
        font-family: PingFang SC-Regular, PingFang SC;
        color: #1D6FE9;
    }
    &-active{
        background: #1D6FE9;
        color: #FFFFFF;
    }
    &-month{
        border-radius: 2rpx 0rpx 0rpx 2rpx;
        border-right: 0rpx;
    }
    &-day{
        border-left: 0rpx;
        border-radius: 0rpx 2rpx 2rpx 0rpx;
    }
    &-lists{
        display: inline-block;
        width: 417rpx;
        margin-top: 11rpx;
    }
    &-detail{
        height: 70px;
        background: #FFFFFF;
        border-radius: 5rpx;
        margin-bottom: 9rpx;
        display: flex;
        align-items: center;
    }
    &-scrolly{
        height: calc(100vh - 80rpx);
    }
    &-circle{
        width: 42rpx;
        height: 42rpx;
        border-radius: 24rpx;
        line-height: 42rpx;
        text-align: center;
        font-size: 19rpx;
        font-weight: bold;
        margin-left: 19rpx;
    }
    &-blue{
        color: #4383F9;
        background: #ebf3ff;
    }
    &-yellow{
        color: #F97443;
        background-color: #fff1ec;
    }
    &-red{
        color: #F94343;
        background-color: #ffecec;
    }
    &-yellowFont{
        color: #F97443;
    }
    &-redFont{
        color: #F94343;
    }
    &-blackFont{
        color: #222222;
    }
    &-iconRight{
        width: 4rpx;
        height: 8rpx;
        position: absolute;
        right: 23rpx;
    }
    &-rate{
        margin-left: 12rpx;
    }
    &-judge{
        font-size: 12rpx;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 600;
    }
    &-timeRes{
        margin-top: 2rpx;
        font-size: 11rpx;
        font-family: PingFang SC-Regular, PingFang SC;
        color: #666666;
    }
    &-handleToDetail{
        font-size: 11rpx;
        font-family: PingFang SC-Regular, PingFang SC;
        color: #888888;
        position: absolute;
        right: 33rpx;
    }
}
// 设置页面
.setSideBar{
    width: 164rpx;
    height: calc(100vh - 33rpx);
    background: #FFFFFF;
    position: relative;
    top: 21rpx;
    left:12rpx;
    &-title{
        height: 50rpx;
        border-bottom: 0.1rpx solid #eff0f3;
        font-size: 14rpx;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #222222;
        padding-left: 14rpx;
        line-height: 50rpx;
    }
    &-menu{
        margin-top: 9rpx;
        height: 38rpx;
        line-height: 38rpx;
        position: relative;
    }
    &-iconLeft{
        width: 12rpx;
        height: 12rpx;
        top: 2rpx;
        left: 14rpx;
    }
    &-iconRight{
        width: 4rpx;
        height: 7rpx;
        position: absolute;
        right: 14rpx;
        top: 16rpx;
    }
    &-text{
        display: inline-block;
        position: absolute;
        left: 33rpx;
    }
}
.setContent{
    width: 482rpx;
    height: calc(100vh - 33rpx);
    background: #FFFFFF;
    position: relative;
    left: 24rpx;
    top: 21rpx;
    &-setTitle{
        font-size: 14rpx;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        position: relative;
        left: 14rpx;
        height: 50rpx;
        line-height: 50rpx;
        border-bottom: 0.1px solid #eff0f4;
    }
    &-content{
        padding-left:14rpx;
        padding-right: 13rpx;
        min-height: 38rpx;
        line-height: 38rpx;
    }   
    &-subTitle{
        display: inline-block;
    }
    &-img{
        width: 7rpx;
        height: 7rpx;
        float:right;
        position:relative;
        top:18rpx
    }
    &-currimg{
        width: 8rpx;
        height: 4rpx;
        position:relative;
        top:20rpx
    }
    &-text{
        background: #F8F8F8;
        border-radius: 5rpx;
        min-height: 66rpx;
        font-size: 11rpx;
        font-family: PingFang SC-Light, PingFang SC;
        font-weight: 300;
        color: #444444;
        padding:0 0 0 12rpx;
    }
    &-quiz{
        width: 454rpx;
        min-height: 146rpx;
        background: #F8F8F8;
        border-radius: 5rpx;
        margin: 12rpx 14rpx 0 14rpx;
        border:none;
        font-size: 11rpx;
        font-family: PingFang SC-Light, PingFang SC;
        font-weight: 300;
        color: #444444;
    }
    &-submit{
        width: 103rpx;
        height: 33rpx;
        background: #367BF9;
        border-radius: 5rpx ;
        text-align: center;
        line-height: 33rpx;
        margin: 23rpx auto;
        font-size: 12rpx;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
    }
}

.aboutUs{
    &-content{
        display:flex;
        height: 47rpx;
        background: #f9f9f9;
        border-radius: 2rpx;
        margin:12rpx 13rpx;
        line-height: 47rpx;
        position:relative
    }
    &-name{
        font-size: 11rpx;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #444444;
        margin-left: 14rpx;
    }
    &-title{
        position:absolute;
        right:26rpx;
        color:#367BF9;
        font-size: 11rpx;
    }
    &-icon{
        width: 6rpx;
        height: 9rpx;
        position:absolute;
        right:12rpx;
        top:20rpx;
    }
    &-setSystem{
        font-size: 11rpx;
        font-family: PingFang SC-Regular, PingFang SC;
        position:absolute;
        right:14rpx;
    }
}

.suggest{
    margin:14rpx;
    &-picone{
        width: 454rpx;
        height: 135rpx;
        background:url('../../static/pic/suggestpngone.png') ;
        background-size:cover;
    }
    &-pictwo{
        margin-top:19rpx ;
        width: 454rpx;
        height: 135rpx;
        background:url('../../static/pic/suggestpngtwo.png') ;
        background-size:cover;
    }
    &-title{
        font-size: 19rpx;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        position:relative;
        left: 23rpx;
        top:54rpx;
    }
    &-subtitle{
        font-size: 12rpx;
        font-family: PingFang SC-Regular, PingFang SC;
        color: #FFFFFF;
        position: relative;
        left: 23rpx;
        top: 60rpx;
    }
}
.loginOut{
    width: 136rpx;
    height: 33rpx;
    background: #FFFFFF;
    border-radius: 2rpx;
    border: 0.1rpx solid #FC4A46;
    color: #FC4A46;
    line-height: 33rpx;
    text-align: center;
    position: absolute;
    bottom: 19rpx;
    left: 14rpx;
}
.maskCurrDay{
    width: 100%;
    font-size: 14rpx;
    height: 30rpx;
    line-height: 30rpx;
    position: absolute;
    background-color: #FFFFFF;
    text-align: center;
    top: 57rpx;
}
::v-deep{
    .uni-calendar__content{
        width: 216rpx;
        height: auto;
        padding: 0 10rpx;
    }
    .uni-calendar-item__weeks-lunar-text{
        display: none;
    }
    .uni-calendar-item__weeks-box-item{
        width: 30rpx;
        height: 36rpx;
        background: #FFFFFF;
    }

    .uni-calendar__header{
        border-bottom-width: 0px;
        height: 20rpx;
    }
    .uni-calendar__weeks-day{
        width: 28rpx;
        border-bottom-width: 0px;
        font-size: 8rpx;
        font-family: PingFang SC-Regular, PingFang SC;
        color: #888888;
    }
    .uni-calendar__header-btn-box{
        display: none;
    }
    .uni-calendar-item--isDay-text{
        color: #333333;
    }
    .uni-calendar-item--checked,
    .uni-calendar-item--isDay{
        height: 25rpx;
        width: 25rpx;
        background-color: #1D6FE9;
        text-align: center;
        border-radius: 13rpx;
        line-height: 25rpx;
        margin-top: 4rpx;
        margin-left: 3rpx;
        color: #FFFFFF;
    }
    .uni-calendar__weeks-item{
        width: 26rpx;
        height: 36rpx;
    }
    .uni-calendar-item--disable{
        display: none;
    }
    .uni-calendar__header-text[data-v-0682a296]{
        color: #1D6FE9;
        &::after{
            content: url(../../static/icon/downSolid.png);
            display: block;
            height: 5rpx;
            width: 5rpx;
            transform: scale(0.05);
            position: relative;
            right: -80rpx;
            bottom: 15rpx;
        }
    }
}
</style>