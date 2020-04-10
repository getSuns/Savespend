<template>
    <div class="conponlist tophead7">
        <headnav leftback="i-back" :flexnum="1" titletext="优惠券"></headnav>
        <div class="availablelist">
            <van-radio-group v-model="radio" @change="radiochange">
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
                            <van-radio name="1" class="radiostyle">
                                <img
                                    slot="icon"
                                    slot-scope="props"
                                    :src="props.checked ? icon.active : icon.inactive"
                                    >
                            </van-radio>
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
                            <van-radio name="2" class="radiostyle">
                                <img
                                    slot="icon"
                                    slot-scope="props"
                                    :src="props.checked ? icon.active : icon.inactive"
                                    >
                            </van-radio>
                        </div>
                    </div>
                    <div class="conponbtm">
                        <i class="i-roundleft"></i>
                        <p>寻蟹记（万家丽店）专享红包</p>
                        <i class="i-roundright"></i>
                    </div>
                </li>
            </ul>
            </van-radio-group>
        </div>
         <div class="disblelist">
             <p class="listname">- 不可用优惠券 -</p>
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
	export default {
		components: {
			headnav 
        },
         data(){
            return{
                radio:"",
                icon: {
                    active: '../../../../static/img/radio2.png',
                    inactive: '../../../../static/img/radio1.png'
                }
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
    .i-round{
            width: 15px;
            height: 15px;
            display: inline-block;
            border-radius: 100px;
            position: absolute;
            background: #f5f5f5;
            top:-8px;
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
        .i-roundleft{
            .i-round;
            left: -8px;
        }
        .i-roundright{
            .i-round;
            right: -8px;
        }
    }

}
.disblelist{
    .listname{
        font-size: .7rem;
        color: #CCCCCC;
        text-align: center;
        margin: 1rem;
    }
    .price,dfn,.fullreduction,p{
        color: #ccc!important;
    }
    
}
</style>