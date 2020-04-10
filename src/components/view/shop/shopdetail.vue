<template>
	<div class="shopdetail">
		<div class="shop-info">
			<img class="shop-img" src="../../../../static/img/banner@2x.png" />
			<div class="layer"></div>
			<!--  v-show="!showAbs" -->
			<div class="title-nav" :class="tiitlenav" :style="opacityStyle">
					<i class="i-back" @click="goback"></i>
				<div class="share-box"><span class="i-collection" :class="collectionflag?'i-collection-pre':'i-collection'" @click="collectionEvent"></span><span class="i-share" @click="shareflag=true"></span></div>
			</div>
			<div class="info-box">
				<div class="shop-text">
					<div  class="shop-name"><span>寻蟹记</span><span>万家丽</span></div>
					<div class="time-box">
						<span class="shop-address"><span class="shop-time">11：00-22：00</span>芙蓉区荷花路万家丽国际购物广场负一楼东北角地铁2号线</span>
					</div>
				</div>
				<div class="map-box">
					<a :href="'tel:' + '2423423423'"><span class="i-phone"></span></a>
					<span class="i-map"></span>
				</div>
			</div>
		</div>
		<div class="shop-meal">
			<p class="listtitle">特惠活动</p>
			<div class="meal-flex">
				<div class="list-box" @click="seemealdetail">
					<div><span>双人蟹煲套餐</span><span class="meal-price">￥38</span></div>
					<span class="meal-name">肉蟹煲，牛蛙煲，鸡翅士大夫撒旦的</span>
				</div>
				<div class="list-box">
					<div><span>双人蟹煲套餐</span><span class="meal-price">￥38</span></div>
					<span class="meal-name">肉蟹煲，牛蛙煲，鸡翅士大夫撒旦的</span>
				</div>
			</div>
			<div class="conponbox">
				<p @click="popupshow=true">
					<span class="conponleft"><span>店铺满减券</span>|<span>消费立得券</span></span>
					<span class="conponright"><span>领券<i class="i-rightblue"></i></span></span>
				</p>
			</div>
		</div>
		<div class="bookingbox" @click="gopage('booking')" ><span><i class="i-seat"></i>订座</span></div>
		<div class="shop-sign">
			<router-link to="/imglist" class="atag">
				<div class="title-box">
					<span class="listtitle">商家招牌菜</span>
					<span class="title-right">查看全部<span class="i-right"></span></span>
				</div>	
			</router-link>
			<div class="scroll-meal">
				<div class="meal-img">
					<img src="../../../../static/img/img@2x.png" />
					<div class="meal-textbg"><span>千层蛋糕</span></div>
				</div>
				<div class="meal-img">
					<img src="../../../../static/img/img@2x.png" />
					<div class="meal-textbg"><span>千层蛋糕</span></div>
				</div>
				<div class="meal-img">
					<img src="../../../../static/img/img@2x.png" />	
					<div class="meal-textbg"><span>千层蛋糕</span></div>
				</div>
				<div class="meal-img">
					<img src="../../../../static/img/img@2x.png" />
					<div class="meal-textbg"><span>千层蛋糕</span></div>
				</div>
			</div>
			
			
		</div>
		<div class="shop-evaluate">
			<router-link to="/evaluateindex" class="atag">
				<div class="title-box">
					<span class="listtitle">评价</span>
					<span class="title-right">查看全部<span class="i-right"></span></span>
				</div>
			</router-link>
			<evaluate class="topno"></evaluate>
		</div>  
		<div class="btnbox">
			<button class="paybillbtn" @click="gopage('payorder')" >询价买单</button>
		</div>
		<activitydetail :seedetail="detailflag" @detailclick="detailclick"></activitydetail>
		<van-popup v-model="popupshow" closeable position="bottom">
			<div class="conponpopup">
				<p class="conpontitle">店铺专属优惠</p>
				<div class="orderconpon">
					<p class="title">买单送</p>
					<ul>
						<li class="conponcard">
							<div class="left">
								<dfn>￥</dfn><span class="price">20</span>
							</div>
							<div class="middle">
								<p class="fullreduction">满任意金额可用</p>
								<p class="datetime">有效期至 2019.12.12</p>
							</div>
							<div class="right">
							</div>
						</li>
					</ul>
				</div>
				<div class="getcoupon">
					<p class="title">领券</p>
					<ul>
						<li class="conponcard">
							<div class="left">
								<dfn>￥</dfn><span class="price">20</span>
							</div>
							<div class="middle">
								<p class="fullreduction">满任意金额可用</p>
								<p class="datetime">有效期至 2019.12.12</p>
							</div>
							<div class="right">
								<button class="couponbtn" @click="getconpon">立即领取</button>
							</div>
						</li>
						<li class="conponcard">
							<div class="left">
								<dfn>￥</dfn><span class="price">1990</span>
							</div>
							<div class="middle">
								<p class="fullreduction">满任意金额可用</p>
								<p class="datetime">有效期至 2019.12.12</p>
							</div>
							<div class="right">
								<button class="couponbtn couponed">已领取</button>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</van-popup>
		<van-popup v-model="shareflag"  class="sharepopup">
			<share></share>
		</van-popup>
	</div>
</template>

<script>
	import share from "../../common/share.vue"
	import evaluate from "../../common/evaluate.vue"
	import activitydetail from "../../common/activitydetail.vue"
	import { Toast } from 'vant';
	
	export default {
		components: {
			evaluate, //第二步，注册组件
			activitydetail,
			share
		},
		data(){
			return{
				shareflag:false,
				top:0,
				tiitlenav:"navwhite",
				collectionflag:false,
				detailflag:false,
				showAbs:true,
				opacityStyle: {
				    background: "rgba(255, 255, 255, 0)"
				},
				popupshow:false
			};
		},
		// onNavigationBarButtonTap: function(e) {
		// 	   if (e.index == 0) {  
		// 		   //收藏   
		// 		   this.collectionflag?this.collectionflag=false:this.collectionflag=true;
		// 	   } else if (e.index == 1) {  
		// 		   //分享
		// 	   }
		// },
		methods:{
			seemealdetail:function(){
				this.detailflag=true;
			},
			detailclick:function(data){
				this.detailflag=data;
			},
			collectionEvent:function(){
				this.collectionflag?this.collectionflag=false:this.collectionflag=true;
			},
			handleScroll() {
				  const top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				  console.log(top);
				  this.top=top;
				  if (top> 40) {
					let opacity = top / 140;
					opacity = opacity > 1 ? 1 : opacity;
					this.opacityStyle.background = "rgba(255, 255, 255, " + opacity + ")";
					this.tiitlenav="navgray";
				  }else if(top>10){
					this.opacityStyle.background = "rgba(255, 255, 255, 0)";
					this.tiitlenav="navwhite";
				  }
			},
			goback(){
            	this.$router.go(-1);//返回上一页
			},
			gopage(pagename){
				if(pagename=="booking"){
					this.$router.push({name:'booking',params:{title:'万家丽'}});
				}else{
					this.$router.push('/'+pagename);
				}
				
			},
			getconpon(){

			}		
		},
		mounted (){
			if(this.$route.params.booking){
				Toast('预定成功,等待商家确认');
			}
			window.addEventListener('scroll',this.handleScroll)
		},
		// 离开该页面需要移除这个监听的事件
		destroyed(){
			window.removeEventListener('scroll',this.handleScroll)	
		}
	}
</script>
<style lang="less">
 .van-popup__close-icon--top-right{
	top:19px!important;
}
.sharepopup{
	border-radius: 8px!important;
	bottom: .8rem!important;
	right: .8rem!important;
	left: .8rem!important;
	top:auto;
	transform:none;
}


</style>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";
	
	//优惠券相关
	.conponbox{
		background-color: #F4F9FF;
		margin: .8rem .4rem 0 .4rem;
		p{
			font-size: .65rem;
			padding: .6rem 0;
			color: #4998FF;
			
		}
		.conponleft{
			font-size: .65rem;
			span{
				padding: .6rem;
			}
		}
		.conponright{
			float: right;
			span{
				padding: .6rem;
			}
			.i-rightblue{
				display: inline-block;
				height:.8rem;
				width: .8rem;
				vertical-align: middle;
				background-repeat: no-repeat;
				background-size: .6rem;
				background-image: url("../../../../static/img/icon_right_blue@2x.png");
    			background-position: 0.2rem 0.01rem;
			}
		}
	}
	//领券
	.conponpopup{
		
		padding: 16px;
		.conpontitle{
			font-size: .9rem;
			color: #333333;
			text-align: center;
			margin-bottom: 1.8rem;
		}
		.title{
			font-size: .6px;
			color: #999999;
			margin-bottom: .5rem;
		}
		.conponcard{
			background: #FFFDF2;
			border-radius: 4px;
			padding: 1rem .6rem;
			margin-bottom: .5rem;
			.flex;
			align-items:center;
		}
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
			flex:2;
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
			flex:1;
			text-align: right;
			.couponbtn{
				border: 1px solid #E62129;
				border-radius: 8px;
				font-size: .65rem;
				color: #E62129;
				text-align: center;
				background: none;
				width: 4.05rem;
				height:1.7rem;
			}
			.couponed{
				opacity: 0.2;
			}
		}

	}
	//订座
	.bookingbox{
		text-align: center;
		line-height: 2.6rem;
    	height: 2.6rem;
		background-color: #fff;
		margin-bottom: .5rem;
		span{
			font-size: .8rem;
			color: #FD7E00;
		}
		.i-seat{
			display: inline-block;
			height:1.2rem;
			width: 1.2rem;
			vertical-align: middle;
			background-repeat: no-repeat;
			background-size: 1.2rem;
			background-image: url("../../../../static/img/icon_seat@2x.png");
			background-position: 0 -.1rem
		}
	}
	.shopdetail{
		text-align: left;
		margin-bottom: 4.1rem;
	}
	.btnbox{
		position:fixed;
		bottom: 0;
		width: 100%;
		padding: .8rem;
		left: 0;
	}
	.paybillbtn{
		color: #fff;
		font-size:.8rem;
		text-align: center;
		background: -moz-linear-gradient(135deg, #FD7E00 0%, #E62129 100%);
		background: -webkit-gradient(linear, left right, left right, color-stop(0%,#FD7E00), color-stop(100%,#E62129));
		background: -webkit-linear-gradient(135deg, #FD7E00 0%, #E62129 100%);
		background: -o-linear-gradient(135deg, #FD7E00 0%, #E62129 100%);
		background: -ms-linear-gradient(135deg, #FD7E00 0%, #E62129 100%);
		background: linear-gradient(135deg, #FD7E00 0%, #E62129 100%);
		width: 100%;
		border-radius: 8px;
		line-height: 2.5rem;
    	height: 2.5rem;
	}
	.shop-info{
		height: 10rem;
		width: 100%;
		position: relative;
	}
	.layer{
		position: absolute;
		width: 100%;
		height: 10rem;
		top:0;
		left: 0;
		background-color:#000000;
		opacity: .4;
	}
	.shop-img{
		width: 100%;
		height: 10rem;
	}
	.title-nav{
		background-color:rgba(255,255,255,0);
		position: fixed;
		top:0;
		display: block;
		padding: .5rem 0;
		width: 100%;
		display: -webkit-flex;
		display: flex;
		justify-content: space-around;
	}
	.share-box{
		display: inline-block;
		flex: 1;
		text-align: right;
		padding-right:.8rem;
		
	}
	.info-box{
		position: absolute;
		padding:0 .8rem;
		bottom: 0;
		display: -webkit-flex;
		display: flex;
		justify-content: space-around;
		margin-bottom: .3rem;
	}
	.info-box .shop-name{
		display: inline-block;
		font-size: .8rem;
		font-weight: bold;
		color: #fff;
		line-height: 1.8rem;
	}
	.shop-text{
		flex: 3;
	}
	.shop-address{
		line-height: 1rem;
	}
	.time-box span{
		font-size: .6rem;
		color: #fff;
		display: inline-block;
		word-wrap: break-word;
		word-break: normal;
	}
	.shop-time{
		padding-right: .3rem;
	}
	.map-box{
		display: inline-block;
		flex: 1.5;
		text-align: right;
		padding-top: 2rem;
		padding-right: .5rem;
	}
	.i-back,.i-collection,.i-share,.i-phone,.i-map{
		display: inline-block;
		height: 1.5rem;
		width: 1.5rem;
		vertical-align: middle;
	}
	.navwhite .i-back{
		flex: 1;
		background: url("../../../../static/img/icon_left_white@2x.png") no-repeat;
		background-size: 1.5rem;
		margin-left: .8rem;
	}
	.navwhite .i-collection{
		background: url("../../../../static/img/icon_cang_nor@2x.png") no-repeat;
		background-size: 1.5rem;
		margin-right: .5rem;
	}
	.navwhite .i-share{
		background: url("../../../../static/img/icon_share@2x.png") no-repeat;
		background-size: 1.5rem;
	}
	.navgray .i-back{
		flex: 1;
		background: url("../../../../static/img/icon_left@2x.png") no-repeat;
		background-size: 1.5rem;
		margin-left: .8rem;
	}
	.navgray .i-collection{
		background: url("../../../../static/img/icon_cang_gray@2x.png") no-repeat;
		background-size: 1.5rem;
		margin-right: .5rem;
	}
	.navgray .i-share{
		background: url("../../../../static/img/icon_share_gray@2x.png") no-repeat;
		background-size: 1.5rem;
	}
	.i-collection-pre{
		background: url("../../../../static/img/icon_cang_pre@2x.png") no-repeat !important;
		background-size: 1.5rem !important;
		margin-right: .5rem !important;
	}
	.i-phone{
		background: url("../../../../static/img/icon_phone_white@2x.png") no-repeat;
		background-size: 1.5rem;
	}
	.i-map{
		background: url("../../../../static/img/icon_map_white@2x.png") no-repeat;
		background-size: 1.5rem;
		
	}
	.listtitle{
		color: #333;
		font-size: 0.8rem;
		// height: 2rem;
		// line-height: 2rem;
		height: 2.2rem;
    	line-height: 2.5rem;
		font-weight: bold;
		display: inline-block;
		text-align: left;
	}
	.meal-flex{
		display: -webkit-flex;
		display: flex;
		justify-content: space-between;
	}	
	.shop-meal{
		padding: 0 .3rem .8rem .3rem;
		background-color: #fff;
		margin-bottom: .5rem;
	}
	.shop-meal .listtitle{
		margin-left: .4rem;
	}
	.list-box{
		border-radius: 5px;
		border:1px solid #EDEDED;
		padding:.3rem .5rem;
		display: inline-block;
		margin: 0 .4rem;
		flex-shrink:1;
		font-size: .7rem;
		color: #333;
		line-height: 1.5rem;
	}
	.meal-name{
	    display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		line-height: 1rem;
		height: 1rem;
		font-size: .6rem;
		color: #999;
		overflow:hidden;
		text-overflow: ellipsis;
		white-space:nowrop;
		clear: both;
	}
	.meal-price{
		font-weight: bold;
		font-size: .6rem;
		color:#E62129;
		float: right;
	}

	.title-right{
		float: right;
		font-size: .6rem;
		color: #999;
		line-height:2.25rem;
	}
	.i-right{
		display: inline-block;
		height: .6rem;
		width: .6rem;
		background: url("../../../../static/img/icon_right@2x.png") no-repeat;
		background-size: .6rem;
		
	}
	.shop-sign{
		background: #fff;
		padding: 0 .8rem .8rem .8rem;
		margin-bottom: .5rem;
	}
	.scroll-meal{
		white-space:nowrap;
		overflow-x: scroll;
		overflow-y: hidden;
		width: 100%;
	}
	.meal-img{
		width: 6rem;
		height: 4.5rem;
		border-radius: 5px;
		position: relative;
		display: inline-block;
		margin-right: .5rem;
	}
	.meal-img img{
		width: 100%;
		height: 4.5rem;
	}
	.meal-textbg{
		background-color: rgba(0,0,0,0.4);
		position: absolute;
		bottom: 0;
		left:0;
		width: 100%;
	}
	.meal-img span{
		display: inline-block;
		color: #fff;
		font-size: .6rem;
		padding-left: .5rem;
		height: 1.2rem;
		line-height: 1.2rem;
		opacity: 1;
	}
	.shop-evaluate .title-box{
		padding: 0 .8rem;
	}
	.shop-evaluate{
		background-color:#fff;
	}
</style>
