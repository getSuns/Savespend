<template>
	<div class="coinrecharge tophead2">
		<headnav leftback="i-back" :flexnum="1.5" titletext="花币充值" righttext="充值说明" pageurl="conpon"></headnav>
        <div class="top">
            <div class="userinfo">
                <img src="../../../../static/img/img@2x.png" />
                <div class="usertext">
                    <p class="username">馒头包子</p>
                    <p class="usercoin">花币余额：80.00</p>
                </div>
            </div>
        </div>
        <div class="middle">
            <ul class="rechargeul">
                <li class="active">
                    <p class="cointext"><dfn>1990</dfn>花币</p>
                    <p class="pricetext">￥199</p>
                </li>
                <li>
                    <p class="cointext"><dfn>1990</dfn>花币</p>
                    <p class="pricetext">￥199</p>
                </li>
                 <li>
                    <p class="cointext"><dfn>1990</dfn>花币</p>
                    <p class="pricetext">￥199</p>
                </li>
            </ul>
            <ul class="rechargeul">
                <li>
                    <p class="cointext"><dfn>1990</dfn>花币</p>
                    <p class="pricetext">￥199</p>
                </li>
                <li>
                    <p class="cointext"><dfn>1990</dfn>花币</p>
                    <p class="pricetext">￥199</p>
                </li>
                 <li>
                    <p class="cointext"><dfn>1990</dfn>花币</p>
                    <p class="pricetext">￥199</p>
                </li>
            </ul>
        </div>
        <div class="btm">
            <div class="btnbox">
                <button class="paybtn"><em class="payprice">199元</em> 确认支付</button>
            </div>
            <p class="agreenmentbox">支付即同意<em class="useragreement">《用户协议》</em></p>
        </div>
        <div class="kefutips">
            <i class="i-msg"></i>
            <span>联系客服</span>
        </div>
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
            activeName: 'a',
            nodata:true
            };
        },
        methods:{
            topage(id){
                this.$router.push({name:"appointmentinfo",params:{idname:id}})
            }
        }
	}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/public.less";
.coinrecharge{
    .userinfo{
            height: 4.8rem; 
            background-color: #fff;
            padding:1rem .8rem;
            margin-bottom: .5rem;
        img{
            width: 2.6rem;
            height: 2.6rem;
            border-radius: 100%;
            margin-right: .4rem;
        }
        .usertext{
            display: inline-block;
            vertical-align: super;
            
            .username{
                font-size: .9rem;
                color: #333333;
                line-height: .9rem;
                line-height: 1.5rem;
                height: 1.5rem;
            }
            .usercoin{
                font-size: .6rem;
                color: #666666;
                line-height: 1rem;
                height: 1rem;
            }
        }
       
    }
    .middle{
        padding:1rem .8rem;
        background: #fff;
        }
     .rechargeul{
            margin-bottom:.5rem;
            .flex;
            li{
                .flex-column;
                background: #FFFFFF;
                border: 1px solid #E4E4E4;
                border-radius: 1px;
                height: 3.5rem;
                padding: .6rem 0.85rem;    
                            
                .cointext{
                    font-size: .8rem;
                    color: #333;
                    text-align: center;
                    line-height: 1.3rem;
                }
                .pricetext{
                    font-size: .7rem;
                    color: #666666;
                    text-align: center;
                }
                
            }
            .active{
                border: 1px solid #E62129;
                    .cointext{
                        color: #E62129;
                    }
                    .pricetext{
                        color: #E62129;
                    }
                }
        }
    ul:last-child{
        margin-bottom: 0;
    }
    .agreenmentbox{
        font-size: .6rem;
        color: #999999;
        text-align: center;
        em{
            color: #E62129;
        }
    }
    .btm{
        margin-top: 3.2rem;
    }
}
</style>
