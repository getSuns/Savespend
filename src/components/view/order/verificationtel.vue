<template>
    <div class="verificationtel tophead2">
		<headnav leftback="i-back" :flexnum="1"></headnav>
        <p class="cardtitle">{{$route.params.type==1?'验证手机号':'输入验证码'}}</p>
        <div class="cardmid">
           
            <van-cell-group>
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
            </van-cell-group>
            <p class="tips"><span  @click="showPopup">收不到验证码？</span></p>
        </div>
        <div class="btnbox">
            <button :class="sms?'paybtn':'restbtn'" :disabled=!sms >完成</button>
        </div>
        <van-dialog
        v-model="show" title="收不到验证码" :showConfirmButton="false" closeOnClickOverlay 
        >
            <div class="dialogdiv">
                <p>验证码发送至你的银行预留手机号</p>
                <p>1、请确认当前是否使用银行预留的手机号码</p>
                <p>2、请检查短信是否被手机安全软件拦截</p>
                <p>3、若预留号码已停用，请联系银行客服咨询</p>
                <p>4、获得更多帮助，请联系客服</p>
            </div>
        </van-dialog>
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
                show: false,
                downflag:true,
            }
        },
        mounted:function(){

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
            }
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
 .verificationtel{
     .btnbox{
         margin-top:3.5rem;
     }
     .tips{
        .agreementtips;
        margin-right: .8rem;
     }

     .lileft{
         width: 3.5rem;
         display: inline-block;
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
        //.fiedinput{
        //   font-weight: bold;
        //}
        // input::-webkit-input-placeholder { /* WebKit browsers */
        //     font-weight: normal;
        // }
        // input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        //     font-weight: normal;
        // }
        // input::-moz-placeholder { /* Mozilla Firefox 19+ */
        //     font-weight: normal;
        // }
        // input:-ms-input-placeholder { /* Internet Explorer 10+ */
        //     font-weight: normal;
        // }
    .dialogdiv{
        padding: 1rem;
        font-size: .7rem;
        color: #333;
        p{
            line-height: 1.3rem;
            height: 1.3rem;
        }
    }
 }

</style>