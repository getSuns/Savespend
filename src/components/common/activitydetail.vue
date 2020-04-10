<template>
	<div>
		<div class="activitydetail" v-show="detailflag">
			<div class="paddingbox">
				<div class="title">
					<span class="name">双人蟹煲套餐</span>
					<span class="price">￥38</span>
					<span class="i-close" @click="clickclose" ></span>
				</div>
				<div class="mealinfo">
					<div class="mealnotice">
						<span class="mealtitle"><span class="i-spot"></span>套餐详情</span>
						<span class="mealtext">套餐详情</span>
						<span class="mealtext">套餐详情套餐详情套餐详情</span>
						<span class="mealtext">套餐详情套餐详情</span>
						<span class="mealtext">套餐详情</span>
					</div>
					<span class="totalprice">总价值：118元</span>
				</div>
				<div class="mealnotice">
					<span class="mealtitle"><span class="i-spot"></span>套餐须知</span>
					<span class="mealtext">活动时间：2019.08至2019.10(节假日通用)</span>
					<span class="mealtext">无需预约，消费高峰期可能需要等座</span>
					<span class="mealtext">提供免费Wi-Fi，套餐内包含一包餐巾纸，如需增加需到点另外点单</span>
					<span class="mealtext">如有其他问题，请致电商家咨询，以商家反馈为准</span>
				</div>
			</div>
		</div>
		<van-overlay :show="detailflag" @click="clickclose"/>
	</div>
	
</template>

<script>
	export default {
		props:{
			seedetail: Boolean
		},
		data(){
			return{
				 detailflag:false	
			};
		},
		watch:{
			seedetail:function(newValue,oldValue){
				this.detailflag=newValue;
			}
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.id); //打印出上个页面传递的参数。
			this.detailflag=this.seedetail;
		},
		onShow: function() {
		    console.log('App Show')
		},
		created:function(){
		},
		methods:{
			clickclose:function(e){
				 this.detailflag=false;
				 this.$emit("detailclick",this.detailflag)
			}
		},
	}
</script>

<style scoped>
	.activitydetail{
		padding: .6rem 0;
		background: #fff;
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		width: 100%;
		border-top-left-radius: 25px;
		border-top-right-radius: 25px;
		z-index: 9;
	}
	.paddingbox{
		padding: .6rem 1rem;
		z-index: 9;
	}
	.title{
		font-size: .9rem;
		font-weight: bold;
		display: block;
		color: #333;
	}
	.name{
		display: inline-block;
	}
	.price{
		color:#E62129;
		font-size: .9rem;
		margin-left: .5rem;
	}
	.i-close{
		display: inline-block;
		height: 1.2rem;
		width: 1.2rem;
		background: url("../../../static/img/icon_close@2x.png") no-repeat;
		background-size: 1.2rem;
		vertical-align: sub;
		float: right;
	}
		
	.mealinfo{
		border-bottom: 1px solid #E4E4E4;
	}
		
	.mealnotice span{
		display: block;
	}
	.mealtitle{
		font-size: .8rem;
		font-weight: bold;
		line-height: 2rem;
		color: #666;
	}
	.mealtext{
		color: #666;
		font-size: .7rem;
		line-height: 1.45rem;
	}
	.totalprice{
		font-size: .7rem;
		font-weight: bold;
		display: block;
		width: 100%;
		line-height: 2rem;
		text-align: right;
	}
</style>
