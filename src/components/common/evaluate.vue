<template>
	<div class="evaluatebox">
		<div class="tagbox">
				<div :class="{curtag:i==n}" v-for="(item, i) in evaluatelist" :key="i" @click="Change(item,i)">
					<span class="tagtext">{{item.name}}</span><span class="tagnum">{{item.num}}</span>
				</div>
		</div>
		<div class="evaluatecon">
			<div class="evaluatecard">
				<div class="user-left">
					<img class="userimg" src="../../../static/img/img@2x.png" />
				</div>
				<div class="evaluate-right">
					<div class="eveluate-title">
						<div class="evaluate-name"><span>关山酒</span><span class="i-vip"></span></div>
						<span class="evaluate-time">6分钟前</span>
					</div>
					<div class="starbox"><span class="i-star i-star-colour"></span><span class="i-star i-star-colour"></span><span class="i-star i-star-colour"></span><span class="i-star i-star-colour"></span><span class="i-star i-star-colour"></span></div>
					<span class="evaluatetext">夫事件的发生飞机阿森纳方式附近的十分了解恩温热微软</span>
					<div class="evaluateimg">
							<img src="../../../static/img/img@2x.png" />
							<img src="../../../static/img/img@2x.png" />
							<img class="img2" src="../../../static/img/img@2x.png" />
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
export default {
        data(){
            return{
				evaluatename:"",
                evaluatelist:[{name:"全部",num:'55'},{name:"好评",num:'9'},{name:"差评",num:'6'},{name:"图片",num:'1'},{name:"中评",num:'2'}],
                n:0,
            }
        },
        methods:{
            Change:function (item,i) {
				this.n=i;         //控制选项与数据同步
				this.evaluatename=item.name;
				console.log(this.evaluatename)
            },
        }
	}
</script>

<style lang="less" scoped>
	/* 20 */
	.topno .tagbox{
		padding-top: 0;
	}
	.evaluatebox{
		padding:0 .6rem;
		background-color: #fff;
		height: 100%;
		text-align: left;
		clear: both;
	}
	.tagbox{
		padding: .6rem 0;
		border-bottom:1px solid #E4E4E4;
		div{
			display: inline-block;
			margin:.3rem .5rem .3rem 0;
			border-radius: 4px;
			background-color: #F5F5F5;
			color: #666;
			font-size: .6rem;
			line-height: 1.5rem;
			height: 1.5rem;
			padding: 0 .6rem;
		}
	}
	.curtag{
		color: #E62129!important;
		background-color: #ffe9ea!important;
	}
	.tagnum{
		margin-left: .2rem;
	}
	.evaluatecon{
		padding-top: 1rem;
	}
	.evaluatecon .evaluatecard{
		display: flex;
	}
	.evaluate-righ:last-child{
		border: none;
	}
	.user-left{
		display: inline-block;
		margin-right: .5rem;
		flex: 1;
	}
	.userimg{
		border:1px solid #999;
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 100px;
		display: inline-block;
		background-color: #EDEDED;
	}
		
	.evaluate-right{
		display: inline-block;
		border-bottom: #E4E4E4 1px solid;
		vertical-align:top;
		flex: 9;
	}
	.evaluate-right:last-child{
		border: none;
	}
	.evaluateimg{
		display: block;
		padding: .5rem 0;
		}
	.evaluateimg img{
		width: 4.5rem;
		height: 4.5rem;
		border-radius: 5px;
		margin-right: .6rem;
	}
	.img2{
		margin-right: 0 !important;
	}
	.evaluate-time{
		font-size: .6rem;
		color: #666;
		float:right;
	}
	.evaluatetext,.evaluate-name{
		font-size: .7rem;
		color: #333;
		display: inline-block;
	}
	.starbox{
		display: inline-block;
		height: .7rem;
		line-height: .7rem;
	}
	.i-star,.i-vip{
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
	.i-vip{
		width: 1.8rem;
		height: 1rem;
		background-size: 1.8rem;
		background-image: url("../../../static/img/vip@2x.png");
		vertical-align: middle;
		margin-left: .3rem;
	}
</style>
