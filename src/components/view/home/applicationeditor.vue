
<template>
  <div class="applicationeditor tophead2">
      <headnav leftback="i-back" :flexnum="1"  righttext="保存" confirmmsg="是否保存已编辑内容"></headnav>
      <div class="top">
          <p class="title">我的应用<em class="tips">按住拖拽可以进行排序</em></p>
          <draggable element="ul" v-model="applist" class="allappul">
              <li  v-for="(item,index) in applist" :key="item.id" ><img :src="item.src" /><p>{{item.name}}{{item.id}}</p><i v-if="item.icon" class="i-close" @click="appdelete(index)"></i></li>
          </draggable>
      </div>
      <p class="apart"></p>
      <div class="btm">
        <p class="title">其他服务</p>
         <ul class="allappul">
              <li  v-for="(item,index) in alllist" :key="item.id"><img :src="item.src" /><p>{{item.name}}{{item.id}}</p><i class="i-redclose" @click="appadd(index)"></i></li>
          </ul>
      </div>
  </div>
</template>

<script>
    import headnav from "../../common/header"; //第一步，导入组件
    import { Toast} from 'vant';
    import draggable from 'vuedraggable'
	export default {
        name: 'demo',
        components: {
                headnav,//第二步，注册组件
            draggable,
        },
        data () {
      return {
        applist:[
          {
            src:'../../../../static/img/icon_nav_can@2x.png',
            name:'餐饮美食',
            id:1,
            icon:false
          },
          {
            src:'../../../../static/img/icon_nav_can@2x.png',
            name:'餐饮美食',
            id:2,
            icon:false
          },
          {
            src:'../../../../static/img/icon_nav_can@2x.png',
            name:'餐饮美食',
            id:3,
            icon:false
          },
          {
            src:'../../../../static/img/icon_nav_can@2x.png',
            name:'餐饮美食',
            id:4,
            icon:true
          },
          {
            src:'../../../../static/img/icon_nav_can@2x.png',
            name:'餐饮美食',
            id:5,
            icon:true
          },
          {
            src:'../../../../static/img/icon_nav_can@2x.png',
            name:'餐饮美食',
            id:6,
            icon:true
          },
          {
            src:'../../../../static/img/icon_nav_can@2x.png',
            name:'餐饮美食',
            id:7,
            icon:true
          }

        ],
      alllist:[
          {
            src:'../../../../static/img/icon_nav_jianshen@2x.png',
            name:'餐饮美食',
            id:8,
            icon:true
          },
          {
            src:'../../../../static/img/icon_nav_jianshen@2x.png',
            name:'餐饮美食',
            id:9,
            icon:true
          },
          {
            src:'../../../../static/img/icon_nav_jianshen@2x.png',
            name:'餐饮美食',
            id:10,
            icon:true
          },
          {
            src:'../../../../static/img/icon_nav_jianshen@2x.png',
            name:'餐饮美食',
            id:11,
            icon:true
          },
          {
            src:'../../../../static/img/icon_nav_jianshen@2x.png',
            name:'餐饮美食',
            id:12,
            icon:true
          },
          {
            src:'../../../../static/img/icon_nav_jianshen@2x.png',
            name:'餐饮美食',
            id:13,
            icon:true
          },
          {
            src:'../../../../static/img/icon_nav_jianshen@2x.png',
            name:'餐饮美食',
            id:14,
            icon:true
          }

        ],
      }
    },
    methods:{
      appsave() {
        console.log('已保存');
        this.$router.push("/alltype");
      },
      appdelete(index){
        this.alllist.push(this.applist[index]);//全部应用中新增此项
        this.applist.splice(index,1);//我的应用中删掉此项
      },
      appadd(index){
        if(this.applist.length>=7){
          Toast("最多加7个");
          return false;
        }
        this.applist.push(this.alllist[index]);//
        this.alllist.splice(index,1);//

      }

    }
     
	}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/public.less";
 .applicationeditor{
     background: #fff;
     height: 100%;
   .title{
      padding: .8rem;
      font-size: .9rem;
      color: #333333;
     em{
       font-size: .6rem;
      color: #999999;
      line-height: .6rem;
      margin-left: .6rem;
     }
   }
   .apart{
        background: #f5f5f5;
        height: .5rem;
    }
   ul{
     padding: 0 .675rem 1.4rem;
     display: inline-table;
     width: 100%;
     li{
            position: relative;
            margin: 0  1% 0.3rem;
            float: left;
            width: 23%;
            text-align: center;
            height: 4.8rem;
            border: 1px solid #EDEDED;
            border-radius: 8px;
            padding-top: 1rem;
       img{
          width: 1.8rem;
          height: 1.8rem;
       }
       p{
            font-size: .6rem;
            color: #666666;
            text-align: center;
            line-height: 1rem;
        }
     }
   }
   .i-close,.i-redclose{
     .icon;
     position: absolute;
     background-image: url("../../../../static/img/icon_clear@2x.png");
     top: 1px;
     right: 1px;
   }
   .i-redclose{
     background-image: url("../../../../static/img/icon_clear_red@2x.png");
   }
 }
</style>
