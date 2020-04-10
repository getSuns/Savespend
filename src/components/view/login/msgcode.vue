<template>
	<div class="msgcode tophead2">
		<headnav leftback="i-back" :flexnum="1"></headnav>
        <div class="middle">
                <div class="logintitle">
                    <p>欢迎来到掰开花</p>
                    <em>验证码已发送至 188 1738 3845</em>
                </div>
                <div class="codebox">
                    <van-password-input
                    class="pasinput"
                    :value="value"
                    :length="4"
                    :mask="false"
                    gutter="40"
                    :focused="showKeyboard"
                    @focus="showKeyboard = true"
                    />
                    <p class="tips" v-show="downflag"><van-count-down class="downtime" ref="countDown" :time="time" format="ss"  @finish="finish" :auto-start="false" />秒后重新获取验证码</p>
                    <p class="tips bkhblue" v-show="!downflag" @click="start">获取验证码</p>
                </div>
        </div>
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
</template>

<script>
    import headnav from "../../common/header" //第一步，导入组件
	export default {
		components: {
            headnav,//第二步，注册组件
        },
          data() {
            return {
            value: '',
            showKeyboard: true,
            time:10000,
            downflag:true,
            };
        },
        mounted:function(){
            this.start();
        },
        methods: {
            onInput(key) {
            this.value = (this.value + key).slice(0, 4);
             console.log(this.value)
                if(this.value.length==4){
                    console.log(this.value)
                    this.topage();
                }
            },
            onDelete() {
            this.value = this.value.slice(0, this.value.length - 1);
            },
            start(){
                this.downflag=true;
                this.$refs.countDown.start();
            },
            finish(){
                this.downflag=false;
                this.$refs.countDown.reset();
            },
            topage(){
                this.$router.push("/")
            }
        }
	}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/public.less";
.msgcode{
    .van-count-down{
        display: inline-block;
        color: #999;
    }
    .codebox{
        .van-password-input{
            margin: 0;
        }
        li{
            border-bottom: 1px solid #ccc;
            font-size: 1.6rem;
            color: #333333;
        }
    }
    .fullscreen;
    background: #fff;
    .middle{
        padding: 0 .8rem;
    }
    .pasinput{
        margin: 1.2rem 0;
    }
    .tips{
        font-size: 12px;
        color: #999999;
        text-align: right;
    }
}
    
</style>
