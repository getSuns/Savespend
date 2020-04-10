<template>
    <div class="forgetpassword tophead2">
		<headnav leftback="i-back" :flexnum="1"></headnav>
        <p class="cardtitle">输入新密码</p>
        <ul class="ulcard">
            <li><span class="lileft">新密码</span><span class="liright"><input v-model="passwordnew" placeholder="请输入您的新密码"  :type="pasnew.type" v-on:input="change"/><i :class="pasnew.ieyes" @click="typechange('new')"></i></span></li>
            <li><span class="lileft">确认密码</span><span class="liright"><input v-model="passwordcfm" placeholder="请再次输入您的密码" :type="pascom.type" v-on:input="change" /><i :class="pascom.ieyes" @click="typechange('com')"></i></span></li>
        </ul>
        <!-- <p class="smsver"  @click="gopage">短信验证</p> -->
        <div class="btnbox">
            <button :class="pasflag?'paybtn':'restbtn'" :disabled=!pasflag  @click="comfirmpas">完成</button>
        </div>
    </div>
</template>
<script>
    import headnav from "../../common/header" //第一步，导入组件
    import { Dialog } from 'vant';
	export default {
		components: {
			headnav //第二步，注册组件
        },
        data(){
            return{
                pasflag:false,
                passwordnew:"",
                passwordcfm:"",
                pasnew:{
                    passhow:false,
                    type:"password",
                    ieyes:'i-eyes1'
                },
                pascom:{
                    passhow:false,
                    type:"password",
                    ieyes:'i-eyes1'
                }
            }
        },
        methods:{
             comfirmpas(){
                 // 修改登录密码1 忘记登录密码（设置）2
                var type=this.$route.type;
                switch(Number(type)){
                    case 1:
                        console.log("修改登录密码1")
                        break;
                    case 2:
                       console.log("忘记登录密码（设置）2")
                        break;
                } 
             },
             change(){
                 if(this.passwordnew&&this.passwordcfm){
                     this.pasflag=true;
                 }else{
                     this.pasflag=false;
                 }
             },
            //  gopage(){
            //     //this.$router.push({name:'cardverify',params:{paspage:true}});
            // },
            typechange(type){
                if(type=="new"){
                    this.pasnew.passhow=!this.pasnew.passhow;
                    if(this.pasnew.passhow){
                        this.pasnew.type="text";
                        this.pasnew.ieyes="i-eyes2";
                    }else{
                        this.pasnew.type="password";
                        this.pasnew.ieyes="i-eyes1";
                    }
                }else{
                    this.pascom.passhow=!this.pascom.passhow;
                    if(this.pascom.passhow){
                        this.pascom.type="text";
                        this.pascom.ieyes="i-eyes2";
                    }else{
                        this.pascom.type="password";
                        this.pascom.ieyes="i-eyes1";
                    }
                }

            }
        }
	}
</script>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";
 .forgetpassword{
     .btnbox{
         margin-top:3.5rem;
     }
     span{
         font-size: .8rem;
     }
     .i-eyes1{
         .icon;
         background-image: url("../../../../static/img/icon_eyes_pre@2x.png");
         float:right;
         margin-top:.7rem;
     }
    .i-eyes2{
         .icon;
         background-image: url("../../../../static/img/icon_eyes_nor@2x.png");
         float:right;
         margin-top:.7rem;
     }
     .lileft{
         display: inline-block;
         width: 3.5rem;
     }
     .smsver{
         .bkhtips;
         margin-top: .5rem;
         margin-right: .8rem;
     }
     .liright{
         input{
             font-size: .8rem;
             color: #ccc;
             letter-spacing: 5px;
         }
     }
     input::-webkit-input-placeholder { /* WebKit browsers */
            letter-spacing:normal;
        }
        input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            letter-spacing:normal;
        }
        input::-moz-placeholder { /* Mozilla Firefox 19+ */
            letter-spacing:normal;
        }
        input:-ms-input-placeholder { /* Internet Explorer 10+ */
            letter-spacing:normal;
        }
 }

</style>