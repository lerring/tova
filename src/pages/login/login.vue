<template>
	<view class="login">
		<image src='@/static/icon/sdodtLogo.png' mode="aspectFill" class="sdodtLogo"/>
		<view class="sdodtName">数药智能</view>
		<view class="welcome">欢迎使用-注意力变量测试</view>
		<view class="login-form">
			<view class="login-form-content ml26 pt46 pb47">
				<view class="login-form-title">
					{{title}}
				</view>
				<view class="login-form-intro">
					{{intro}}
				</view>
				<u--input type='number' placeholder="请输入手机号" border="surround" v-model="valuePhone" @change="inputPhone" clearable maxlength="11" :class="{'u-border-click':!flag1,'u-border-blur':flag1,'login-input':true}" 
				@focus='onfocus1' @blur='onblur1'> </u--input>
				<u--input type='number' placeholder="请输入验证码" border="surround" v-model="valueCode" @change="inputCode" maxlength="6" :class="{'u-border-click':!flag2,'u-border-blur':flag2,'login-input':true}" @focus='onfocus2'
				@blur='onblur2'> 
				</u--input>
				<view class="u-getCode"  @click="getCode()">{{codeTips}}</view>
				<view class="flex aic fs9 fcs mt10">
					<view>
						<u-checkbox-group @change="checkboxChange" >
							<u-checkbox name="true" size="14"></u-checkbox>
						</u-checkbox-group>
					</view>
					<view>登录即代表你同意 </view><view class="fc1">《用户协议》</view><view>和</view><view class="fc1">《隐私政策》</view>
				</view>
				<view class="login-btn">
					<u-button type="primary" size="large" text="登录" @click="handleToGame"></u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return{
				title:'登录注册',
				intro:'未注册手机号验证后自动注册',
				valuePhone:'',
				valueCode:'',
				flag1:true,
				flag2:true,
				check:false,
				codeTips:'获取验证码',
			}
		},
		methods:{
			inputPhone(val){

			},
			inputCode(val){

			},
			onfocus1(){
				this.flag1=false
			},
			onblur1(){
				this.flag1=true
			},
			onfocus2(){
				this.flag2=false
			},
			onblur2(){
				this.flag2=true
			},
			checkboxChange(n){
				if (!this.check) {
					this.check = true
				} else {
					this.check = false
				}				
			},
			login(){
				
			},
			async getCode() {
				let mobile_reg = /^1[3-9]\d{9}$/
				if (!mobile_reg.test(this.valuePhone)) {
					uni.$u.toast('请输入正确的手机号');
				}else{
					let i=10;
					var timer=setInterval(()=>{
						this.codeTips=i+'秒重新获取'
						i--
						if(i<0){
							clearTimeout(timer)
							this.codeTips='获取验证码'
						}
					},1000)
					console.log(11);
				}
			},
			handleToGame(){
				uni.navigateTo({
					url:'/pages/improveInfo/info',
				})
			}
		},
	}
</script>

<style lang="scss"	scoped>
.login{
	width: 100vw;
	height: 100vh;
	background: url('@/static/pic/loginBG.png') no-repeat fixed;
	background-size: cover;
	&-form{
		position: relative;
		width: 264rpx;
		background: #FFFFFF;
		box-shadow: 0 6rpx 18rpx 1rpx rgba(124,156,216,0.06);
		border-radius: 7rpx;
		top: 70rpx;
		left: 414rpx;
	}
	&-form-content{
		width: 212rpx;
	}
	&-form-title{
		font-size: 19rpx;
		font-weight: 600;
		color: #000000;
	}
	&-form-intro{
		font-size: 11rpx;
		font-weight: 300;
		color: #000000;	
		margin-top: 2rpx;
		margin-bottom: 23rpx;
	}
	&-input{
		width:193rpx;
		margin-bottom: 9rpx;
	}
	&-btn{
		// margin-right: 30rpx;
		margin-top: 33rpx;
	}
}
.u {
	&-border-click{
		border-color:#295FD2 !important;
	}
	&-border-blur{
		border-color:#A1A8BA !important;
	}
	&-button{
		background-color: #367BF9;
		height: 35rpx;
		border-radius: 5rpx;
		width:212rpx;
	}
	&-getCode{
		position: absolute;
		top: 165rpx;
		right: 40rpx;
		font-size: 12rpx;
		color: #295FD2;
	}
}
.sdodtLogo{
	position: absolute;
	width: 18px;
	height: 18px;
	top: 29rpx;
	left: 29rpx;
}
.sdodtName{
	font-size: 12rpx;
	font-family: PingFang SC-Semibold, PingFang SC;
	font-weight: 600;
	color: #367BF9;
	position: absolute;
	top: 29rpx;
	left: 52rpx;
}
.welcome{
	font-size: 14rpx;
	font-family: PingFang SC-Medium, PingFang SC;
	font-weight: 500;
	color: #222222;
	position: absolute;
	top: 350rpx;
	left: 118rpx;
}
</style>