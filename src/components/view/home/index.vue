<template>
	<div class="home barnavpage">
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
		<div class="hometop">
			<div class="searchbox">
				<div class="mapbox" @click="gocity"><i class="i-map"></i><span class="city">{{$store.state.cityname}}</span></div>
                    <div class="searchview"> 
						 <router-link to="/searching" >
						 	<div><i class="i-search"></i><span class="inputspan">成都老火锅</span></div>
                        </router-link>
                    </div>
				<div class="msgbox"><span class="positionbox"><router-link to="/msgnotice"><i class="i-msg"></i></router-link><i class="i-redspot"></i></span></div>
			</div>
		</div>
		
			<div class="bannerbox">
				 <van-swipe :autoplay="10000" indicator-color="white" style="height='6.3rem'">
                    <van-swipe-item><img src="../../../../static/img/banner@2x.png" /></van-swipe-item>
                    <van-swipe-item><img src="../../../../static/img/banner@2x.png" /></van-swipe-item>
                    <van-swipe-item><img src="../../../../static/img/banner@2x.png" /></van-swipe-item>
                </van-swipe>
			</div>
			<div class="navbox">
				<div class="navlist">
					<div class="classify" @click="changeshopparams(1)">
						<img src="../../../../static/img/icon_nav_can@2x.png" />
						<span>烧烤海鲜</span>
					</div>
					<div class="classify" @click="changeshopparams(2)">
						<img src="../../../../static/img/icon_nav_jianshen@2x.png" />
						<span>汉堡披萨</span>
					</div>
					<div class="classify">
						<img src="../../../../static/img/icon_nav_zuyu@2x.png" />
						<span>餐饮美食</span>
					</div>
					<div class="classify">
						<img src="../../../../static/img/icon_nav_shuiguo@2x.png" />
						<span>餐饮美食</span>
					</div>
				</div>
				<div class="navlist">
					<div class="classify">
						<img src="../../../../static/img/icon_nav_meifa@2x.png" />
						<span>餐饮美食</span>
					</div>
					<div class="classify">
						<img src="../../../../static/img/icon_nav_qipai@2x.png" />
						<span>餐饮美食</span>
					</div>
					<div class="classify">
						<img src="../../../../static/img/icon_nav_ktv@2x.png" />
						<span>餐饮美食</span>
					</div>
					<div class="classify"  @click="topage('alltype')">
						<img src="../../../../static/img/icon_nav_all@2x.png" />
						<span>全部分类</span>
					</div>
				</div>
			</div>
        <div class="recommend">
            <p class="listtitle">专属推荐</p>
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
		
        <foot></foot>
		</van-pull-refresh>
	</div>
</template>

<script>
    import goodslist from "../../common/goodslist"
	import foot from "../../common/footer"
	import fetch from "../../../assets/js/fetch";
	import bkh from "../../../assets/js/bkhfetch";
	import axios from "axios";

	export default {
		components: {
            goodslist,//第二步，注册组件
            foot
		},
		data(){
			return{
				//cityname:'长沙',
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
		mounted:function(){
			this.getuser();
			this.cityname=this.$route.params.cityname?this.$route.params.cityname:this.cityname;
		},
		methods:{
			gocity(){
				this.$router.push({name: 'city', params: {cityname: this.cityname}});
				this.$router.push('/city');
			},
			topage(page){
				this.$router.push('/'+page);
			},
		  	getuser(){
				const params = {}; // 参数
                fetch.post(bkh.user, params);
			},
			changeshopparams(foodtype){
				this.$store.commit('changeFoodtype',foodtype);
				this.$router.push('/shoplist');
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
					pageIndex:this.pageIndex,
					pageSize:this.pageSize
				};
				axios.post(bkh.goods,params).then((res)=>{
					for (let i = 0; i < res.data.data.data.length; i++) {
						this.goodslist.push(res.data.data.data[i]);
						this.total=res.data.data.total;
					}
	　　　　  　 }).catch(error => {
					console.log("xxxx");
				});
		　　},
        }

	}
</script>
<style>
.van-swipe__indicator{
    width: 16px;
    height: 2px;
    border-radius:0;
}
</style>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";

    .atag{
        display: inline-block;
    }
	.searchbox{
		width: 100%;
		position: fixed;
		z-index: 1;
        top:0;
        display: -webkit-flex; /* Safari */
        display: flex;
        justify-content:space-between;
	}
	.searchbox,.bannerbox,.navbox{
		background-color: #fff;
	}
	.city{
		font-size: .7rem;
		color: #000;
		vertical-align: super;
    }
    .mapbox{
        display: inline-block;
		flex: 1.5;
		text-align: center;
	}
	.searchview{
		display: inline-block;
		position: relative;
		background:#EDEDED;
		border-radius: 25px;
		flex: 5;
		text-align: center;
		div{
			text-align: center!important;
		}
    }
    .msgbox{
        display: inline-block;
		flex: 1;
		text-align: center;
    }
    .positionbox{
        position: relative;
    }
    .mapbox,.searchview,.msgbox{
        margin: .5rem 0;
        margin-bottom: 1rem;
    }
	.searchspan{
		display: inline-block;
		width: 100%;
		text-align: center;
		font-size: .7rem;
		color: #ccc;
        line-height: 1.8rem;
        height: 1.8rem;
        span{
            line-height: 2.1rem;
            height: 1.8rem;
            display: inline-block;
        }
	}
	.i-search{
		background: url("../../../../static/img/icon_search@2x.png") no-repeat;
		width: 13%!important;
		display: inline-block;
		background-size: 1.3rem;
    	background-position: 0 .2rem;
		}
	.i-msg{
		background: url("../../../../static/img/icon_info@2x.png") no-repeat;
        background-size: 1.2rem;
        background-position: 0 0.4rem;
        height: 1.5rem;
	}
	.inputspan{
		display: inline-block;
		height: 1.8rem;
		vertical-align: bottom;
		line-height: 1.8rem;
		background: none;
		font-size: 0.7rem;
		color: #ccc;
	}
	.listtitle{
        font-size: 0.8rem;
        font-weight: bold;
        color: #333;
        line-height: 2rem;
        height: 2rem;
        text-align: left;

	}
	.bannerbox{
		padding:0 .8rem ;
        height: 6.3rem;
        margin-top: 3.3rem;
	}
	.bannerbox swiper-item{
		width: 100%;
		height: 6.3rem;
	}
		
	.bannerbox img{
		width: 100%;
		height: 6.3rem;
		border-radius:8px;
	}
	.recommend{
		padding-top: .3rem;
		background: #f5f5f5;
	}
	.recommend .listtitle{
		padding-left: .8rem;
	}
	.i-map,.i-search,.i-msg{
		display: inline-block;
		height: 1.5rem;
		width: 1.2rem;
		
	}
	
	.i-map{
		background: url("../../../../static/img/icon_pos@2x.png") no-repeat;
        background-size: 1.2rem;
        background-position: 0 0.35rem;
        height: 1.5rem;
	}
	.navbox{
		padding-top: 1rem;
		
	}
	.navlist{
		display: -webkit-flex; /* Safari */
		display: flex;
		background-color: #fff;
	}
	.classify{
		flex: 1;
		display: inline-block;
		text-align: center;
		padding:0 1rem;
		margin-bottom: .5rem;
	}
	.classify img{
		width: 2.5rem;
		height: 2.5rem;
		display: block;
		margin: 0 auto;
	}
	.classify span{
		font-size: .6rem;
		color: #666;
		line-height: 1rem;
	}
	.i-redspot{
		display: inline-block;
		width: 6px;
		height: 6px;
		background: red;
		border-radius: 50%;
		position: absolute;
        right: 0;
        bottom: 1.2rem;
    }
    
</style>
