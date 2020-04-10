<template>
	<div class="barnavpage tophead2 shoplist" >
		<headnav titletext="商家列表" :flexnum="1" righticon="i-search" pageurl="searching"></headnav>
		<van-dropdown-menu  active-color="#E62129">
			<van-dropdown-item v-model="value1" :options="option1" @change="changeFoodtype" />
			<van-dropdown-item v-model="value2" :options="option2" />
			<van-dropdown-item v-model="value3" :options="option3" />
		</van-dropdown-menu>
		<!-- <screen></screen> -->
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
				<van-list
					v-model="loading"
					:finished="finished"
					finished-text="没有更多了"
					@load="onLoad"
					:offset="50"
					:immediate-check="false"
					>
					<goodslist :data="goodslist"></goodslist>
				</van-list>
			</van-pull-refresh>
		<foot></foot>
	</div>
</template>

<script>
	import goodslist from "../../common/goodslist.vue" //第一步，导入组件
    // import screen from "../../common/screen.vue"
    import foot from "../../common/footer"
	import headnav from "../../common/header"
	import bkh from "../../../assets/js/bkhfetch";
	import axios from "axios";
	import { List,PullRefresh } from 'vant'
	
	export default {
		components: {
			goodslist, //第二步，注册组件
			foot,
			headnav
		},
		data() {
			return {
				loading: false,
				finished: false,
				isLoading: false,   //是否处于下拉刷新状态
				value1: this.$store.state.foodtype,
				value2: 'a',
				value3: 1,
				option1: [
					{ text: '全部分类', value: 0 },
					{ text: '烧烤海鲜', value: 1 },
					{ text: '汉堡披萨', value: 2 }
				],
				option2: [
					{ text: '附近', value: 'a' },
					{ text: '好评排序', value: 'b' },
					{ text: '销量排序', value: 'c' },
				],
				option3: [
					{ text: '智能排序', value: 1 },
					{ text: '好评排序3', value: 2 },
					{ text: '销量排序3', value: 3 },
				],
				goodslist:[],
				pageIndex:0,
				pageSize:5,
				total:0
			}
		  },
		created:function () {
			this.getgoods();
		},
		mounted:function(){
		},
		methods:{
			 onLoad() {  //上拉加载
                setTimeout(() => {
					// 加载状态结束
					this.loading = false;
					// 异步更新数据
					this.pageIndex++;
					this.getgoods()
					// 数据全部加载完成
					if (this.goodslist.length >= this.total) {
						this.finished = true;
					}
                },500);
			 },
			onRefresh() {    
				//下拉刷新
				setTimeout(() => {
					this.isLoading = false;
					//初始化
					this.pageIndex=0;
					this.goodslist=[];
					this.getgoods()
				}, 500);
            },
			getgoods(){
				//接口参数
				var params={
					value1:this.value1,
					value2:this.value2,
					value3:this.value3,
					pageIndex:this.pageIndex,
					pageSize:this.pageSize
				};
				axios.post(bkh.goods,params).then((res)=>{
					for (let i = 0; i < res.data.data.data.length; i++) {
						this.goodslist.push(res.data.data.data[i]);
						this.total=res.data.data.total;
					}
					console.log(888)
	　　　　  　 }).catch(error => {
					console.log("xxxx");
				});
		　　},
			changeFoodtype(value){
				this.pageIndex=0;
				this.goodslist=[];
				//更改store中的foodtype
				this.$store.commit('changeFoodtype',value);
				this.getgoods();
			},
		}
	}
	
</script>
<style>
.van-list__finished-text{
	background: #f5f5f5;
}
</style>>

