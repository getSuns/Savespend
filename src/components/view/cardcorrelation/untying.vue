<template>
	<div class="untying tophead2">
		<headnav leftback="i-back" :flexnum="1" titletext="" :eventtitle="this.pages.eventtitle"></headnav>
        <div class="middle">
            <div class="untyingbox">
                <p class="untyingtitle">{{pages.title}}</p>
                <p class="untyingtips">{{pages.titletype}}</p>
            </div>
            <!-- 密码输入框 -->
            <van-password-input
            :value="value"
            :focused="showKeyboard"
            @focus="showKeyboard = true"
            />
        </div>
        <div class="btm">
             <!-- 数字键盘 -->
            <van-number-keyboard
            :show="showKeyboard"
            @input="onInput"
            @delete="onDelete"
            @blur="showKeyboard = false"
              >
            <i slot="delete" class="i-keyback"></i>
            </van-number-keyboard>
        </div>
        <div class="btnbox" v-if="pages.btn">
            <button :class="value.length==6?'paybtn':'restbtn'" @click="onComplete">完成</button>
        </div>
	</div>
</template>

<script>
    import headnav from "../../common/header"; //第一步，导入组件
    import { PasswordInput, NumberKeyboard, Toast } from 'vant';
	export default {
    components: {
        headnav,//第二步，注册组件
    },
    data() {
        return {
            value: '',
            newpas:'',
            showKeyboard: true,
            pagestype:this.$route.params.type,//页面类型
            pages:{
                title:"解绑银行卡",
                titletype:"请输入支付密码验证身份",
                btn:false,
                processtype:1,
                eventtitle:"",

            }
        };
    },
    watch:{
    },
    computed:{
       
    },
    mounted:function(){
         //解绑银行卡1 个人中心修改支付密码2 支付时忘记密码进入设置支付新密码3 个人中心忘记支付密码进入3
        this.paypasProcess(this.pagestype,true);
    },

    methods: {
        onInput(key) {//先改这再赋值给的input
            var processtype=this.pages.processtype;
            this.value = (this.value + key).slice(0, 6);
            if(processtype==3){
                this.newpas=this.value;
            }
            if(this.value.length==6){
                
                switch(Number(processtype)){
                    case 1:
                        console.log("解绑成功")
                        break;
                    case 2:
                    case 3:
                        this.pages.processtype=processtype+1;
                        this.paypasProcess(this.pages.processtype,false);
                        break;
                    case 4:
                        this.showKeyboard=false;
                        break;
                }
            }
        },
        onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
        },
        paypasProcess(type,pagetype){
            this.value="";
            this.showKeyboard=true;
            switch(Number(type)){
                case 1:
                    break;
                case 2:
                    this.pages.title="修改支付密码";
                    this.pages.titletype="请输入支付密码验证身份";
                    this.pages.processtype=2;// 修改密码需再验证旧密码
                    break;
                case 3:
                    this.pages.title="设置新支付密码";
                    this.pages.titletype="请输入新支付密码，用于支付验证";
                    this.pages.processtype=3;//  忘记密码无需验证旧密码
                    break;
                case 4:
                    this.pages.title="设置新支付密码";
                    this.pages.titletype="再次输入新密码";
                    this.pages.btn=true;
                    this.pages.processtype=4;
                    this.pages.eventtitle="确认要放弃修改密码吗？"
                    break;
            } 
        },
        //再次确认 完成事件
        onComplete(){
            console.log("newpas:"+this.newpas);
            console.log("value:"+this.value);
            if (this.newpas==this.value) {
                Toast("修改成功");
            }else{
                Toast("两次密码不一致");
            }
        }
    }
    
    }
</script>

<style lang="less" scoped>
 @import "../../../assets/css/public.less";
.untying{
    padding-bottom: 2.6rem;
    .middle{
        background: #fff;
        padding-bottom: 2.5rem;
    }
    .untyingbox{
        padding: .8rem;
        margin-bottom: 1.8rem;
        .untyingtitle{
            font-size:1.1rem;
            color: #333333;
            text-align: center;
            padding: 1rem;
        }
        .untyingtips{
            font-size: .7rem;
            color: #333333;
            text-align: center;
            line-height:  .7rem;
        }
    }
    .btnbox{
        padding-top: 3rem;
    }
}
[class*=van-hairline]::after{
    border: 1px solid #ccc;
}
</style>
