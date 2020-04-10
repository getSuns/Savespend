<template>
	<div class="tophead2">
		<headnav leftback="i-back" :flexnum="1" :boderbtm="false"  titletext="胖哥俩（万家丽）"></headnav>
		<evaluate class="tophead"></evaluate>
	</div>
	
</template>

<script>
	import headnav from "../../common/header" //第一步，导入组件
	import evaluate from "../../common/evaluate.vue"
	export default {
		components: {
			evaluate, //第二步，注册组件
			headnav
		}
	}
</script>

<style lang="less">
@import "../../../assets/css/public.less";

</style>
