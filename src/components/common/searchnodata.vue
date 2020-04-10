<template>
	<div class="resultbox">
		<span class="i-search"></span>
		<div class="searchtext">
			<span>暂时没用找到相关店家</span>
			<span>换个关键词搜搜看吧！</span>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.resultbox{
		text-align: center;
		background-color: #fff;
		padding: 1rem 0;
		
	}

	.i-search{
		margin: 0 auto;
		display: block;
		width: 4.5rem;
		height: 4.5rem;
		background-repeat: no-repeat;
		background-size: 4.5rem;
		background-image: url("../../../static/img/icon_default_search@2x.png");
	}
	.searchtext span{
		display: block;
		font-family: "PingFangSC-Regular";
	}
	.searchtext span:first-child{
		color: #333;
		font-size: 0.7rem;
		line-height: 1.8rem;
		height: 1.4rem;
	}
	.searchtext span:last-child{
		color: #999;
		font-size: 0.6rem;
		line-height: 1.2rem;
	}
</style>
