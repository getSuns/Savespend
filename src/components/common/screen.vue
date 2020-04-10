<template>
<div>
	<div class="scree-con">
		<div class="scree-title">
			<div class="scree-tab" :class="screetype=='1'?'screetabactive':''" :id="1" @click="screeEvent"><span class="scree-text">{{screetype=="1"?screetext:"全部分类"}}</span><span class="i-arrow"></span></div>
			<div class="scree-tab" :class="screetype=='2'?'screetabactive':''" :id="2" @click="screeEvent"><span class="scree-text">{{screetype=="2"?screetext:"附近"}}</span><span class="i-arrow"></span></div>
			<div class="scree-tab" :class="screetype=='3'?'screetabactive':''" :id="3" @click="screeEvent"><span class="scree-text">{{screetype=="3"?screetext:"智能排序"}}</span><span class="i-arrow"></span></div>
		</div>
		<div class="screelevelbox" v-show="screeshowflag">
			<div class="level1" v-for="(item,index) in screedata" :key="index">
				<span :class="(item.id==activenum)?'levelactive':''"   @click="activescree(item)">{{item.name}}</span>
			</div>
		</div>
    </div>
    <van-overlay
    :show="screeshowflag"
    @click="screeshowflag = false"
    />
</div>
	
	
</template>

<script>
	export default{
		data(){
			return{
				screetabactive:"screetabactive",
				screeshowflag:false,
				screetext:"全部分类",
				activenum:1,
				screetype:1,
				currentclicknum:1,
				screedata:[
					{
						typeid:1,
						id:1,
						name:"全部分类"
					},
					{
						typeid:1,
						id:2,
						name:"烧烤海鲜"
					},
					{
						typeid:1,
						id:3,
						name:"汉堡披萨"
					},
					{
						typeid:1,
						id:4,
						name:"炸鸡炸串"
					},
					{
						typeid:1,
						id:5,
						name:"足浴养生"
					},
					{
						typeid:1,
						id:6,
						name:"休闲娱乐"
					},
					{
						typeid:1,
						id:7,
						name:"水果超市"
					},
				]
			};
				
		},
		methods:{
			activescree:function(e){
                console.log(e)
				this.activenum=e.id;
				this.screetext=e.name;
				this.screeshowflag=false;
				this.screetype=e.typeid;
			},
			screeEvent:function(e){
				this.currentclicknum=e.id;
				this.screeshowflag=!this.screeshowflag;
			}
		}
	}
</script>

<style scoped>
	.scree-title{
		padding: .2rem .8rem;
		display: -webkit-flex;
		display: flex;
		justify-content:space-between;
	}
	.scree-tab{
		display: inline-block;
		flex: 1;
		
	}
	.screetabactive .scree-text{
		color: #E62129!important;
	}

	.scree-tab .scree-text{
		line-height: 2rem;
		height: 2rem;
		vertical-align: middle;
		font-size: .75rem;
		color:#333;
	}
	.i-arrow{
		display: inline-block;
		height: 1.3rem;
		width: 1.2rem;
		vertical-align: middle;
		background-image: url("../../../static/img/icon_down@2x.png");
		background-size: 1.4rem;
		background-position: 0 1px;
	}
	.screetabactive .i-arrow{
		background-image: url("../../../static/img/icon_up@2x.png");
	}
	.scree-active{
		color:#E62129;
	}
	.scree-active .i-arrow{
		background-image: url("../../../static/img/icon_down@2x.png");
	}
	.scree-con{
		z-index: 5;
		background-color:#fff;
	}
	.screelevelbox{
		position: absolute;
		background:#fff;
		width: 100%;
        padding-bottom: .8rem;
	}
	.level1 span{
		display: block;
		line-height: 1.8rem;
		font-size: .7rem;
		color: #666;
        padding: 0 1.6rem;
        text-align: left;
	}
	.levelactive{
		font-weight: bold;
		color:#E62129!important;
	}
</style>
