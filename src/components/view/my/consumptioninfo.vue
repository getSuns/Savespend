<template>
	<div class="consumptioninfo tophead2">
        <headnav leftback="i-back" :flexnum="1" titletext="消费记录"></headnav>
        <div class="btmlist cellbox">
           <van-cell-group>
                <van-cell title="订单号" center value="12446745346874" />
                <van-cell title="商家名称" center value="成都老火锅" />
                <van-cell title="支付时间" center value="2019-08-08  12:24:08" />
            </van-cell-group>
           <van-cell-group>
                <van-cell title="支付状态" center value="成功支付" />
                <van-cell title="支付方式" center  value="微信支付" />
                <van-cell title="优惠金额" center value="￥10" />
                <van-cell title="实付金额" center value-class="colorgray" value="¥88" />
            </van-cell-group>
        </div>
	</div>
</template>

<script>
	import headnav from "../../common/header" //第一步，导入组件
	export default {
		components: {
			headnav //第二步，注册组件
		}
	}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/public.less";
  .consumptioninfo{
    .van-cell-group{
            margin-top: .5rem;
    }
 }
</style>
