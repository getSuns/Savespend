<template>
	<div class="alltype tophead2">
        <headnav leftback="i-back" :flexnum="1"  righttext="编辑" pageurl="applicationeditor" backurl="home"></headnav>
        <div class="top">
            <p class="title">我的应用</p>
            <div class="appbox">
               <img src="../../../../static/img/icon_nav_can@2x.png"/>
               <img src="../../../../static/img/icon_nav_can@2x.png"/>
               <img src="../../../../static/img/icon_nav_can@2x.png"/>
               <img src="../../../../static/img/icon_nav_can@2x.png"/>
               <img src="../../../../static/img/icon_nav_can@2x.png"/>
               <img src="../../../../static/img/icon_nav_can@2x.png"/>
               <img src="../../../../static/img/icon_nav_can@2x.png"/>
            </div>
        </div>
        <p class="apart"></p>
        <div class="middle">
            <p class="title">全部分类</p>
            <ul class="allappul">
                <li @click="topage"><img src="../../../../static/img/icon_nav_can@2x.png" /><p>餐饮美食</p></li>
                <li><img src="../../../../static/img/icon_nav_can@2x.png" /><p>餐饮美食</p></li>
                <li><img src="../../../../static/img/icon_nav_can@2x.png" /><p>餐饮</p></li>
                <li><img src="../../../../static/img/icon_nav_can@2x.png" /><p>餐饮美食</p></li>
                <li><img src="../../../../static/img/icon_nav_can@2x.png" /><p>美食</p></li>
                <li><img src="../../../../static/img/icon_nav_can@2x.png" /><p>餐饮美食</p></li>
                <li><img src="../../../../static/img/icon_nav_can@2x.png" /><p>餐饮美食</p></li>
                <li><img src="../../../../static/img/icon_nav_can@2x.png" /><p>餐饮美食</p></li>
                <li><img src="../../../../static/img/icon_nav_can@2x.png" /><p>美食</p></li>
                <li><img src="../../../../static/img/icon_nav_can@2x.png" /><p>餐饮美食</p></li>
                
            </ul>
        </div>
	</div>
</template>

<script>
	import headnav from "../../common/header"	
	export default {
		components: {
			headnav
		},
		data() {
			return {

  		    }
        },
        methods:{
         	topage(){
				this.$router.push('shoplist');
			},
        }
    }
	
</script>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";

.alltype{
    background: #fff;
    height: 100%;
    .apart{
        background: #f5f5f5;
        height: .5rem;
    }
    .top{
        padding: .8rem;
    }

    .title{
        font-size:.9rem;
        color: #333333;
    }
    .appbox{
        .flex;
        padding: .8rem 0;
        img{
            width: 1.8rem;
            height: 1.8rem;
        }
    }
    .middle{
        .title{
            padding: .8rem;
            padding-bottom: 0;
        }
    }
    .allappul{
            display: inline-table;
            width: 100%;
        li{
            margin-top: .8rem;
            float: left;
            width: 25%;
            text-align: center;
            p{
                font-size: .6rem;
                color: #666666;
                text-align: center;
            }
        }
        img{
            width: 2.2rem;
            height: 2.2rem;
        }
    }
}
</style>
