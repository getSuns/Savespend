<template>
    <div class="payoder tophead7">
		<headnav leftback="i-back" :flexnum="1.5" titletext="胖哥俩（万家丽)" righttext="优惠说明" pageurl="conpon"></headnav>
        <div class="midinfo">
            <ul class="ulcard">
                <li><span class="lileft">总额</span><span class="liright"><input class="input" v-on:input="change" type="number" v-model.number="discountprice" placeholder="询问商家后输入"><span class="unit">元</span></span></li>
                <li><span class="lileft">不参与优惠金额</span><span class="liright"><input class="input" v-on:input="change" type="number" v-model.number="outconpon" placeholder="酒水，特价等"><span class="unit">元</span></span></li>
            </ul>
            <ul class="ulcard">
                <li><span class="lileft">优惠券</span><span class="liright" @click="gopage"><span class="input textred">{{conpontext}}</span><i class="i-right unit"></i></span></li>
                <li><span class="lileft">合计金额</span><span class="liright"><dfn class="totalprice">{{totalprice}}</dfn><span class="unit">元</span></span></li>
            </ul>
            <div class="midbtn btnbox">
                <span v-if="payflag" @click="paybill" class="paybtn"><dfn class="">{{totalprice}}元</dfn>买单</span>
                <span v-else @click="paybill" class="restbtn"><dfn class="">确认买单</dfn></span>
                <p class="tips">买单仅限于到店支付，请勿提前购买</p>
            </div>
        </div>
        <div class="btminfo kefutips">
            <i class="i-msg"></i>
            <span>联系客服</span>
        </div>
    </div>
</template>
<script>
	import headnav from "../../common/header" //第一步，导入组件
	export default {
		components: {
			headnav //第二步，注册组件
        },
        data(){
            return{
                payflag:false,
                discountprice:"",
                outconpon:"",
                conpon:"",
                totalprice:"",
                conpontext:"请输入金额",
                conponid:"1"
            }
        },
        mounted:function(){

        },
        methods:{
            paybill(){
                
				this.$router.push('/paytype');
            },
            change(){
                
                if(this.discountprice){
                    this.payflag=true;
                    this.conpontext=this.conpon?this.conpon:'1个可用';
                }else{
                    this.payflag=false;
                    this.conpon='';
                }
                this.gettotalprice();
            },
            gopage(){
                if(this.payflag){
                    var orderinfo={
                       discountprice:this.discountprice,
                       outconpon:this.outconpon,
                       conpon:this.conpon,
                       conpontext:this.conpontext,
                       totalprice:this.totalprice,
                       conponid:this.conponid
                    }
                    localStorage.setItem('hou', JSON.stringify(orderinfo));
                    this.$router.push('/conponlist')
                }
                
            },
            gettotalprice(){
                if(!this.conpon){
                    this.totalprice=this.discountprice;
                }else{
                    if(this.outconpon){
                         this.totalprice=this.discountprice-this.outconpon;
                    }
                }
                //有不参与金额 有优惠券 
                //有不参与金额 没有优惠券
                //没有不参与没有优惠券
                //没有不参与有优惠券

            }
        }
	}
</script>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";
 .midinfo{
     .lileft{
         color: #333;
     }
     .liright{
         float:right;
         text-align: right;
         
        .input{
             text-align: right;
             background-color: #fff;
        }
        input::-webkit-input-placeholder { /* WebKit browsers */
            color: #ccc;
        }
        input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color: #ccc;
        }
        input::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: #ccc;
        }
        input:-ms-input-placeholder { /* Internet Explorer 10+ */
            color: #ccc;
        }
         .unit{
            color: #ccc;
            margin-left: .2rem;
         }
     }
     .tips{
         font-size: .6rem;
         color: #999;
         padding: .6rem 0;
     }
     .midbtn {
         margin-top: 60px;
         dfn{
             margin-right: 10px;
             font-size: .8rem;
         }
     }
     .totalprice{
         color: #E62129;
         font-weight:bold;
         font-style: normal;
     }
 }

</style>