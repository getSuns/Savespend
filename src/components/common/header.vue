<template>
    <div class="headbox" :class="boderbtm">
        <div class="navbar">
            <span class="navleft">
                <span class="lefttext" v-if="lefttext">{{lefttext}}</span>
                <i :class="leftback" @click="goback" v-if="leftback"></i>
            </span>
            <span class="navcenter"><span class="title">{{titletext}}</span></span>
            <span class="navright" :style="{flex:flexnum}" @click="gotopage">
                <span class="righttext" v-if="righttext">{{righttext}}</span>
                <i class="i-right" :class="righticon" v-if="righticon"></i>
            </span>
        </div>
    </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
    props:{
        leftback:String,
        lefttext:String,
        titletext:String,
        righttext:String,
        righticon:String,
        boderbtm:String,
        flexnum:Number,
        pageurl:String,
        eventtitle:String,
        confirmmsg:String,
        backurl:String
    },
    data(){
        return{
        }
    },
    methods:{
        goback(){
            if (this.eventtitle) {
                Dialog.confirm({
                message: this.eventtitle
                }).then(() => {
                    this.$router.go(-1);//返回上一页
                }).catch(() => {
                    return false;
                });
            }else if(this.backurl){
                this.$router.push({name:this.backurl})
            }else{
                this.$router.go(-1);//返回上一页
            }
            
        },
        gotopage(){
            if(this.confirmmsg){
                Dialog.confirm({
                message: this.confirmmsg
                }).then(() => {
                     this.$parent.appsave();
                }).catch(() => {
                // on cancel
                });
            }else{
                this.$router.push("/"+this.pageurl);
            }
            
        }
    }
}
</script>
<style lang="less" scoped>
@import "../../assets/css/public.less";
.boderbtm{
    border-bottom:1px solid #e4e4e4;
}
.headred{
    background-image: linear-gradient(135deg, #FB6066 0%, #E62129 100%)!important;
    color: #fff!important;
}
.headtm{
    color: #fff!important;
    background: rgba(255, 255, 255,0)!important;
}
.headbox{
    position: fixed;
    width: 100%;
    height: 2.2rem;
    line-height: 2.2rem;
    top: 0;
    background: #fff;
    padding: 0 .8rem;
    left: 0;
    z-index: 6;
    .navbar{
        display: flex;
        display: -webkit-flex;
        width: 100%;
    }
    .navleft{
        flex: 1;
        text-align: left;
        .i-back{
            .icon;
            background: url("../../../static/img/icon_left@2x.png") no-repeat;
            background-size: 1.2rem;
        }
        .i-backw{
            .icon;
            background: url("../../../static/img/icon_left_white@2x.png") no-repeat;
            background-size: 1.2rem;
        }
    }
    .navcenter{
        flex: 6;
        text-align: center;
        .title{
            font-size: .9rem;
            color:"#333";
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            display: -webkit-box;
        }
    }
    .navright{
        text-align: right;
        font-size: .7rem;
        flex-basis:1;
        
        .righttext{
            color: #0070FF;
        }
        .i-right{
            .icon;
        }
    }
    .i-search{
        .icon;
        background-image: url("../../../static/img/icon_search_black@2x.png")
    }
    .i-kufu{
         .icon;
        background-image: url("../../../static/img/icon_my_kefu@2x.png")
    }
}
</style>