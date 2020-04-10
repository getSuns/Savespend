<template>
    <div class="conpon tophead7">
        <headnav leftback="i-back" :flexnum="1"  titletext="优惠说明"></headnav>
        <div class="midinfo">
            <p>1、所有金额，请向商家咨询后填写</p>
            <p>2、优惠买单仅限到店支付，请勿提前购买</p>
            <p>3、如需发票，请您在消费时间向商户咨询</p>
        </div>
    </div>
</template>
<script>
	import headnav from "./common/header"
	export default {
		components: {
			headnav 
		}
	}
</script>
<style lang="less" scoped>
.midinfo{
    padding: .8rem;
    background-color: #fff;
    p{
        font-size: .7rem;
        color: #666;
        line-height: 1.4rem;
    }
}
</style>