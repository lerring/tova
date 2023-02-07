# telly-picker
# ## 基本使用方法

##插件属性
|属性称名			|类型	|默认值				|说明																						|
|:-:				|:-:	|:-:				|:-:																						|
|range				|Array	|-					|数据数组：range中有多少项，就有多少列,列的每一项都是一个对象 格式：[[{},{},],[{},{},{}]]	|
|rangekey			|Array	|-					|字段名称集合：与列数组相对应的key,每一列要显示的 列对象的某个字段的名称					|
|value				|Array	|-					|初始选中值下标集合：对应每一列 初始时要选中的值的下标										|
|styles				|String	|"color: #000000;"	|回显时字体颜色																				|
|placeholderStyle	|String	|"color: #8f8f8f;"	|回显时没有值时 提示字体颜色																|
|placeholderText	|String	|"请选择"			|回显时没有值时提示文字																		|
|confirmStyle		|String	|"color: #1aad19;"	|确认按钮字体颜色																			|
|cancelStyle		|String	|"color: #909497;"	|取消按钮字体颜色																			|
|confirmText		|String	|"确定"				|确认按钮文字																				|
|cancelText			|String	|"取消"				|取消按钮文字																				|
|isMaskClick		|Boolean|true				|点击蒙版是否关闭弹窗																		|
|pickershow			|Boolean|true				|是否显示选择列表框																			|
|disabled			|Boolean|false				|组件是否可点击																				|
|showClear			|Boolean|false				|是否显示清除按钮																			|

##事件

|事件名		|说明					|返回值			|
|:-:		| :-:					|:-:			|
|@confirm	|点击确认事件			|Array , Array	|
|@cancel	|点击取消事件			|-				|
|@bindChange|选择时值改变事件		|Array			|
|@Pickeropen|位置值发生改变时执行	|Array			|
|@clear		|清除数据事件			|Array			|


```
<template>
	<view class="content">
		<view class="telly-list">
			<view class="telly-item">
				<view class="" style="margin-bottom: 20rpx;font-weight: 500;">
					当前选择：
				</view>
				<view style="-webkit-flex: 1;flex: 1;"></view>
				<telly-picker :value="value" :range="[array]" :rangekey="rangekey" placeholderText="单列选择器"
					@bindChange="bindChange" @cancel="cancel" @confirm="confirm"></telly-picker>
			</view>
		</view>

		<view class="telly-list">

			<view class="telly-item">
				<view class="" style="margin-bottom: 20rpx;font-weight: 500;">
					当前选择：
				</view>
				<view style="-webkit-flex: 1;flex: 1;"></view>
				<telly-picker :value="value2" :pickershow="pickershow" :range="[Class,user]" :rangekey="rangekey2"
					placeholderText="联动选择器" @bindChange="gangedbindChange" @cancel="cancel" @confirm="gangediconfirm">
				</telly-picker>
			</view>
		</view>

		<view class="telly-list">
			<view class="telly-item">
				<view class="" style="margin-bottom: 20rpx;font-weight: 500;">
					当前选择：
				</view>
				<view style="-webkit-flex: 1;flex: 1;"></view>
				<telly-picker :value="value3" :pickershow="pickershow" :range="dateRange" :rangekey="rangekey3"
					placeholderText="多列选择器" @bindChange="multibindChange" @cancel="cancel" @confirm="multiconfirm">
				</telly-picker>
			</view>
		</view>

	</view>
</template>

<script>
	import jsonData from '@/pages/index/jsonData.json'
	export default {
		data() {
			return {
				title: 'tellyPicker',

				selectedInfo: {},
				value: [],
				array: [],
				rangekey: ['name'],

				studentinfo: {},
				value2: [0, 1],
				rangekey2: ['className', 'name'],
				Class: [],
				user: [],

				dateinfo: {},
				dateRange: [],
				value3: [0, 0],
				rangekey3: ['year', 'month'],


				pickershow: false, //数据加载完成后 设为true
			}
		},
		onLoad() {
			this.getdata();
			this.getStudentInit();
			this.getDate();
		},
		methods: {
			//单列选择器数据
			getdata() {
				for (var i = 0; i < 10; i++) {
					var info = {
						"key": i,
						"name": "column" + i
					}
					this.array.push(info)
				}
			},
			//初始化班级和学生信息
			getStudentInit() {
				this.Class = jsonData.Class;
				this.getuser(this.Class[0].id)
			},
			//根据班级获取学生信息
			getuser: function(classid) {
				this.user = jsonData.user.filter((item) => {
					return item.classid == classid;
				})
				this.pickershow = true;
			},
			//日期数据
			getDate() {
				var nian = [];
				for (var i = 1999; i < 2050; i++) {
					var info = {
						"year": i,
						"message": i + "年"
					}
					nian.push(info);
				}
				var yue = [];
				for (var i = 1; i < 12; i++) {
					var info = {
						"month": i,
						"message": i + "月"
					}
					yue.push(info);
				}
				this.dateRange.push(nian);
				this.dateRange.push(yue);
				console.log(this.dateRange)
				this.pickershow = true;
			},

			//单列选择器 择改变事件
			confirm(e, index) {
				console.log("123", e, index)
				this.selectedInfo = {};
				this.selectedInfo.key = e[0].key;
				this.selectedInfo.name = e[0].name;
			},
			//单列选择器 择改变事件
			bindChange(e) {
				console.log(e)
			},
			//联动选择器 确定事件
			gangediconfirm(e) {
				console.log(e)
				this.studentinfo = {};
				this.studentinfo.className = e[0].className;
				this.studentinfo.name = e[1].name;
			},
			//联动选择器 选择改变事件
			gangedbindChange(e) {
				console.log(e)
				this.getuser(this.Class[e[0]].id)
			},
			//多列选择器 确定事件
			multiconfirm(e) {
				console.log(e)
				this.dateinfo = {};
				this.dateinfo.year = e[0].year;
				this.dateinfo.month = e[1].month;
			},
			//多列选择器 选择改变事件
			multibindChange(e) {
				console.log(e)
			},
			//取消事件
			cancel() {
				uni.showToast({
					title: "点击了取消"
				})
			},
		}
	}
</script>

<style>
	.content {
		padding: 30rpx;
	}

	.telly-list {
		margin: 30rpx;
		font-size: 40rpx;
	}

	.telly-item {
		display: flex;
		flex-direction: row;
		text-align: right;
		/* 		border: 1rpx solid #909497;
		border-radius: 20rpx; */
		padding: 10rpx;
		font-size: 30rpx;
	}
</style>



```