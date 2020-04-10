<template>
	<div class="appointmentinfo tophead7">
		<headnav leftback="i-back" titletext="预约详情" :flexnum="1" righticon="i-kufu" pageurl="searching"></headnav>
        <div class="middlebox">
            <div  class="goodsbox flexbox" @click="topage">
                <div class="goodleft">
                    <img class="goodsimg" src="../../../../static/img/img@2x.png" />
                </div>
                <div class="goodsmid">
                    <span>柒酒现拌烤肉</span>
                    <div class="scorebox">
                        <div class="starbox"><i class="i-star i-star-colour"></i><i class="i-star i-star-colour"></i><i class="i-star i-star-colour"></i><i class="i-star i-star-colour"></i><i class="i-star i-star-colour"></i></div>
                        <em>4.0 分</em>
                        <i class="i-right"></i>
                    </div>
                    <p>金科时代中心三楼313号门面…</p>
                </div>
                <div class="goodsright">

                </div>
            </div>
            <div class="appoiontinfo">
                <p class="titlep">预约信息</p>
                <ul>
                    <li><em>日期：</em>2019-10-14 周日</li>
                    <li><em>时间：</em>11：00</li>
                    <li><em>人数：</em>3</li>
                    <li><em>位置：</em>包间</li>
                    <li><em>姓名：</em>孙小姐</li>
                    <li><em>电话：</em>188*****88</li>
                </ul>
            </div>
            <div class="mapbox">
                <p class="titlep">位置导航</p>
                <div class="map">地图</div>
            </div>
        </div>
        <div class="divbtm"></div>
        <div class="btnboxflex">
            <button class="canclebtn" @click="cancleclick">取消预订</button>
        </div>
	</div>
</template>

<script>
	import headnav from "../../common/header"
    import { Dialog } from 'vant';
	
	export default {
		components: {
			headnav
		},
		data() {
			return {

  		    }
        },
        methods:{
            cancleclick:function(){
                Dialog.confirm({
                message: '确认要取消预约吗？',
                className:"dialog",
                }).then(() => {
                    this.$router.push({name:'mycancleappoint',params:{idname:this.$route.params.idname}})
                }).catch(() => {
                // on cancel
                });
            },
            topage(){
                this.$router.push({name:'shopdetail',params:{idname:this.$route.params.idname}})
            }
        }
    }
	
</script>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";

.appointmentinfo{
    padding-bottom: 4rem;
    background: #f5f5f5;
    .middlebox{
        margin: 0 .8rem;
    }
    .goodsbox{
          .box;
          padding: 1rem .6rem;
        }
        .goodleft{
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
                display: inline-block;
                font-weight: bold;
            }
            p{
                font-size: .6rem;
                color: #666666;
                line-height: 1rem;
                height: 1rem;
            }
        }

    .scorebox{
        height: 1.3rem;
        line-height: 1.3rem;
        em{
            font-size: 0.6rem;
            color: #999;
            line-height: 0.7rem;
            vertical-align: middle;
            height: .7rem;
            display: inline-block;
        }
        .i-right{
            float: right;
            margin-top: .4rem;
        }
    }
    .box{
        padding: 0 .6rem 1rem;
        background-color: #fff;
        margin-bottom: .5rem;
        
    }
    .titlep{
        font-size: .8rem;
        color: #333333;
        padding: .5rem 0;
    }
    .appoiontinfo{
        .box;
        p{
            box-shadow: inset 0 0 0 0 #E4E4E4;
            border-bottom: 1px solid #e4e4e4;
        }
        ul{
            padding-top: .5rem;
        }
        li{
            font-size: .75rem;
            color: #333333;
            line-height: 1.45rem;
        }
    }
    .mapbox{
       
      .box;
        .map{
            width: 100%;
            height: 8rem;
            border: 1px solid #ddd;
            text-align: center;
            line-height: 8rem;
        }
    }


}
</style>
<style>
    /* .dialog .van-dialog__message{
            padding: 2rem 0 !important;
    } */
</style>