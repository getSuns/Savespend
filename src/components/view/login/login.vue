<template>
	<div class="login tophead2">
		<headnav leftback="i-back" :flexnum="1"></headnav>
            <div class="middle">
                <div class="msgcodebox" v-show="codelogin">
                    <div class="logintitle">
                        <p>欢迎来到掰开花</p>
                        <em>未注册的手机号码，验证后系统将自动创建账号！</em>
                    </div>
                    <div class="bkhnum">
                        <p class="numtext">账号</p>
                        <van-field class="loginnum" center type="number" maxlength="11" v-model="phone" clearable placeholder="请输入手机号" />
                    </div>
                    <div class="btnbox">
                        <router-link to="/msgcode"><button :class="phone.length==11?'paybtn':'restbtn'">获取验证码</button></router-link>
                        <p class="bkhtips" @click="codelogin=false">密码登录</p>
                    </div>
                </div>
                <div class="accountpassword" v-show="!codelogin" >
                    <div class="logintitle">
                        <p>欢迎来到掰开花</p>
                        <em>未注册请使用短信验证码登录</em>
                    </div>
                    <div class="bkhnum">
                        <p class="numtext">账号</p>
                        <van-field class="loginnum" center v-model="account" clearable placeholder="请输入账号" />
                        <p class="numtext top1">密码</p>
                        <van-field class="loginnum" :type="typepas" :right-icon="iconsrc" center v-model="password" @click-right-icon="iconclick" placeholder="请输入密码" />
                    </div>
                    <div class="btnbox">
                        <router-link to="/"><button :class="loginbtn?'paybtn':'restbtn'">登录</button></router-link>
                        <p class="bkhtips" @click="codelogin=true">短信验证码登录</p>
                    </div>
                </div>
            </div>
        
        
           
        <div class="btm">
            <van-divider>第三方登录</van-divider>
            <ul class="applogin">
                <li>
                    <img src="../../../../static/img/weibo@2x.png" />
                </li>
                 <li>
                    <img src="../../../../static/img/weixin@2x.png" />
                </li>
                 <li>
                    <img src="../../../../static/img/qq@2x.png" />
                </li>
            </ul>
            <p class="loginagreement" @click="openvipflag=true">登录即同意<em class="textred">《用户协议》</em>、<em class="textred">《隐私政策》</em></p>
        </div>
        <van-popup v-model="openvipflag" class="vippopup">
			<openvip></openvip>
		</van-popup>
         <van-popup v-model="newuser" class="redpopup">
             <img class="redboximg"  src="../../../../static/img/redbox@3x.png" />
		</van-popup>
	</div>
</template>

<script>
    import headnav from "../../common/header"; //第一步，导入组件
    import openvip from "../../common/openvip.vue";

	export default {
		components: {
            headnav,//第二步，注册组件
            openvip
        },
        data() {
            return {
                newuser:true,
                codelogin:true,
                phone:"",
                account:"",
                password:"",
                openvipflag:false,
                iconsrc:"../../../../static/img/icon_eyes_nor@2x.png",
                typepas:"password"
            };
        },
        watch:{
			iconsrc:function(newValue,oldValue){
				this.iconsrc=newValue;
            },
            typepas:function(newValue,oldValue){
				this.typepas=newValue;
			}
        },
         computed: {
            // 计算属性的 getter
            loginbtn: function () {
            // `this` 指向 vm 实例
                if(this.account&&this.password){
                    return true;
                }else{
                    return false;
                }
            }
        },
        methods:{
            iconclick(){
                var src1="../../../../static/img/icon_eyes_pre@2x.png";
                var src2="../../../../static/img/icon_eyes_nor@2x.png";
                this.iconsrc=this.iconsrc==src1?src2:src1;
                this.typepas=this.typepas=="password"?"text":"password";
            }
        }
	}
</script>
<style lang="less">
    .vippopup,.redpopup{
        border-radius: 8px!important;
        right: 1.35rem!important;
        left: 1.35rem!important;
        top: 50%;
        transform: translateY(-50%);
    }
    .redpopup{
        background-color: rgba(255, 255, 255,0)!important;
        right: .8rem !important;
        left: .8rem !important;
    }
    .van-icon{
        font-size: 24px!important;
    }
</style>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";
.redboximg{
    width: 100%;
    height: 18.6rem;
}
.login{
    .fullscreen;
    .logintitle,.bkhnum{
        padding-left: .8rem;
        padding-right: .8rem;
    }
    .bkhnum{
        margin-bottom: 2.6rem;
        margin-top: 1rem;
        .numtext{
            font-size: .7rem;
            color: #999999;
        }
        .loginnum{
            font-size: .9rem;
            color: #333333;
            width: 100%;
            padding-left: 0;
            height: 2.2rem;
            border-bottom: 1px solid #e4e4e4;
            line-height: 2.2rem
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
    }
    .applogin{
        .flex;
        padding: .4rem 1.5rem;
        img{
            width: 2.6rem;
            height: 2.6rem;
        }
    }
    .loginagreement{
        padding: .8rem 0;
        font-size:.6rem;
        color: #999999;
        text-align: center;
    }
    .btm{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .bkhtips{
        margin-top: .8rem;
    }
    .accountpassword{
        .top1{
                margin-top: 1rem;
            }
        .bkhnum{
            margin-bottom: 1rem;
        }
    }
   
}
    
</style>
