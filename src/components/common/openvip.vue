<template>
	<div class="openvip">
        <img  src="../../../static/img/open@2x.png" />
        <div class="middle">
            <p class="viptext ">超级VIP</p>
            <p class="opentext">开通享专属折扣</p>
            <button class="openbtn">开通会员</button>
            <span class="paytext">直接买单</span>
        </div>
	</div>
</template>

<script>
	
	export default {
		props:{

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
 @import "../../assets/css/public.less";
.openvip{
    .middle{
        padding: .8rem;
        background: #fff;
        text-align: center;
        .viptext{
            font-size: 1rem;
            color: #333333;
        }
        .opentext{
            font-size: .8rem;
            color: #999999;
            margin-top: .6rem;
        }
        .openbtn{
            background-image: linear-gradient(135deg, #FB6066 0%, #E62129 100%);
            border-radius: 8px;
            font-size: .9rem;
            color: #FFFFFF;
            display:block;
            width: 100%;
            height: 2.4rem;
            line-height: 2.4rem;
            margin-top: 2rem;
        }
        .paytext{
            font-size: .8rem;
            color: #666666;
            display: block;
            padding-top: .8rem;
        }
    }
    img{
        width: 100%;
        vertical-align: bottom;
    }

}

</style>
