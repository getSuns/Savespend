<template>
	<div class="usercenter">
        <div class="topred" :style="{height: topredheight}">
            <p class="iconbox"><i class="i-msg" @click="topage('msgnotice')"></i><i class="i-setup" @click="topage('setup')"></i></p>
            <div class="pricecard" :style="{height:priceheight}">
                <div class="centenbox">
                    <div class="imgbox">
                        <img class="userimg" src="../../../../static/img/img@2x.png" />
                        <p>羊咩咩</p>
                    </div>
                    <p v-if="!login" class="cointext">更多优惠就上掰开花～</p>
                    <template v-if="login">
                        <p class="vipstate"><img src="../../../../static/img/viptext-g.png" /></p>
                        <ul class="flex walletbox">
                            <li>
                                <router-link to="/moneycoins">
                                    <dfn>0</dfn>
                                    <em>花币(元)</em>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/balance">
                                    <dfn>0</dfn>
                                    <em>余额(元)</em>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/myconpon">
                                    <dfn>0</dfn>
                                    <em>优惠券</em>
                                </router-link>
                            </li>
                        </ul>
                    </template>
                </div>
            </div>
        </div>
        <div class="btmlist" :style="{paddingTop:paddingtop}">
            <div class="vipbox" @click="topage('coinrecharge')">
               <img src="../../../../static/img/vip.png" />
            </div>
            <ul class="userlist">
                <li @click="topage('collection')">
                    <span><i class="i-collent"></i><em>我的收藏</em></span>
                    <span><i class="i-right"></i></span>
                </li>
               <li @click="topage('myappointment')">
                    <span><i class="i-yuyue"></i><em>我的预约</em></span>
                    <span><i class="i-right"></i></span>
                </li>
                <li @click="topage('consumptionlist')">
                    <span><i class="i-jilu"></i><em>消费记录</em></span>
                    <span><i class="i-right"></i></span>
                </li>
               <li @click="topage('myevaluate')">
                    <span><i class="i-ping"></i><em>评价中心</em></span>
                    <span><i class="i-right"></i></span>
                </li>
                <li @click="topage('collection')">
                    <span><i class="i-kefu"></i><em>联系客服</em></span>
                    <span><i class="i-right"></i></span>
                </li>
            </ul>
            <p style="height:2.5rem;"></p>
        </div>
        <foot></foot>
	</div>
</template>

<script>
    import foot from "../../common/footer"

	export default {
		components: {
            foot
        },
        data(){
            return{
                login:true,
                priceheight:"8.75rem",
                topredheight:"7.5rem",
                paddingtop:"6.25rem",
            }
        },
        mounted:function(){
            if (!this.login) {
                this.priceheight="5.75rem";
                this.paddingtop="3.4rem";
            }
        },
        methods:{
            topage(pagename){
                this.$router.push("/"+pagename);
            }
        }
	}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/public.less";
 @fsize7:.7rem;
 @fsize6:.6rem;
	.usercenter{
        .cointext{
                font-size:@fsize6;
                color: #999999;
                text-align: center;
                margin-top: .2rem;
            }
        background-color: #fff;
        a{
                display: block;
        }
        .topred{
            padding-top: 1.28rem;
        }
        .pricecard{
            top:4.2rem;
            padding: 1rem 1.6rem;
            box-shadow: 0 2px 6px -2px rgba(0,0,0,0.10);
        }
        .iconbox{
            text-align: right;
            i{
                margin-right: .8rem;
            }
        }
        .centenbox{
            .imgbox{
                margin-top: -2.5rem;
                margin-bottom: .4rem;
                p{
                    font-size: .9rem;
                    color: #333333;
                    text-align: center;
                }
            }
            .userimg{
                width: 3.2rem;
                height: 3.2rem;
                border-radius: 100px;
                margin-bottom: .3rem;
            }
            .vipstate{
                img{
                    height: 1rem;
                }
            }
        }
        .walletbox{
            margin-top: .5rem;
            dfn{
                font-size: .9rem;
                color: #E62129;
                text-align: center;
                line-height: .9rem;
                margin-bottom: .3rem;
                display: inline-block;
                font-weight: bold;
            }
            em{
                display: block;
                font-size: .7rem;
                color: #999999;
                text-align: center;
                line-height: .7rem;
            }
        }
        .btmlist{
            .vipbox{
                img{
                    height: 2.6rem;
                    width: 100%;
                }
            }
        }
        .userlist{
            padding: .8rem;
            li{
                display: flex;
                justify-content:space-between;
                height: 2.6rem;
                line-height: 2.6rem;
                span{
                    flex-direction:column;
                }
                em{
                    font-size: .8rem;
                    color: #333333;
                    line-height: .8rem;
                    padding-left: .45rem;
                }
            }
        }
        .i-msg{
            .icon;
            background-image: url("../../../../static/img/icon_my_info@2x.png");
        }
        .i-setup{
            .icon;
            background-image: url("../../../../static/img/icon_my_shezhi@2x.png");
        }
        .i-vip{
            .icon;
            background-image: url("../../../../static/img/icon_vip@2x.png");
        }
        .i-vipb{
            .icon;
            background-image: url("../../../../static/img/icon_vip_black@2x.png");
        }
        .i-vipg{
            .icon;
            background-image: url("../../../../static/img/icon_vip_gray@2x.png");
        }
        .i-collent{
            .icon;
            background-image: url("../../../../static/img/icon_my_cang@2x.png");
        }
        .i-yuyue{
            .icon;
            background-image: url("../../../../static/img/icon_my_yuyue@2x.png");
        }
        .i-jilu{
            .icon;
            background-image: url("../../../../static/img/icon_my_jilu@2x.png");
        }
        .i-kefu{
            .icon;
            background-image: url("../../../../static/img/icon_my_kefu@2x.png");
        }
        .i-ping{
            .icon;
            background-image: url("../../../../static/img/icon_my_ping@2x.png");
        }
    }
</style>
