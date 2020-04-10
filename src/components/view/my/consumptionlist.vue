<template>
	<div class="consumptionlist tophead2">
        <headnav leftback="i-back" :flexnum="1" titletext="消费记录"></headnav>
        <div class="btmlist cellbox">
                <div v-if="!nodata">
                <van-cell-group title="分组1">
                        <van-cell title="微信充值" value="-88" value-class="colorgray" center size="large" label="2019-06-16 14:42:46" @click="topage('222')"/>
                        <van-cell title="微信充值" value="-88" value-class="colorgray" center size="large" label="2019-06-16 14:42:46" />               
                </van-cell-group>
                <van-cell-group title="分组2">
                        <van-cell title="微信充值" value="-88" value-class="colorblue" center size="large" label="2019-06-16 14:42:46" />
                        <van-cell title="微信充值" value="-88" value-class="colorblue" center size="large" label="2019-06-16 14:42:46" />               
                </van-cell-group>
                </div>
                <nodata v-else tipstext="暂无消费记录" imgname='coin'></nodata>

        </div>
	</div>
</template>

<script>
    import headnav from "../../common/header" //第一步，导入组件
    import nodata from "../../common/nodata" 

	export default {
	components: {
            headnav, //第二步，注册组件
            nodata
        },
        data(){
            return{
                nodata:false
            }
        },
        methods:{
                topage(id){
                        this.$router.push({name:'consumptioninfo',params:{idname:id}})
                }
        }
	}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/public.less";
</style>
