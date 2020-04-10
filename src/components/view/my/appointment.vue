<template>
	<div class="appointment tophead2">
		<headnav leftback="i-backw" :flexnum="1" boderbtm="headred" titletext="我的预约"></headnav>
        <van-tabs v-model="activeName" line-width="30" line-height="2">
            <van-tab title="待使用" name="a">
                <div  v-if="!nodata"  class="goodsbox flexbox" @click="topage('111')">
                    <div class="goodleft">
                        <img class="goodsimg" src="../../../../static/img/img@2x.png" />
                    </div>
                    <div class="goodsmid">
                        <span>柒酒现拌烤肉</span>
                        <p>预约时间：2019-10-14  11:00</p>
                        <p>预约人数：2人</p>
                    </div>
                </div>
                <nodata v-if="nodata"  tipstext="暂无预约" imgname='appointment' btn ></nodata>
            </van-tab>
            <van-tab title="已使用" name="b">
                 <div class="goodsbox flexbox" @click="topage('222')">
                    <div class="goodleft">
                        <img class="goodsimg" src="../../../../static/img/img@2x.png" />
                    </div>
                    <div class="goodsmid">
                        <span>柒酒现拌烤肉</span>
                        <p>预约时间：2019-10-14  11:00</p>
                        <p>预约人数：3人</p>
                    </div>
                </div>
            </van-tab>
            <van-tab title="已过期" name="c">
                 <div class="goodsbox flexbox">
                    <div class="goodleft">
                        <img class="goodsimg" src="../../../../static/img/img@2x.png" />
                    </div>
                    <div class="goodsmid">
                        <span>柒酒现拌烤肉</span>
                        <p>预约时间：2019-10-14  11:00</p>
                        <p>预约人数：4人</p>
                    </div>
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
 @fsize7:.7rem;
 @fsize6:.6rem;
	.appointment{
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
    }
</style>
