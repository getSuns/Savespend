<template>
	<div class="cashout tophead7">
		<headnav leftback="i-back" :flexnum="1" titletext="余额提现"></headnav>
        <div class="middle">
            <div class="cardcell">
                <p class="title">到账银行卡</p>
                <div class="cardbox" >
                    <div class="cardleft" v-if="cashprice" @click="cardshow=true">
                        <i class="cardicon i-zg"></i>
                        <span class="cardinfo">
                            <p class="cardname">中国银行<em>(8887)</em></p>
                            <p class="tips">24小时内到账</p>
                        </span>
                    </div>
                    <router-link to="/addcard" v-else>
                        <div class="unbind">未绑定银行卡，前去绑卡</div>
                    </router-link>
                    <div class="cardright"><i class="i-right"></i></div>
                </div>
            </div>
            <div class="cardcell">
                <p class="title">到账银行卡</p>
                <div class="cardbox cashoutbox">
                    <em class="priceuint">￥</em>
                    <input type="number" class="priceinput" v-model="cashprice" placeholder="可提现余额共88元" />
                    <em class="righttext">全部提现</em>
                </div>
            </div>
        </div>
        <div class="btm">
            <div class="btnbox">
                <button :class="cashprice?'paybtn':'restbtn'" :disabled="!cashprice" @click="show=true">提现</button>
            </div>
        </div>
        <van-popup
        v-model="cardshow"
        closeable
        position="bottom"
        :style="{ height: '50%' }"
        >
        <div class="cardpopup">
            <p class="popuptitle">选择到账银行卡</p>
            <ul>
                <li>
                    <div class="cardleft">
                        <i class="cardicon i-zg"></i>
                        <span class="cardinfo">
                            <p class="cardname">中国银行<em>(8887)</em></p>
                            <p class="tips">24小时内到账</p>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="cardleft">
                        <i class="cardicon i-zg"></i>
                        <span class="cardinfo">
                            <p class="cardname">中国银行<em>(8887)</em></p>
                            <p class="tips">24小时内到账</p>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="cardleft">
                        <i class="cardicon i-zg"></i>
                        <span class="cardinfo">
                            <p class="cardname">中国银行<em>(8887)</em></p>
                            <p class="tips">24小时内到账</p>
                        </span>
                    </div>
                </li>
                <li>
                    <div class="cardleft">
                        <i class="cardicon i-zg"></i>
                        <span class="cardinfo">
                            <p class="cardname">中国银行<em>(8887)</em></p>
                            <p class="tips">24小时内到账</p>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        </van-popup>
         <van-popup v-model="show" :style="{ height: '30%',width:'85%',borderRadius:'8px'}">
             <div class="passwordbox">
                <p class="pastitle">请输入支付密码</p>
                <van-password-input
                :value="value"
                :focused="showKeyboard"
                @focus="showKeyboard = true"
                />
                <router-link :to="{name:'retrievepassword', params: {type:2}}"><p class="forgetpas">忘记密码？</p></router-link>
            </div>
       </van-popup>
        <van-number-keyboard v-if="show"
                :show="showKeyboard"
                @input="onInput"
                @delete="onDelete"
                @blur="showKeyboard = false"
                />
	</div>
</template>

<script>
    import headnav from "../../common/header"; //第一步，导入组件
	export default {
        components: {
            headnav,//第二步，注册组件
        },
        data() {
            return {
                cardshow:false,
                cashprice:"",
                value: '',
                show: false,
                showKeyboard: false,
            };
        },

        methods: {
            showPopup() {
                this.show = true;
            },
            onInput(key) {
                this.value = (this.value + key).slice(0, 6);
                console.log(this.value);
                console.log(this.value.length)
                if(this.value.length==6){
                    //密码输入完成业务
                    this.showKeyboard=false;
                    this.$router.push({name:'payresult',params:{paystate:false}})
                }

            },
        }
    }
</script>

<style lang="less" scoped>
 @import "../../../assets/css/public.less";
 //密码支付
 .van-hairline--surround{
        padding: 0!important;
    }
    .van-popup--center{
            top: 38%!important;
    }
    .van-number-keyboard{
        z-index: 9999!important;
    }
    .passwordbox{
        .pastitle{
            font-size: 0.9rem;
            color: #333;
            position: relative;
            line-height: 2.5rem;
            height: 2.5rem;
            text-align: center;
            margin: .5rem .8rem 1rem .8rem;

        .i-close{
            position: absolute;
            left: 0;
            top:.6rem;
        }
    }
    }
 //密码支付
.cashout{
    .cardicon{
            display: inline-block;
            background: #fff;
            border-radius: 100px;
            height: 1.8rem;
            width: 1.8rem;
            margin-right: .2rem;
            background-size: 2rem;
            background-repeat: no-repeat;
            background-position: -0.1rem -.1rem;
        }
        .cardinfo{
            display: inline-block;  
            vertical-align: top;
        }
        .cardname{
            font-size: .8rem;
            line-height: 1rem;
            height: 1rem;
            color: #333;
            em{
                padding-left: .5rem;
            }
        }
        .tips{
            font-size: .6rem;
            line-height: 1.1rem;
            color: #999;
        }
   .unbind{
        font-size: .7rem;
        color: #0070FF;
   }
 .cardcell{
        margin-bottom:.5rem;
        height: 6.6rem;
        border-radius: 4px;
        position: relative;
        padding:0 .8rem;
        background: #fff;
        .title{
            font-size: .7rem;
            color: #666666;
            border-bottom: 1px solid #e4e4e4;
            height: 2.2rem;
            line-height: 2.2rem;    
        }
        .cardbox{
            height: 4.6rem;
            padding: 1.4rem 0;
            .flex;
        }

    }
    .cashoutbox{
        line-height: 1.8rem;
        width: 100%;
        .righttext{
            font-size: .7rem;
            color: #0070FF;
            text-align: right;
            flex:2;
        }
        .priceuint{
            font-size: 1.8rem;
            color: #333;
            flex:1;
            display: inline-block;
        }
        .priceinput{
            display: inline-block;
            font-size: 1.6rem;
            flex:4;
            width: 100%;
        }
        input::-webkit-input-placeholder { /* WebKit browsers */
            font-size: .8rem;
            color: #CCCCCC;
            line-height: 1.8rem;
            height: 1.8rem;
        }
        input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
           font-size: .8rem;
            color: #CCCCCC;
            line-height: 1.8rem;
            height: 1.8rem;
        }
        input::-moz-placeholder { /* Mozilla Firefox 19+ */
            font-size: .8rem;
            color: #CCCCCC;
            line-height: 1.8rem;
            height: 1.8rem;
        }
        input:-ms-input-placeholder { /* Internet Explorer 10+ */
            font-size: .8rem;
            color: #CCCCCC;
            line-height: 1.8rem;
            height: 1.8rem;
        }
    }
    .cardpopup{
        ul{
            padding: 0 .8rem;
        }
        li{
            border-bottom: 1px solid #e4e4e4;
            padding: .9rem 0;
        }
        .popuptitle{
            padding: .8rem 0 1.2rem 0;
            text-align: center;
        }
    }
    
}
</style>
