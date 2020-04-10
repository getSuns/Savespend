<template>
	<div class="appointmentinfo tophead7">
		<headnav leftback="i-back" titletext="我的收藏" :flexnum="1" righticon="i-kufu" pageurl="searching"></headnav>
        <van-swipe-cell>
            <div class="middlebox">
            <div  class="goodsbox flexbox">
                <div class="goodleft">
                    <img class="goodsimg" src="../../../../static/img/img@2x.png" />
                </div>
                <div class="goodsmid">
                    <span>柒酒现拌烤肉</span>
                    <div class="scorebox">
                        <div class="starbox"><i class="i-star i-star-colour"></i><i class="i-star i-star-colour"></i><i class="i-star i-star-colour"></i><i class="i-star i-star-colour"></i><i class="i-star i-star-colour"></i></div>
                        <em>4.0 分</em>
                    </div>
                    <p class="textp">金科时代中心三楼313号门面…</p>
                </div>
                <div class="goodsright">
                    <p class="textspan"></p>
                    <p class="textp">5863单/月</p>
                    <p class="textp">573m</p>
                </div>
            </div>
            </div>
            <template slot="right">
                <div class="collectionbox"><span><i class="i-del"></i><p>取消收藏</p></span></div>
            </template>
        </van-swipe-cell>
       
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
           
        }
    }
	
</script>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";

.appointmentinfo{
    .middlebox{
        background-color: #fff;
    }
    .goodsbox{
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
    }
    .textp{
        font-size: .6rem;
        color: #999;
        line-height: 1rem;
        height: 1rem;
    }
    .textspan{
       height: 1.35rem;
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
    .collectionbox{
        display: inline-block;
        width: 5rem;
        height: 100%;
        text-align: center;
        background: #FFF7F8;
        .i-del{
            .icon;
            background-image: url("../../../../static/img/icon_delete_red@2x.png")
        }
        p{
            font-size: .6rem;
            color: #999999;
            text-align: center;
            line-height: 1.2rem;

        }
        span{
            display: inline-block;
            position: relative; 
            top:50%;
            transform:translateY(-50%);
        }
    }

}
</style>
