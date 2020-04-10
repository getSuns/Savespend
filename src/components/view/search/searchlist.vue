<template>
	<div class="searchlist">
		<div class="positionfixed">
		<div class="searchbox head">
			
				<div class="imgbox" @click="goback"><span class="i-back"></span></div>
				<div class="searcinput" @click="gonextpage"><span class="i-search"></span><input type="text" placeholder="" class="inputtext" confirm-type="search" disabled="disabled"></div>
			
		</div>
		</div>
		<searchnodata class=""></searchnodata>
		<div class="guesslike">
			<p class="listtitle">猜你喜欢</p>
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
		</div>
	</div>
</template>

<script>
	import searchnodata from "../../common/searchnodata.vue" //第一步，导入组件
	import goodslist from "../../common/goodslist.vue" //第一步，导入组件
	import fetch from "../../../assets/js/fetch";
	import bkh from "../../../assets/js/bkhfetch";
	import axios from "axios";
	export default {
		components: {
			goodslist, //第二步，注册组件
			searchnodata
		},
		data(){
			return{
				goodslist:[],
				loading: false,
				finished: false,
				isLoading: false,   //是否处于下拉刷新状态
				pageIndex:0,
				pageSize:5,
				total:0
			}
		},
		created:function () {
			this.getgoods();
		},
		methods:{
			goback(){
				this.$router.go(-1);//返回上一页
			},
			gonextpage(){
            	this.$router.push('/searching');
			},
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
			getgoods(){
				//接口参数
				var params={
					pageIndex:this.pageIndex,
					pageSize:this.pageSize
				};
				axios.post(bkh.goods,params).then((res)=>{
					for (let i = 0; i < res.data.data.data.length; i++) {
						this.goodslist.push(res.data.data.data[i]);
						this.total=res.data.data.total;
					}
					console.log(this.goodslist)
	　　　　  　 }).catch(error => {
					console.log("xxxx");
				});
		　　},
		}
	}
</script>


<style lang="less" scoped>

@import "../../../assets/css/public.less";
.searchlist{
	background: #f5f5f5;
}
.searchbox{
	padding: 0.5rem 0.8rem;
	background-color: #fff;
	margin-bottom: 0.5rem;
	box-shadow: 0px 2px 5px #ccc;
	display: -webkit-flex; /* Safari */
	display: flex;
	// position: fixed;
    // width: 100%;
	// left: 0;
	// top:0;
}
.imgbox{
	flex: 1;
	height: 1.8rem;
}
	
.searcinput{
	flex:6 ;
	flex-basis:auto;
	height: 1.8rem;
	background-color:#f5f5f5;
	border-radius: 25px;
	width: 100%;
}

.i-search{
	width: 13%;
	height: 1.8rem;
	display: inline-block;
	background: url("../../../../static/img/icon_search@2x.png") no-repeat 10px 4px;
	background-size: 1.3rem;
}
.inputtext{
	display: inline-block;	
	height: 1.8rem;
	width: 87%;
	vertical-align: top;
	line-height: 1.8rem;
	background: none;
}
.i-back{
	display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background: url("../../../../static/img/icon_left@2x.png") no-repeat 0 2px;
    background-size: 1.5rem;
    vertical-align: middle;
}
.guesslike .listtitle{
	text-align: left;
	color:#333;
	font-size: 0.8rem;
	height: 1.8rem;
	line-height: 1.8rem;
	font-weight: bold;
	padding: 0 0.5rem;
	
}
.guesslike{
	padding-top: .5rem;
}
</style>
