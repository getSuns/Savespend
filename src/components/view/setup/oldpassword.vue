<!--无用页面 当前更换手机号页为phonemodify -->
<template>
    <div class="phonemodify tophead2">
		<headnav leftback="i-back" :flexnum="1"></headnav>
        <p class="cardtitle">更换手机号</p>
        <div class="middle">
            <van-field
                v-model="tel"
                center
                clearable
                label="手机号"
                placeholder="请输入需要绑定的新手机号码"
                clear="clearinput"
                label-width="3.5rem"
            />
            <div class="btnbox">
                <button :class="tel?'paybtn':'restbtn'"  :disabled=!tel   @click="verificationtel">下一步</button>
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
            }
        },
        methods:{
            clearinput(){
                this.tel='';
            },
            verificationtel(){
                this.$router.push({name:"verificationtel",params:{type:2}});//更换手机号验证页
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