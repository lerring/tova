<template>
	<view class="home-page">
		<image class="home-page-logo" src=""></image>
		<view class="home-page-text">
			<view class="home-page-company">
				{{companyName}}
			</view>
			<view class="home-page-name">
				{{appName}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				companyName:'数药智能',
				appName:'注意力变量测试',
			}
		},
		methods: {
			handleToLogin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
				console.log(111)
			}
		},
		mounted() {
			setTimeout(this.handleToLogin,2000)
		}
	}
</script>

<style lang="scss" scoped>
.home-page{
	width: 100vw;
	height: 100vh;
	background-color: $uni-bg-color;   
	&-logo{
		position: absolute;
	}
	&-text{
		width: 100%;
		text-align: center;
	}
	&-company{
		font-size: 47rpx;
		font-weight: 500;
		color: #FFFFFF;
		padding-top: 258rpx;
	}
	&-name{
		font-size: 19rpx;
		color: #FFFFFF;
	}
}
</style>
