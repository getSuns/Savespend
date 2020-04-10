<template>
    <div class="conponlist tophead7">
            <div class="availablelist" v-if="!overdueflag">
                <headnav leftback="i-back" :flexnum="1"  titletext="优惠券"></headnav>
                 <div v-if="!nodata">
                    <ul class="conponul">
                        <li>
                            <div class="conpontop">
                                <div class="left">
                                    <dfn>￥</dfn><span class="price">20</span>
                                </div>
                                <div class="middle">
                                    <p class="fullreduction">满任意金额可用</p>
                                    <p class="datetime">有效期至 2019.12.12</p>
                                </div>
                                <div class="right">
                                </div>
                            </div>
                            <div class="conponbtm">
                                <i class="i-roundleft"></i>
                                <p>寻蟹记（万家丽店）专享红包</p>
                                <i class="i-roundright"></i>
                            </div>
                        </li>
                        <li>
                            <div class="conpontop">
                                <div class="left">
                                    <dfn>￥</dfn><span class="price">20</span>
                                </div>
                                <div class="middle">
                                    <p class="fullreduction">满任意金额可用</p>
                                    <p class="datetime">有效期至 2019.12.12</p>
                                </div>
                                <div class="right">
                                </div>
                            </div>
                            <div class="conponbtm">
                                <i class="i-roundleft"></i>
                                <p>寻蟹记（万家丽店）专享红包</p>
                                <i class="i-roundright"></i>
                            </div>
                        </li>
                    </ul>
                    <p class="nomoretip">没有更多优惠券啦~</p>
                    <p class="seeoverdue" @click="overdueflag=true">查看过期券</p>                    
                 </div>
                 <nodata v-else tipstext="暂无优惠券" imgname='conpon' btn></nodata>
            </div>
            <div class="disblelist" v-if="overdueflag">
                <div class="headbox">
                    <div class="navbar">
                        <span class="navleft">
                            <i class="i-back" @click="overdueflag=false"></i>
                        </span>
                        <span class="navcenter"><span class="title">过期优惠券</span></span>
                        <span class="navleft">
                        </span>
                    </div>
                </div>
                <ul class="conponul">
                    <li>
                        <div class="conpontop">
                            <div class="left">
                                <dfn>￥</dfn><span class="price">20</span>
                            </div>
                            <div class="middle">
                                <p class="fullreduction">满任意金额可用</p>
                                <p class="datetime">有效期至 2019.12.12</p>
                            </div>
                            <div class="right">
                            </div>
                        </div>
                        <div class="conponbtm">
                            <i class="i-roundleft"></i>
                            <p>寻蟹记（万家丽店）专享红包</p>
                            <i class="i-roundright"></i>
                        </div>
                    </li>
                    <li>
                        <div class="conpontop">
                            <div class="left">
                                <dfn>￥</dfn><span class="price">20</span>
                            </div>
                            <div class="middle">
                                <p class="fullreduction">满任意金额可用</p>
                                <p class="datetime">有效期至 2019.12.12</p>
                            </div>
                            <div class="right">
                            </div>
                        </div>
                        <div class="conponbtm">
                            <i class="i-roundleft"></i>
                            <p>寻蟹记（万家丽店）专享红包</p>
                            <i class="i-roundright"></i>
                        </div>
                    </li>
                </ul>
            </div>
       
    </div>
</template>
<script>
    import headnav from "../../common/header"
    import nodata from "../../common/nodata" 

	export default {
		components: {
            headnav,
            nodata
        },
         data(){
            return{
                overdueflag:false,
                nodata:false
                }
        },
        mounted:function(){
            var orderinfo = JSON.parse(localStorage.getItem('orderinfo'));
        },
        methods:{
            radiochange(){
                console.log(this.radio);
                this.$router.push('/payorder');
            }
        }
	}
</script>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";

.conponlist{
    padding-left: .8rem;
    padding-right: .8rem;
    li{
        background: #fff;
        margin-bottom: .5rem;
    }
    .conpontop{
			border-radius: 4px;
			padding: 1rem .6rem;
			.flex;
            align-items:center;
        .left{
			flex:1;
			color: #E62129;
			width: 4rem;
    		overflow: hidden;
			dfn{
				font-size: .6rem;
			}
			span{
				font-size: 1.3rem;
				font-weight: bold;
			}
		}
		.middle{
			flex:3;
			margin: 0 .6rem;
			.fullreduction{
				font-size: .8rem;
				color: #333;
				line-height: 1.5rem;
			}
			.datetime{
				font-size: .6rem;
				color: #999;
				line-height: 1.3rem;
			}
		}
		.right{
			text-align: right!important;
            .radiostyle img{
                width: 1rem;
                height: 1rem;
            }
		}
		
    }
    .conponbtm{
        background: #FCFCFC;
        border-radius: 0 0 4px 4px;
        height:1.9rem;
        line-height: 1.9rem;
        border-top: 1px #fcfcfc dashed;
        padding: 0 .6rem;
        position: relative;
        -moz-box-shadow:0px 10px 4px #ccc;
        -webkit-box-shadow:0px 10px 4px #ccc;
        box-shadow:0px 1px 3px #ccc;
        p{
            font-size: .6rem;
            color: #666;
        }
    }
    .seeoverdue{
        font-size: .7rem;
        color: #0070FF;
        text-align: center;
        position: fixed;
        bottom: 16px;
        left: 0;
        right: 0;
    }

}
.disblelist{
    .price,dfn,.fullreduction,p{
        color: #ccc!important;
    }
    
}
.nomoretip{
    font-size: .6rem;
    color: #999999;
    text-align: center;
    line-height: 1.5rem;
}
</style>