<template>
    <div class="phonemodify tophead2">
		<headnav leftback="i-back" :flexnum="1"></headnav>
        <p class="cardtitle">{{typeobj.cardtitle}}</p>
        <div class="middle">
            <van-field
                v-model="typeobj.tel"
                center
                clearable
                :label="typeobj.label"
                :placeholder="typeobj.placeholder"
                clear="clearinput"
                label-width="3.5rem"
            />
           
            <div class="btnbox">
                <button :class="typeobj.tel?'paybtn':'restbtn'"  :disabled=!typeobj.tel   @click="verificationtel">下一步</button>
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
                tel:"",
                pas:"",
                phoneobj:{
                    cardtitle:"更换手机号",
                    model:this.tel,
                    label:"手机号",
                    placeholder:"请输入需要绑定的新手机号码",
                },
                pasobj:{
                    cardtitle:"输入旧密码",
                    model:this.pas,
                    label:"旧密码",
                    placeholder:"请输入当前登陆密码",
                },
                typeobj:{},
            }
        },
        mounted:function(){
            var type= this.$route.params.type;
            if(type=="phone"){
                this.typeobj=this.phoneobj;
            }else if(type=="password"){
                this.typeobj=this.pasobj;
            }
        },
        methods:{
            clearinput(){
                this.tel='';
            },
            verificationtel(){
                if(this.$route.params.type=="phone"){
                this.$router.push({name:"verificationtel",params:{type:2}});//更换手机号验证页2
                }else{
                    this.$router.push({name:'forgetpassword',params:{type:1}})//修改登录密码为1
                }
                
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
 .phonemodify{
     .btnbox{
         margin-top:3.5rem;
     }
 }

</style>