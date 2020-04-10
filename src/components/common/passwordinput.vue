<template>
        <div class="paypas" :v-show="show">
            <div class="passwordbox">
                <p class="pastitle"><i class="i-close"></i>请输入支付密码</p>
                <van-password-input
                :value="value"
                :focused="showKeyboard"
                @focus="showKeyboard = true"
                />
                <p class="forgetpassword">忘记密码？</p>
            </div>
                <van-number-keyboard
                :show="showKeyboard"
                @input="onInput"
                @delete="onDelete"
                @blur="showKeyboard = false"
                />
                
           <van-overlay :show="show" @click="show = false" />
        </div>
</template>
<script>
export default {
        props:{
            show:Boolean
        },
      data(){
            return{
                value: '',
                showKeyboard: true
            }
        },
        methods:{
            onInput(key) {
                this.value = (this.value + key).slice(0, 6);
            },
            onDelete() {
                this.value = this.value.slice(0, this.value.length - 1);
            }
        }
}
</script>
<style lang="less" scoped>
 @import "../../assets/css/public.less";
.paypas{
    .pastitle{
        font-size: .9rem;
        color: #333;
        position: relative;
        line-height: 2.5rem;
        height: 2.5rem;
        text-align: center;
        margin: 0 .8rem;
        .i-close{
            position: absolute;
            left: 0;
            top:.6rem;
        }
    }
    .forgetpas{
        text-align: right;
        padding-right: .8rem;
        font-size: .6rem;
        color: #0070FF;
        line-height: 1.8rem;
        height: 1.8rem;
    }
}
</style>