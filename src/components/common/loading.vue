<template>
	<div class="loadbox">
		<img src="../../../static/img/icon_load@2x.png" />
		<span>加载中...</span>
	</div>
</template>

<script>
</script>

<style scoped>
	.loadbox{
		display: block;
		text-align: center;
        padding: 1rem 0;
        vertical-align: middle;
	}
	.loadbox image{
		width: 1.6rem;
		height: 1.6rem;
		vertical-align: middle;
		background-image: url("../../../static/img/icon_load@2x.png");
		background-size: 1.6rem;
	}
	.loadbox span{
		font-size: 0.6rem;
		color: #999;
		margin-left: 0.2rem;
		vertical-align: inherit;
	}
</style>
