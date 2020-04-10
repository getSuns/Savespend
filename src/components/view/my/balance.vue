<template>
	<div class="balance">
        <div class="topred">
		    <headnav leftback="i-backw" :flexnum="1" boderbtm="headtm" titletext="我的余额"></headnav>
            <div class="pricecard">
                <div class="centenbox">
                    <p class="cointotal">1990</p>
                    <p class="cointext">可提现/消费金额(元)</p>
                    <router-link to="/cardlist"><button class="bgfbtn">银行卡</button></router-link>
                    <router-link to="/cashout"><button class="bgredbtn">去提现</button></router-link>
                </div>
            </div>
        </div>
        <div class="btmlist">
            <div class="cellbox" v-if="!nodata">
            <van-cell-group title="分组1">
                    <van-cell title="微信充值" value="-88" value-class="colorgray" center size="large" label="2019-06-16 14:42:46" />
                    <van-cell title="微信充值" value="-88" value-class="colorgray" center size="large" label="2019-06-16 14:42:46" />               
            </van-cell-group>
            <van-cell-group title="分组2">
                    <van-cell title="微信充值" value="-88" value-class="colorblue" center size="large" label="2019-06-16 14:42:46" />
                    <van-cell title="微信充值" value="-888" value-class="colorblue" center size="large" label="2019-06-16 14:42:46" />               
            </van-cell-group>
            </div>
            <nodata v-else tipstext="暂无记录" imgname='coin'></nodata>
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
                nodata:true
            }
        }
	}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/public.less";
 @fsize7:.7rem;
 @fsize6:.6rem;
	.balance{
        .pricecard{

            .cointotal{
                font-size: 1.6rem;
                color: #333333;
                text-align: center;
            }
            .cointext{
                font-size:@fsize7;
                color: #999999;
                text-align: center;
                margin-bottom: 1rem;
                margin-top: .2rem;
            }
            button{
                margin: 0 .4rem;
            }
        }
        .btmlist{
            padding-top:4.7rem;
        }
        // .rechargelist{
        //     p{
        //         font-size: 12px;
        //         color: #666666;
        //         line-height: 12px;
        //         padding: .6rem .8rem;
        //     }
        // }
    }
</style>
