<template>
<div class="payresult tophead7">
    <headnav></headnav>
    <div class="paysuccess" v-if="paystate">
        
        <div class="top">
            <p class="paystate">
                <img class="stateimg" src="../../../../static/img/pay_success.png" />
                <span class="bluetext">支付成功</span>
            </p>
            <p class="btnbox">
                <router-link to="/"><button class="graybtn">返回首页</button></router-link>
                <router-link :to="{name:'publishevaluate',params:{idname:'222'}}"><button class="redbtn">立即评价</button></router-link>
            </p>
        </div>
        <div class="btm">
            <img class="welfareimg" src="../../../../static/img/redbox@2x.png" />

        </div>
    </div> 
    <div class="fail" v-else>
        <p class="paystate"><img class="stateimg"  src="../../../../static/img/pay_fail.png" />
        <span class="redtext">支付失败</span></p>
        <div class="btnbox">
            <router-link to="/paytype"><span class="paybtn">重新支付</span></router-link>
        </div>
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
                paystate:this.$route.params.paystate,
            }
        },
        mounted:function(){
            localStorage.removeItem('hou');
        }
    }
</script>
<style>
	
</style>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";
 .payresult{
     background: #fff;
     height: 100%;
 }
 .orderbtn(@color,@boder){
    border: 1px solid @boder;
    border-radius: 8px;
    font-size: .7rem;
    color: @color;
    text-align: center;
    background-color: #fff;
    width: 4.7rem;
    height: 1.9rem;
    margin: .7rem;
 }
 .paysuccess{
    .graybtn{
        .orderbtn(#666,#999);
    }
    .redbtn{
        .orderbtn(#E62129,#E62129);
    }
    .btnbox{
        text-align: center;
        border-bottom: 1px solid #e4e4e4;
    }
    .btm{
        padding: 1.6rem .8rem .8rem;
        img{
            width: 100%;
            height: 4.5rem;
        }
    }
 }

.paystate{
    text-align: center;
    margin:1.5rem .6rem .6rem;
    span{
        display: block;
    }
    .stateimg{
        height: 2.8rem;
        width: 2.8rem;
    }
    .statetext(@color){
        font-size:.9rem;
        color: @color;
        text-align: center;
        font-weight: bold;
        margin-top: .5rem;
    }
    .bluetext{
       .statetext(#0070FF) 
    }
    .redtext{
       .statetext(#E62129) 
    }
}
.fail{
    .btnbox{
        margin-top: 30%;
    }
}
</style>