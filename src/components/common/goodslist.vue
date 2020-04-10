<template>
	<div class="goodsbox">
		<div class="goodslist" @click="topage('2')" v-for="(item) in data" :key="item.id">
			<div class="goods-left">
			<van-image
			:src="item.shopImg"
			radius="8px"
			width="3.2rem"
			height="3.2rem"
			/>
		</div>
			<div class="goods-right">
				<div class="goods-right-top">
					<p class="goodstitlebox"><span class="goods-title van-ellipsis">{{item.shopName}}<i v-if="item.isCollect" class="i-tag i-collected"></i></span><i class="i-texttag" :class="item.tagId==1?'i-green':'i-blue'"></i></p>
					<p>
						<span class="starbox">
							<!-- 一共5颗星星 首先循环分数 取整数为点亮的星星 有小数的就用一个半星 剩下的用灰色星星 -->
							<span class="i-star i-star-colour"></span>
							<span class="i-star i-star-colour"></span>
							<span class="i-star i-star-half"></span>
							<span class="i-star i-star-gray"></span>
							<span class="i-star i-star-gray"></span>
							<span>{{item.shopScore}}分</span>
						</span>
						<span class="goods-count">{{item.salesCount}}单/月</span> 
					</p>
					<p><span>{{item.addressText}}</span><span class="goods-distance">{{item.shopDistance}}m</span></p>
				</div>
				<div class="goods-right-btm" v-if="item.discountActivitie.length">
					<p v-for="(item2,index) in item.discountActivitie" :key="index">
						<i class="i-tag" :class="item2.tagId==1?'i-red':'i-yellow'" v-if="item2.tagId"></i>
						<span class="mealtext">{{item2.activitieMsg}}</span>
					</p>
					<!-- <p>
						<i class="i-tag i-yellow"></i>
						<span class="mealtext">双人套餐999起</span>
					</p> -->
				</div>
			</div>
		</div>        
	</div>
</template>

<script>
export default {
	props:{
		data:Array
	},
	mounted:function () {
		
	},
	methods:{
		topage(idname){
			this.$router.push({name:'shopdetail',params:{idname:idname}}); //忘记支付密码进入支付密码设置专页（同解绑页）
		},
	}
}
</script>

<style scoped>
	.goodsbox{
		background: #f5f5f5;
	}
	.goodslist{
	  display: -webkit-flex; /* Safari */
	  display: flex;
	  background-color: #fff;
	  justify-content: space-between;
      padding: 1rem 0.8rem;
      margin-bottom: 0.5rem;
	}
	.goods-left{
		flex: 1;
		float: left;
	}
	.goods-title{
		color: #333333;
		font-size: 0.75rem;
		font-weight: bold;
	}
	.goodstitlebox{
		line-height: 1.1rem;
	}
	.goods-right{
		flex: 5;
		padding-left: .8rem;
	}
	.goods-right p{
		line-height: 1.15rem;
		vertical-align: middle;	
		
	}
	.goods-right-top p{
		display: -webkit-flex; /* Safari */
		display: flex;
		justify-content: space-between;
		color: #999;
		font-size: 0.6rem;
	}
		
	.goods-right-btm{
		border-top:1px solid #e4e4e4;
		    padding-top: .3rem;
		    margin-top: .3rem;
	}
	.goods-right-btm p{
		    line-height: 1.5rem;
            height: 1.3rem;
            text-align: left;
	}
	.goods-right-btm .mealtext{
		font-size: 0.6rem;
		color: #666;
		font-weight: normal;
	}
	.starbox{
		display: inline-block;
		vertical-align: text-top;
	}
	.i-star{
		display: inline-block;
		width: 0.7rem;
		height: .7rem;
		background-size: .7rem;
		background-repeat: no-repeat;
		vertical-align: inherit;
		margin-right: .3rem;
	}
	.i-star-colour{
		background-image: url("../../../static/img/icon_xing_colour.png");
	}
	.i-star-gray{
		background-image: url("../../../static/img/icon_xing_gray.png");
	}
	.i-star-half{
		background-image: url("../../../static/img/icon_xing_half.png");
    }
    .i-tag{
        display: inline-block;
		width: 0.7rem;
		height: .7rem;
		background-size: .7rem;
        background-repeat: no-repeat;
        vertical-align: inherit;
    }
    .i-red{
		background-image: url("../../../static/img/text_hui@2x.png");

    }
    .i-yellow{
		background-image: url("../../../static/img/text_quan@2x.png");

    }
	.i-collected{
		background-image: url("../../../static/img/collected@2x.png");
		width: 2rem;
		background-size: 2rem;
		margin-left: 6px;
		height: .8rem;
	}
    .i-texttag{
        display: inline-block;
        width: 2.5rem;
        height: 1rem;
        background-size: 2.5rem;
        background-repeat: no-repeat;
        vertical-align: inherit;
    }
    .i-green{
		background-image: url("../../../static/img/icon_newshop@2x.png");

    }
    .i-blue{
		background-image: url("../../../static/img/icon_backmore@2x.png");

    }
</style>
