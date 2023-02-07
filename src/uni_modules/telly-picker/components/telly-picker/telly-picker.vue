<template>
	<view>
		<view class="uni-flex uni-row">
			<view v-if="selectInfo.length > 0" :style="styles" @click="selectClick">
				<text class="valueT" v-for="(item,index) in selectInfo" :key="index" v-if="item[rangekey[index]]">
					{{item[rangekey[index]]}}
				</text>
				<!-- <view v-else :style="placeholderStyle">{{placeholderText}} </view> -->
			</view>
			<view v-else :style="placeholderStyle" @click="selectClick">{{placeholderText}} </view>
			<view class="" style="margin-left: 20rpx;" v-if="selectInfo.length > 0 && showClear">
				<uni-icons type="close" @click="clear"></uni-icons>
			</view>
		</view>
		<uni-popup :isMaskClick="isMaskClick" ref="popupPicker" type="bottom">
			<view class="popbody">
				<view style="display: flex; flex-direction: row;padding: 30rpx 40rpx; ">
					<view class="btnClass" v-if="platform === 'ios'" style="font-weight: 600;" :style="cancelStyle"
						@click="cancel">{{cancelText}}</view>
					<view class="btnClass" v-else :style="cancelStyle" @click="cancel">{{cancelText}}</view>
					<view style="-webkit-flex: 1;flex: 1;"></view>
					<view class="btnClass" v-if="platform === 'ios'" style="font-weight: 600;" :style="confirmStyle"
						@click="confirm">{{confirmText}}</view>
					<view class="btnClass" v-else :style="confirmStyle" @click="confirm">{{confirmText}}</view>
				</view>
				<view class="fgx2"></view>
				<picker-view v-if="pickershow" indicator-style="height: 50px;padding-bottom:0" :value="indexs"
					@change="bindChange">
					<picker-view-column v-for="(itemList,indexList) in range" :key="indexList">
						<view class="item" v-for="(item,index) in itemList" :key="index"
							v-if="item[rangekey[indexList]]">{{item[rangekey[indexList]]}}</view>
					</picker-view-column>
				</picker-view>
				<!-- #ifndef H5 -->
				<!-- <view class="uni-flex uni-row" style="padding: 10px;">
					<view style="-webkit-flex: 1;flex: 1;"></view>
					<button type="default" style="font-size: 30rpx;color: #55aa7f;padding: 0rpx 20rpx;width: 300rpx;margin-right: 20rpx;" @click="cancel">{{cancelText}}</button>
					<button type="primary" style="font-size: 30rpx;background-color: #55aa7f;color: #fff;padding: 0rpx 20rpx;width: 300rpx;margin-left: 20rpx;" @click="confirm">{{confirmText}}</button>
					<view style="-webkit-flex: 1;flex: 1;"></view>
				</view> -->
				<!-- #endif -->
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		name: "telly-picker",
		props: {
			//数据数组：range中有多少项，就有多少列,列的每一项都是一个对象
			//格式：[[{},{},],[{},{},{}]]
			range: {
				type: Array,
				default: function() {
					return [];
				}
			},
			//字段名称集合：与列数组相对应的key,每一列要显示的 列对象的某个字段的名称 
			rangekey: {
				type: Array,
				default: function() {
					return [];
				}
			},
			//初始选中值下标集合：对应每一列 初始时要选中的值的下标
			value: {
				type: Array,
				default: function() {
					return [0];
				}
			},
			//回显时字体颜色
			styles: {
				type: String,
				default: "color: #000000;"
			},
			//回显时没有值时 提示字体颜色
			placeholderStyle: {
				type: String,
				default: "color: #8f8f8f;"
			},
			//回显时没有值时提示文字
			placeholderText: {
				type: String,
				default: "请选择"
			},
			//确认按钮字体颜色
			confirmStyle: {
				type: String,
				default: "color: #1aad19;"
			},
			//取消按钮字体颜色
			cancelStyle: {
				type: String,
				default: "color: #909497;"
			},
			//确认按钮文字
			confirmText: {
				type: String,
				default: "确定"
			},
			//取消按钮文字
			cancelText: {
				type: String,
				default: "取消"
			},
			//点击蒙版是否关闭弹窗
			isMaskClick: {
				type: Boolean,
				default: true
			},
			//是否显示选择列表框
			pickershow: {
				type: Boolean,
				default: true
			},
			//组件是否可点击
			disabled: {
				type: Boolean,
				default: false
			},
			//是否显示清除按钮
			showClear: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				selectInfo: [], //记录每列选中的值对象
				display: false,
				indexs: [],
				platform: uni.getSystemInfoSync().platform //app 运行平台
			};
		},
		watch: {
			range: {
				handler(val) {

				},
				immediate: true
			},
			value: {
				handler(val) {
					this.indexs = val;
					var info = [];
					this.selectInfo = [];
					for (var i = 0; i < val.length; i++) {
						if (val[i] >= 0 && this.range[i][val[i]]) {
							info.push(this.range[i][val[i]]);
						}
					}
					//设置初始选中值对象
					this.selectInfo = info;
				},
				immediate: true
			},
			placeholderText() {}
		},
		methods: {
			//清除
			clear() {
				this.indexs = [];
				this.selectInfo = [];
				this.$emit('clear', this.selectInfo)
			},
			//组件被点击事件
			selectClick() {
				if (this.disabled) return;
				//判断如果数据数组中至少有一列 初始选中的值 对象有值。弹出框选中列表
				if ((this.range[0].length > 0) || (this.selectInfo && this.selectInfo.length > 0)) {
					this.$refs.popupPicker.open();
				} else {
					//初始没有数据，择将弹出对象传给用户，由用户手动操作弹出
					this.$emit('Pickeropen', this.$refs.popupPicker)
				}
			},
			//点击取消事件
			cancel() {
				this.$emit('cancel')
				this.$refs.popupPicker.close()
			},
			//点击确定事件
			confirm(e) {
				var info = [];
				var values = [];
				if (this.indexs.length <= 0) {
					for (var i = 0; i < this.range.length; i++) {
						this.indexs.push(0);
					}
				}
				for (var i = 0; i < this.indexs.length; i++) {
					info.push(this.range[i][this.indexs[i]]);
					values.push(this.indexs[i]);
				}
				if (info.length > 0) {
					this.selectInfo = info;
				} else {
					values = [0];
				}
				this.$emit('confirm', this.selectInfo, values)
				this.$refs.popupPicker.close()
			},
			bindChange(e) {
				if (this.indexs.length <= 0) {
					for (var i = 0; i < this.range.length; i++) {
						this.indexs.push(0);
					}
				}
				for (var i = 0; i < e.detail.value.length; i++) {
					if (e.detail.value[i] != null) {
						this.indexs[i] = e.detail.value[i]
					}
				}
				this.$emit('bindChange', this.indexs);
			}
		}
	}
</script>

<style>
	picker-view {
		width: 100%;
		height: 600rpx;
		margin-top: 20rpx;
	}

	.item {
		line-height: 100rpx;
		text-align: center;
	}

	.valueT {
		margin: 0rpx 10rpx;
	}

	.btnClass {
		font-size: 17px;
		font-weight: 100;
	}

	.fgx2 {
		border-bottom: 1rpx solid #f8f8f8;
	}

	.popbody {
		background-color: #ffffff;
		border-radius: 25rpx 25rpx 0rpx 0rpx;
		z-index: 999;
	}
</style>
