<template>
	<div class="nodata">
		<div class="imgbox">
			<span class="imgspan" :class="imgname"></span>
		</div>
		<p class="tipstext">{{tipstext}}</p>
		<button v-if="btn" class="bgredbtn" @click="gopage">{{btntext?btntext:'随便逛逛'}}</button>
	</div>
</template>

<script>
export default {
    props:{
		tipstext:String,
		imgname:String,
		btntext:String,
		pathname:String,
		btn:Boolean
    },
    data(){
        return{
			gopathname:this.pathname?this.pathname:""
        }
    },
   methods:{
	   gopage(){
		   this.$router.push('/'+this.gopathname);
	   }
   }
}
</script>

<style lang="less" scoped>
 @import "../../assets/css/public.less";

	.nodata{
		display: block;
		text-align: center;
		padding: 3rem 0;
		background-color: #f5f5f5;
		.tipstext{
			font-size: 0.7rem;
			color: #999;
			margin-top: .5rem;
		}
		.imgbox{
			text-align: center;
		}
		.imgspan{
			display: inline-block;
			
		}
		.i-img(@width:4rem,@height:4rem){
			width: @width;
			height: @height;
			background-size: @width;
		}
		.coin{
			.i-img();
			background-image: url("../../../static/img/icon_default_jilu@2x.png");
		}
		.conpon{
			.i-img();
			background-image: url("../../../static/img/icon_default_quan@2x.png");
		}
		.appointment{
			.i-img();
			background-image: url("../../../static/img/icon_default_yuyue@2x.png");	
		}
		.evaluate{
			.i-img();
			background-image: url("../../../static/img/icon_default_dingdan@2x.png");	
		}
		button{
			margin-top: 2.8rem;
		}
	}
	
</style>
