<template>
    <sdodtTitle>
        <view slot="title" class="head" @click="handleBack">返回</view>
        <view slot="mainContent">

        </view>
    </sdodtTitle>
</template>

<script>
import sdodtTitle from '@/components/sdodtTitle/sdodtTitle'
export default {
    components:{sdodtTitle},
    methods:{
        handleBack(){
            uni.navigateBack()
        }
    }
}
</script>

<style lang="scss" scoped>
.head{
    position: absolute;
    z-index: 999;
    width: 30rpx;
    bottom: -4rpx;
    left: -30rpx;
    padding-left: 30rpx;
}
</style>