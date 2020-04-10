<template>
    <div class="booking tophead7">
        <div class="bookingchoice" v-if="!bookflag">
            <div class="headbox">
                <div class="navbar">
                    <span class="navleft">
                        <i class="i-back" @click="goback"></i>
                    </span>
                    <span class="navcenter"><span class="title">{{$route.params.title}}</span></span>
                    <span class="navleft">
                    </span>
                </div>
            </div>
            <ul>
                <li class="bookingli">
                    <p class="typename">人数{{usernumlist[0]}}</p>
                    <p class="tagbox">
                        <span v-for="(item, i) in usernumlist" :class="{tagactive:i==n}" @click="Changenum(item,i)" :key=i>{{item}}</span>
                    </p>
                </li>
                 <li class="bookingli">
                    <p class="typename">日期</p>
                    <p class="tagbox">
                        <span v-for="(item, i) in userdatelist" :class="{tagactive:i==d}" @click="Changedate(item,i)" :key=i>{{item}}</span>

                    </p>
                </li>
                 <li class="bookingli">
                    <p class="typename">时间</p>
                    <p class="tagbox">
                        <span v-for="(item, i) in usertimelist" :class="{tagactive:i==t}" @click="Changetime(item,i)" :key=i>{{item}}</span>

                    </p>
                </li>
                <li class="bookingli">
                    <p class="typename">位置</p>
                    <p class="tagbox">
                        <span v-for="(item, i) in userpositionlist" :class="{tagactive:i==p}" @click="Changeposition(item,i)" :key=i>{{item}}</span>

                    </p>
                </li>
            </ul>
            <div class="btnboxflex">
                <button class="paybtn" @click="getseat">立即订座</button>
            </div>
        </div>
        <div class="bookinginfo" v-if="bookflag">
            <div class="headbox">
                <div class="navbar">
                    <span class="navleft">
                        <i class="i-back" @click="bookflag=false"></i>
                    </span>
                    <span class="navcenter"><span class="title">{{$route.params.title}}</span></span>
                    <span class="navleft">
                    </span>
                </div>
            </div>
            <ul class="ulcard">
                <li><em>人数</em><span>{{userobj.usernum}}</span></li>
                <li><em>日期</em><span>{{userobj.userdate}}</span></li>
                <li><em>时间</em><span>{{userobj.usertime}}</span></li>
                <li><em>位置</em><span>{{userobj.userposition}}</span></li>
            </ul>
            <ul class="ulcard">
                <li><em>姓名</em><input v-model="userobj.username" placeholder="请填写用餐人姓名" /></li>
                <li><em>电话</em><input v-model="userobj.userphone" placeholder="请填写用餐人电话"/></li>
            </ul>
            <div class="btnboxflex">
                <button class="paybtn" @click="confirmseat">确认订座</button>
            </div>
        </div>
    </div>
</template>
<script>
    import headnav from "../../common/header"
    import { Toast } from 'vant';

	export default {
		components: {
			headnav 
        },
        data(){
            return{
                bookflag:false,
                userobj:{
                    usernum:'',
                    userdate:'',
                    usertime:'',
                    userposition:'',
                    username:"",
                    userphone:""
                },
                usernumlist:['1-2人','3-6人','7-10人','10人以上'],
                n:0,
                userdatelist:['09:29','09:30','10:09','10:09'],
                d:0,
                usertimelist:['11:00','09:30','32:09','55:09'],
                t:0,
                userpositionlist:['大厅','包间'],
                p:0,
            }
        },
        methods:{
            goback(){
                this.$router.go(-1);//返回上一页
            },
            getseat(){
                this.bookflag=true;
            },
            confirmseat(){
                if(!this.userobj.username){
                    Toast('请填写用餐人姓名');
                    return false;
                }else if(!this.userobj.userphone){
                    Toast('请填写用餐人电话');
                    return false;
                }
                this.$router.push({name:"shopdetail",params:{idname:'3333',booking:true}})
            },
            Changenum:function (item,i) {
                  this.n=i;         //控制选项与数据同步
                  this.userobj.usernum=item;
                  console.log(this.userobj.usernum)
            },
            Changedate:function (item,i) {
                  this.d=i;         
                  this.userobj.userdate=item;
                  console.log(this.userobj.userdate)
            },
            Changetime:function (item,i) {
                  this.t=i;        
                  this.userobj.usertime=item;
                  console.log(this.userobj.usertime)
            },
            Changeposition:function (item,i) {
                  this.p=i;         
                  this.userobj.userposition=item;
                  console.log(this.userobj.userposition)
            },
        }
	}
</script>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";
 
.bookingchoice{
    padding: .8rem;
    background-color: #fff;
    .bookingli{
        padding-top: .6rem;
        .typename{
            font-size: .7rem;
            color: #333; 
        }
        .tagbox{
            padding:.6rem 0;
        }
    }
    .tagbox span{
        display: inline-block;
        border-radius: 4px;
        font-size: .7rem;
        text-align: center;
        margin-right: .5rem;
        background: #F5F5F5;
        color: #999;
        width: 3.7rem;
        height:1.9rem;
        line-height: 1.9rem;
    }
    .tagbox span:last-child{
        margin-right: 0;
    }
    .tagactive{
        color: #E62129!important;
        background: #FFEBEC!important;
    }
}
.bookinginfo{
    li{
        font-size: .8rem;
        color: #333;
        em{
            display: inline-block;
            width: 3.5rem;
        }
        span{
            display: inline-block;
        }
    }
}
</style>