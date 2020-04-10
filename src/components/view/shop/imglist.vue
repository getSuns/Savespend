<template>
	<div class="imglist tophead2">
		<headnav leftback="i-back" :flexnum="1"  titletext="胖哥俩（万家丽)"></headnav>
		<div class="listbtm" >
			<div class="imgitem">
				<img src="../../../../static/img/img@2x.png"/>
				<p>水果甜点</p>
			</div>
			<div class="imgitem">
				<img src="../../../../static/img/img@2x.png"/>
				<p>水果甜点</p>
			</div>
			<div class="imgitem">
				<img src="../../../../static/img/img@2x.png"/>
				<p>水果甜点</p>
			</div>
			<div class="imgitem">
				<img src="../../../../static/img/img@2x.png"/>
				<p>水果甜点 </p>
			</div>
			<div class="imgitem">
				<img src="../../../../static/img/img@2x.png"/>
				<p>水果甜点</p>
			</div>
			<div class="imgitem">
				<img src="../../../../static/img/img@2x.png"/>
				<p>水果甜点</p>
			</div>
			<div class="imgitem">
				<img src="../../../../static/img/img@2x.png"/>
				<p>水果甜点</p>
			</div>
			<div class="imgitem">
				<img src="../../../../static/img/img@2x.png"/>
				<p>水果甜点 </p>
			</div>
			<div class="imgitem">
				<img src="../../../../static/img/img@2x.png"/>
				<p>水果甜点</p>
			</div>
			<div class="imgitem">
				<img src="../../../../static/img/img@2x.png"/>
				<p>水果甜点</p>
			</div>
			<div class="imgitem">
				<img src="../../../../static/img/img@2x.png"/>
				<p>水果甜点</p>
			</div>
			<div class="imgitem">
				<img src="../../../../static/img/img@2x.png"/>
				<p>水果甜点 </p>
			</div>
		</div>
	</div>

</template>

<script>
	import headnav from "../../common/header" //第一步，导入组件
	export default {
		components: {
			headnav //第二步，注册组件
		}
	}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/public.less";
	.imglist{
		background-color: #fff;
	}
	.listbtm{
		background-color: #fff;
		.flex;
		flex-wrap:wrap;
		padding: 0 .8rem;
	}
	.imgitem {
		// padding: 0 .5rem;
		// display: inline-block;
		// margin-top: 0.5rem;
		.flex-column;
		padding-top: .8rem;
	}
	.imgitem img {
		width: 8rem;
		height: 5.9rem;
		border-radius: 8px;
		display: block;
		
	}

	.imgitem p {
		text-align: left;
		padding-left: 0.5rem;	
		display: inline-block;
		font-size: .7rem;
		color: #333;
		width: 100%;
		line-height: 1.5rem;
    	height: 1.2rem;
	}
</style>
