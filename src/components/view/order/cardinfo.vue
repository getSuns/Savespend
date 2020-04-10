<template>
    <div class="cardinfo tophead2">
		<headnav leftback="i-back" :flexnum="1"></headnav>
        <p class="cardtitle">填写银行卡信息</p>
        <div class="cardmid">
            <ul class="ulcard">
                <li><span class="lileft">银行</span><span class="liright">{{cardname}}</span></li>
                <li><span class="lileft">卡类型</span><span class="liright">{{cardtype}}</span></li>
            </ul>
            <van-field clearable clear="clearinput" label="手机号" center v-model="tel" placeholder="请输入银行预留手机号" label-width="3.5rem" />
        </div>
            <div class="btnbox">
                <button :class="tel?'paybtn':'restbtn'"  :disabled=!tel   @click="verificationtel">同意用户协议并绑定</button>
                <p class="payagreement">《掰开花支付服务协议》</p>
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
                tel:"",
                cardname:"长沙银行",
                cardtype:"储蓄",
            }
        },
        methods:{
            clearinput(){
                this.tel='';
            },
            verificationtel(){
                this.$router.push({name:"verificationtel",params:{type:1}});//绑定银行卡手机号验证页
            },
        }
	}
</script>
<style>
.van-cell{
         font-size: .8rem!important;
     }
</style>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";
 .cardinfo{
     
     .btnbox{
         margin-top:3.5rem;
     }
     .payagreement{
         .bkhblue;
         font-size: .6rem;
         text-align: right;
         margin-top: .8rem;
     }

     .lileft{
         width: 3.5rem;
         display: inline-block;
     }

 }

</style>