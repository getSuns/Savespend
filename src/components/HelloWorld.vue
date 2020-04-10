<template>
<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
  :immediate-check="false"
>
  <van-cell
    v-for="item in list"
    :key="item"
    :title="item.shopId"
  
  />
</van-list>
</template>
<script>
	import bkh from "../assets/js/bkhfetch";
	import axios from "axios";
	import { List,PullRefresh } from 'vant'
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      pageIndex:0,
      pageSize:0,
      total:0,
    };
  },
 created:function(){
   this.getgoods();
 },
 mouted:function () {
    this.getgoods();
 },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        this.getgoods();
        console.log("加载中运行")

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= this.total) {
          this.finished = true;
        }
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
						this.list.push(res.data.data.data[i]);
						this.total=res.data.data.total;
					}
					console.log(this.list);
	　　　　  　 }).catch(error => {
					console.log("xxxx");
				});
		　　},
     }
}
</script>
