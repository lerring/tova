<template>
	<view class="game" @touchstart="longPressStart" @touchend="longPressEnd">
		<view :class="{'game-box1':true, 'game-isShowBox':isShowBox==1}"></view>
		<view class="game-splitLine" v-show="isToastTime"></view>
		<view :class="{'game-box2':true, 'game-isShowBox':isShowBox==2}"></view>
		<view class="game-tips" v-show="!isToastTime"> {{gameTip}} </view>
	</view>
</template>
<script>
	export default{
		data() {
			return{
				bgColor:'#FF6638',
				isShowBox:0,
				randomNum:0,
				lastState:0,
				num:0,
				// gameStartTime:0,
				boxShowTime:0,
				RTtime:0,
				sumRTtime:0,
				// 0代表方块在下，1代表方块在上。
				// stimTable1:[1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0],
				stimTable1:[1,0,1],
				flagUpCheckTime:false,
				flagDownCheckTime:true,
				isToastTime:true,
				timerUp:null,
				timerDown:null,
				flagCheckTime:false,
				gameTip:'',
				errTime:0,
				gameStartTime:0,
				pressTime:0,
			}
		},
		methods:{
			//显示盒子的位置
			changeBoxShowPosition(){
				// this.gameStartTime=new Date()    加个开关，运行前关闭，随机数生成后打开开关，开启定时,在检查时间里面将开关关闭，不让他一直运行。
					// 当盒子出现在上方时，在固定时间内需要快速按下空格键，并且需要记录反应时间，出现在下方时则不需要按
					this.createRandomIntegers()
					this.boxShowTime=new Date()
					if(this.randomNum===1){
						this.isShowBox=1
						this.isSpaceKeydownListener()
					}else if(this.randomNum===0){				
						this.isShowBox=2	
						this.isKeydownListener()	
					}
					this.checkGameRunTime()
			},
			isSpaceKeydownListener(){
					setTimeout(()=>{
							return this.isShowBox=0
						},100)
					//1 先检测是否在规定时间内   2 规定时间内是否有按键按下
					document.addEventListener('keyup',event=>{
						// plus.globalEvent.addEventListener('keydown',event=>{
							if(event.code==='Space' && this.RTtime<=3 &&this.randomNum===1){
								this.flagCheckTime=true
								this.RTtime = ((new Date()-this.boxShowTime) % (1000 * 60)) / 1000;
							}
					})
					this.timerUp=setTimeout(() => {
						this.sumRTtime+=this.RTtime; 
						this.isToastTime=false
						if(this.flagCheckTime && this.pressTime<5000){
							// console.log('正确，RT时间是'+this.RTtime)
							// uni.$u.toast('正确，RT时间是'+this.RTtime)
							this.gameTip='正确，RT时间是'+this.RTtime
							console.log('正确，RT时间是'+this.RTtime,this.gameTip);
							
						}else if(!this.flagCheckTime && this.pressTime<5000){
							console.log('错误')
							// uni.$u.toast('错误')
							this.gameTip='错误'
							this.errTime++
						}
						this.flagCheckTime=false
					}, 3000);
					this.isToastTime=true
			},
			// 此时方块出现在下方，在规定时间内不能按键，按下则显示错误，否则则为正确
			isKeydownListener(){
				setTimeout(()=>{
					return this.isShowBox=0
				},100)
				document.addEventListener('keyup',event=>{
					if(this.randomNum===0){
						this.flagDownCheckTime=false
					}
				})
				this.timerDown=setTimeout(() => {
					this.isToastTime=false
					if(this.flagDownCheckTime && this.pressTime<5000){
						console.log('正确');
						// uni.$u.toast('正确')
						this.gameTip='正确'
					}else if(!this.flagCheckTime && this.pressTime<5000){
						console.log('错误');
						// uni.$u.toast('错误')
						this.gameTip='错误'
						this.errTime++
					}
					this.flagDownCheckTime=true
				}, 3000);
				this.isToastTime=true
			},
			//检测游戏是否已经全部进行
			checkGameRunTime(){
				if(this.stimTable1.length<1){
					setTimeout(()=>{
						if(this.pressTime<5000){
							// uni.$u.toast('你一共用时'+this.sumRTtime.toFixed(3)+'s')
							clearInterval(this.timer)
							uni.setStorage({
								key:'stageOneRunTime',
								data:this.sumRTtime.toFixed(3),
							})
							uni.setStorage({
								key:'stageOneErrTime',
								data:this.errTime.toFixed(0),
							})
							uni.navigateTo({
								url:'/subPages/gameStage/stageOne'
							})
						}
					},6000)
				}else{
					setTimeout(()=>{
						this.changeBoxShowPosition()
					},6000)
				}
			},
			// 生成数组范围内的随机整数
			createRandomIntegers(){
				let m=0 , n=this.stimTable1.length-1
				let ranNum=parseInt(Math.random()*(n-m+1)+m)
				this.randomNum=this.stimTable1[ranNum]
				this.stimTable1.splice(ranNum,1)
				// console.log(arr1);
			},
			longPressStart(e){
				console.log(e.timeStamp);
				this.gameStartTime=e.timeStamp
			},
			// 长按五秒结束游戏并跳转
			longPressEnd(e){
				console.log(e.timeStamp);
				console.log(e.timeStamp-this.gameStartTime);
				this.pressTime=e.timeStamp-this.gameStartTime
				if(this.pressTime>=5000){
					uni.redirectTo({
						url:'/pages/homePage/homePage'
					})
				}
			}
		},
		onShow(){
			setTimeout(()=>{
				this.changeBoxShowPosition()
			},2000)
			let time = new Date()
			console.log(time.toLocaleString()) 
			this.$forceUpdate()
		},
		onHide(){
			console.log('已隐藏');
			this.stimTable1=[]
			clearTimeout(this.timerDown)
			clearTimeout(this.timerUp)
		}
	}
</script>
<style lang="scss" scoped>
.game{
	width: 100vw;
	height: 100vh;
	position: relative;
	&-splitLine{
		width: 169rpx;
		height: 0.01rpx;
		background-color:#2D2D2D ;
		border: 0rpx solid #2D2D2D;
		margin: 0 50%;
		transform: translateX(-50%);
		position: relative;
		top: 50%;
	}
	&-box1,
	&-box2{
		width: 87rpx;
		height: 63rpx;
		background-color: #2D2D2D;
		margin: 0rpx 50%;
		transform: translateX(-50%);
		opacity: 0;
		position: absolute;
	}
	&-box1{
		top: 96rpx;
	}
	&-box2{
		bottom: 96rpx;
	}
	&-isShowBox{
		opacity: 1;
	}
	&-tips{
		min-width: 100rpx;
		height: 38rpx;
		background: #222222;
		border-radius: 5rpx;
		opacity: 0.7;
		position: absolute;
		top: 0;
		line-height: 38rpx;
		text-align: center;
		font-size: 14rpx;
		font-family: PingFang SC-Regular, PingFang SC;
		color: #FFFFFF;
		left: 313rpx;
		top: 216rpx;
		padding: 0 10rpx;
	}
}
</style>