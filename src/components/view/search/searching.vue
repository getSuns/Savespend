<template>
	<div class="searchingbox">
		<div class="searchbox">
			<div class="searcinput"><i class="i-search"></i>
            <input type="text" placeholder="成都老火锅" placeholder-class="placeholderstyle" class="inputtext" confirm-type="search" autofocus="autofocus" v-model="searchvalue" >
            <i v-show="searchvalue" class="i-close" @click="clearsearch"></i></div>
			<div class="search-right">
				<span @click="goback">取消</span>
			</div>
		</div>
		<div class="searchword">
			<div class="searchtagbox" v-if="clearhistory">
				<div class="searchtitle"><span>搜索历史</span><i class="i-delete" @click="clearhistoryEvent"></i></div>
                <div class="searchtag">
                    <router-link to="./searchlist" ><div class="searchtag"><span class="tag-text">五谷鱼粉</span></div></router-link>
                </div>
				
			</div>
			<div class="hottagbox">
				<div class="searchtitle"><span>热门搜索</span></div>
				<div class="searchtag">
                    <router-link to="./searchlist" ><span class="hotcolor tag-text "><i class="i-hot"></i><span class="hot-tag">成都老火锅</span></span></router-link>
				    <router-link to="./searchlist" ><span class="tag-text"><span>成都老火锅</span></span></router-link>
					<router-link to="./searchlist" ><span class="tag-text"><span>成都老火锅成都老火锅成都老火锅</span></span></router-link>
				</div>
			</div>
		</div>
		<div class="searchtip" v-if="searchvalue">
			<div class="tipword"><router-link to="./searchlist" ><span class="searchtext"> 搜索：</span><span>{{searchvalue}}</span></router-link></div>
			<div class="tipword"><router-link :to="{name:'shopdetail', params: {idname:'2'}}" ><i class="i-go"></i><span>成都老火锅</span><span class="addresstip">王家丽国际购物广场 4.5分</span></router-link></div>
			<div class="tipword"><router-link :to="{name:'shopdetail', params: {idname:'2'}}" ><i class="i-go"></i><span>成都老火锅</span></router-link></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				searchvalue:"",
                clearhistory:true
                
			};
		},
		methods:{
			clearsearch(){
				this.searchvalue="";
			},
			clearhistoryEvent(){
				this.clearhistory=false;
			},
			goback(){
            	this.$router.go(-1);//
			}
		}
	}
</script>

<style>
	navigator{
		display: inline-block!important;
	}
</style>
<style lang="less" scoped>
	.placeholderstyle{
		color:#ccc;
		font-size:.7rem;
	}
	
	.searchbox{
		padding: 0.5rem 0.8rem;
		background-color: #fff;
		margin-bottom: 0.5rem;
		display: -webkit-flex; 
		display: flex;
	}
	.search-right{
		height: 1.8rem;
		display: block;
		text-align: center;
		line-height: 1.8rem;
		color: #333;
		margin-left: .5rem;
        span{
            font-size: .7rem;
            color: #333;
        }
    }
    
	.searcinput{
		flex:6 ;
		height: 1.8rem;
		background-color:#f5f5f5;
		border-radius: 25px;
		width: 100%;
		position: relative;
	}
	.i-search{
		width: 13%;
		height: 1.8rem;
		display: inline-block;
		background: url("../../../../static/img/icon_search@2x.png") no-repeat 10px 4px;
		background-size: 1.3rem;
	}
	.searchingbox{
		background-color: #fff;
		height: 100%;
	}
	.inputtext{
		display: inline-block;	
		height: 1.8rem;
		width: 82%;
		vertical-align: top;
        line-height: 1.8rem;
        background: none;
        font-size: .7rem;
	}
	.uni-input-input{
		height: 1.8rem;
	}
	.searchword{
		background-color: #fff;	
	}
		
	.searchtagbox{
		margin:0 0.5rem;
    }
    .hottagbox{
        margin:0 0.5rem;
         margin-top: .8rem;
    }
	.searchtitle{
		display: -webkit-flex;
		display: flex;
		justify-content: space-between;
		line-height: 2rem;
		padding: .8rem .5rem;
        padding-bottom: 0;
       
	}
	.searchtitle{
		color:#333;
		font-size: 0.8rem;
		height: 2rem;
		line-height: 2rem;
		font-weight: bold;
		padding: 0 0.5rem;
		flex: 3;
		flex-basis:auto;
	}
	.searchtitle icon{
		flex: 1;
	}
	.searchtag .tag-text{
		margin: .3rem .5rem .3rem 0;
		background-color: #f5f5f5;
		border-radius: 25px;
		padding: 0 .9rem;
		display: inline-block;
        font-size: .6rem;
        line-height: 1.8rem;
        height: 1.8rem;
	}
	.searchtag{
        text-align: left;
        .hot-tag{
            color: #E62129;
        }
	}
	.searchtag span{
		color: #666;
	}
	.i-hot{
		width: 1.2rem;
		height: 1.2rem;
		display: inline-block;
		background: url("../../../../static/img/icon_hot@2x.png") no-repeat 0 -2px;
		background-size: 1.2rem;
		vertical-align: middle;
        margin-right: .2rem;
        
	}
	.i-delete{
		width: 1.2rem;
		height: 2rem;
		display: inline-block;
		background: url("../../../../static/img/icon_delete@2x.png") no-repeat 0 6px;
		background-size: 1.2rem;
		vertical-align: middle;
		margin-right: .2rem;
	}
	.hotcolor{
		color: #E62129 ;
	}
	.searchtip{
		position: fixed;
		top: 2.3rem;
		z-index: 9;
		background: #fff;
		width: 100%;
		height: 100%;
	}
	.tipword{
		line-height: 2.5rem;
		height: 2.5rem;
		border-bottom: 1px solid #EDEDED;
		color: #151515;
		font-size: .7rem;
        margin: 0 .8rem;
        text-align: left;
	}

	.tipword .i-go{
		width: 1.5rem;
		height: 1.5rem;
		display: inline-block;
		background: url("../../../../static/img/icon_go@2x.png") no-repeat 0 -3px;
		background-size: 1.5rem;
		vertical-align: middle;
		margin-right: .2rem;
    }
    .tipword{
        span{
            font-size: .7rem;   
            color: #333;
        }
        .addresstip{
            color:#999 ;
            font-size: .6rem;
            margin-left: .5rem;
        }
    } 
	
	.searchtext{
		width: 1.5rem;
		color:#999 ;
	}
	.searchtext,.i-go{
		margin-right: .3rem;
	}
	.i-close{
		width: 1.3rem;
		height: 1.3rem;
		display: inline-block;
		background: url("../../../../static/img/icon_clear@2x.png") no-repeat;
		background-size: 1.3rem;
		vertical-align: middle;
		margin-right: .2rem;
		position: absolute;
		right: 6px;
		top:5px;
	}
		
</style>
