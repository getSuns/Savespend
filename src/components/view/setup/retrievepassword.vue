<template>
    <div class="retrievepassword tophead2">
		<headnav leftback="i-back" :flexnum="1"></headnav>
        <p class="cardtitle">忘记密码</p>
        <div class="cardmid">
            <ul class="ulcard">
                <li>
                   <em class="emleft">手机号</em><span>{{ tel | settel }}</span>
                </li>
                <li>
                     <van-field
                        class="fiedinput"
                        type="number"
                        v-model="sms"
                        label-width="3.5rem"
                        center
                        clearable
                        label="验证码"
                        placeholder="请输入短信验证码"
                    >
                    
                        <van-button v-show="downflag" slot="button" size="small" type="primary" color="#0070FF" class="veribtn"  @click="start">获取验证码</van-button>
                        <van-button v-show="!downflag" disabled slot="button" size="small" type="primary" color="#F5F5F5" class="veribtn sended">重新发送(
                            <van-count-down class="downtime" ref="countDown"  :auto-start="false" :time="time" format="ss"  @finish="finish" />)</van-button>
                    </van-field>
                </li>
            </ul>
           
            <p class="tips" v-if="$route.params.type==2"><span @click="gopage">收不到验证码？更换银行卡验证</span></p>
        </div>
        <div class="btnbox">
            <button :class="sms?'paybtn':'restbtn'" :disabled=!sms @click="gonewpas">下一步{{$route.params.type}}</button>
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
                time: 10000,
                sms:"",
                tel:"13988779933",
                show: false,
                downflag:true,

            }
        },
        computed:{
            
        },
        filters:{
            settel(tel) {
                let re=/(\d{3})\d{6}(\d{2})/;
 	            return tel.replace(re,'$1******$2');
            },
        },
        mounted:function(){
            var type=this.$route.type;
            console.log(type);
             //type   忘记登录密码 1 忘记支付密码 2
            switch(Number(type)){
                
                case 1:
                    console.log("忘记登录密码");
                    break;
                case 2:
                    console.log("忘记支付密码");
                    break;
            } 
        },
        methods:{
            clearinput(){
                this.sms='';
            },
            showPopup() {
                this.show = true;
            },
            start(){
                this.$refs.countDown.start();
                this.downflag=false;
            },
            finish(){
                this.downflag=true;
                this.$refs.countDown.reset();
            },
            gopage(){
                this.$router.push({name:'cardverify',params:{paspage:true}});
            },
            gonewpas(){
               //type   忘记登录密码 1  忘记支付密码 2
               if(this.$route.params.type==1){
                   this.$router.push({name:'forgetpassword',params:{type:2}});//忘记登录密码进入登录密码设置专页（新旧页面同页）
               }else{
                   this.$router.push({name:'untying',params:{type:3}}); //忘记支付密码进入支付密码设置专页（同解绑页）
               }
                
            }
           
            
        }
	}
</script>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";
 .van-field__control input:disabled{
     color: #333!important;
 }
 .van-cell{
         font-size: .8rem!important;
         padding: 10px 0;
    }
 .retrievepassword{
     .btnbox{
         margin-top:3.5rem;
     }
     .tips{
        .agreementtips;
        margin-right: .8rem;
     }
     .veribtn{
         .bkhradius;
        line-height: 1.6rem;
        height: 1.6rem;
        padding: 0 .8rem;
     }
     .sended{
         .van-button__text{
             color: #999;
         }
        .downtime{
            display: inline-block;
            color: #999;
        }
     }
    .dialogdiv{
        padding: 1rem;
        font-size: .7rem;
        color: #333;
        p{
            line-height: 1.3rem;
            height: 1.3rem;
        }
    }
    .ulcard li{
        height: auto!important;
    }
 }

</style>