<template>
	<div class="evaluatelist tophead2">
		<headnav leftback="i-backw" :flexnum="1" boderbtm="headred" titletext="评价"></headnav>
        <van-tabs v-model="activeName" line-width="30" line-height="2">
            <van-tab title="全部订单" name="a">
                
                <div  v-if="!nodata"  class="goodsbox flexbox">
                    <div class="goodleft">
                        <img class="goodsimg" src="../../../../static/img/img@2x.png" />
                    </div>
                    <div class="goodsmid">
                        <span>柒酒现拌烤肉</span>
                        <p>买单时间：2019-10-14  11:00</p>
                        <p>消费总额：¥88.00</p>
                    </div>
                </div>
                <nodata v-if="nodata"  tipstext="暂无订单" imgname='evaluate' btn ></nodata>
            </van-tab>
            <van-tab title="待评价" name="b">
                <div class="goodstop">
                    <div class="goodsbox flexbox">
                        <div class="goodleft">
                            <img class="goodsimg" src="../../../../static/img/img@2x.png" />
                        </div>
                        <div class="goodsmid">
                            <span>柒酒现拌烤肉</span>
                            <p>买单时间：2019-10-14  11:00</p>
                            <p>消费总额：¥88.00</p>
                        </div>
                    </div>
                </div>
                <div class="goodsbtm">
                    <router-link to="/publishevaluate">
                        <button class="whitebtn">去评价</button>
                    </router-link>
                </div>
            </van-tab>
        </van-tabs>
        
	</div>
</template>

<script>
    import headnav from "../../common/header" //第一步，导入组件
    import nodata from "../../common/nodata" 
	export default {
		components: {
            headnav,//第二步，注册组件
            nodata
        },
        data() {
            return {
            activeName: 'a',
            nodata:true
            };
        }
	}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/public.less";
 @fsize7:.7rem;
 @fsize6:.6rem;
	.evaluatelist{
        .goodsbox{
            padding: 1rem 0;
            background-color: #fff;
            margin-top: .5rem;
        }
        .goodleft{
            margin-left: .8rem;
            .flexleft(.5);
        }
        .goodsimg{
            width: 100%;
            border-radius: 4px;
            width: 3.2rem;
            height: 3.2rem;
        }
        .goodsmid{
            margin-left: .8rem;
            .flexmiddle(3);
            span{
                font-size: .8rem;
                color: #333333;
                height: 1.4rem;
                display: inline-block;
            }
            p{
                font-size: .6rem;
                color: #666666;
                line-height: 1rem;
                height: 1rem;
            }
        }
        .goodsbtm{
            background: #fff;
            text-align: right;
            padding-right: .8rem;
            padding-bottom: .8rem;
        }
    }
</style>
