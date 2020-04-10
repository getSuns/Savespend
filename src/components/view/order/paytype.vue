<template>
    <div class="paytype tophead2">
		<headnav leftback="i-back" :flexnum="1" titletext="收银台"></headnav>
        <div class="midinfo">
            <p class="midprice"><span class="priceunit">￥</span><span class="totalprice">88.00</span></p>
            <div class="midtype">
                <van-radio-group v-model="radio">
                <ul class="typeul">
                    <li>
                        <span class="typeleft"><i class="i-balance"></i></span>
                        <span  class="typeright">
                            <span class="typename">账户余额</span>
                            <van-radio name="zhye" class="radiostyle">
                                <img
                                    slot="icon"
                                    slot-scope="props"
                                    :src="props.checked ? icon.active : icon.inactive"
                                    >
                            </van-radio>
                        </span>
                    </li>
                     <li>
                        <span class="typeleft"><i class="i-balanceno"></i></span>
                        <span  class="typeright">
                            <span class="typenameno">账户余额(余额不足)</span>
                            <van-radio name="2" class="radiostyle">
                                  <img
                                    slot="icon"
                                    slot-scope="props"
                                    :src="props.checked ? icon.active : icon.inactive"
                                    >
                            </van-radio>
                        </span>
                    </li>
                     <li>
                        <span class="typeleft"><i class="i-wx"></i></span>
                        <span  class="typeright">
                            <span class="typename">微信支付</span>
                             <van-radio name="wx" class="radiostyle">
                                    <img
                                    slot="icon"
                                    slot-scope="props"
                                    :src="props.checked ? icon.active : icon.inactive"
                                    >
                             </van-radio>
                        </span>
                    </li>
                     <li>
                        <span class="typeleft"><i class="i-zfb"></i></span>
                        <span  class="typeright boderno">
                            <span class="typename">支付宝</span>
                            <van-radio name="zfb" class="radiostyle">
                                <img
                                    slot="icon"
                                    slot-scope="props"
                                    :src="props.checked ? icon.active : icon.inactive"
                                    >
                            </van-radio>
                        </span>
                    </li>
                </ul>
                
                <ul class="typeul top5">
                    <li>
                        <span class="typeleft"><i class="i-zgyh"></i></span>
                        <span  class="typeright">
                            <span class="typename">中国银行</span>
                            <van-radio name="zgyh" class="radiostyle">
                                <img
                                    slot="icon"
                                    slot-scope="props"
                                    :src="props.checked ? icon.active : icon.inactive"
                                    >
                            </van-radio>
                        </span>
                    </li>
                     <li>
                        <span class="typeleft"><i class="icon"></i></span>
                       
                        <span  class="typeright" @click="addcard">
                            <span class="typename">添加银行卡付款{{radio}}</span>
                            
                        </span>
                        
                    </li>
                </ul>
            </van-radio-group>
            </div>
        </div>
        <div class="btnboxflex">
            <span class="paybtn"  @click="showPopup">去支付</span>
        </div>
        <!-- <passwordinput :show="showKeyboard"></passwordinput> -->
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
    import headnav from "../../common/header" //第一步，导入组件
    // import passwordinput from "../../common/passwordinput" //第一步，导入组件
	export default {
		components: {
            headnav, //第二步，注册组件
            // passwordinput
        },
        data(){
            return{
                value: '',
                show: false,
                radio:"zhye",
                showKeyboard: false,
                icon: {
                    active: '../../../../static/img/radio2.png',
                    inactive: '../../../../static/img/radio1.png'
                }
            }
        },
       
        methods:{
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
            onDelete() {
                this.value = this.value.slice(0, this.value.length - 1);
            },
            addcard(){
                this.$router.push({name:'addcard',params:{paspage:false}});
            }
        }
	}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/public.less";
    .van-radio{
        display: inline-block;
        height: 1rem;
        float: right;
        margin-top: .9rem;
    }
    .radiostyle img{
        width: 1rem;
        height: 1rem;
    }
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
    .forgetpas{
        text-align: right;
        padding-right: 0.8rem;
        font-size: 0.6rem;
        color: #0070FF;
        line-height: 1.8rem;
        height: 1.8rem;
        margin-top: .5rem;
    }
    }
    .midprice{
        background-color: #fff;
        padding:2.5rem 0;
        font-size: .9rem;
        text-align: center;
        .priceunit{
            color: #333;
        }
        .totalprice{
            font-size: 1.7rem;
            font-weight: bold;
        }
        
    }
    ul{
        .bdrfff;
    }
    .typeul li{
        height: 2.6rem;
        line-height: 2.6rem;
        .flex;
        }
    .typeleft{
        display: inline-block;
        .flex-column;
        flex: .5;
        .i-balanceno{
        .icon;
            background-image:url("../../../../static/img/icon_pay_ye_gary@2x.png");
        }
        .i-balance{
            .icon;
            background-image:url("../../../../static/img/icon_pay_ye@2x.png");
        }
        .i-zfb{
            .icon;
            background-image:url("../../../../static/img/icon_pay_zfb@2x.png");
        }
        .i-wx{
            .icon;
            background-image:url("../../../../static/img/icon_pay_wx@2x.png");
        }
        .i-zgyh{
            .icon;
            background-image:url("../../../../static/img/icon_pay_zgyh@2x.png");
        }
    } 
    .typeright{
        display: inline-block;
        border-bottom: 1px solid #e4e4e4;
        .flex-column;
        flex: 5;
        
        .typename{
            font-size: .75rem;
            color: #333;
        }
        .typenameno{
            font-size: .75rem;
            color: #ccc;
        }
        .typeradio{
            vertical-align: bottom;
            float: right;
        }
        .i-right{
            margin-right: 5px;
        }
    }


</style>