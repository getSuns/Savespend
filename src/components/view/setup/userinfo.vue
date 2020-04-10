<template>
	<div class="userinfo tophead7">
        <div class="userindex" v-if="!nameupdate">
            <headnav leftback="i-back" titletext="个人信息" :flexnum="1"></headnav>
            <div class="middle">
                <div class="userimg">
                    <span>头像</span>
                    <van-uploader :after-read="afterRead">
                        <span class="imgbox">
                            <img :src="imgsrc" />
                            <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
                        </span>
                    </van-uploader>
                </div>
                <van-cell title="昵称" is-link :value="username"  value-class="namecolor"  size="large"  @click="nameupdate=true" />
            </div>
        </div>
        <div class="usernamebox" v-else>
             <div class="headbox">
                <div class="navbar">
                    <span class="navleft">
                        <i class="i-back" @click="nameupdate=false"></i>
                    </span>
                    <span class="navcenter"><span class="title">修改昵称</span></span>
                    <span class="navleft">
                    </span>
                </div>
            </div>
            <div class="middle">
               <div class="nameinfo"><input type="text" v-model="username" /></div>
               <div class="btnbox">
                   <button class="paybtn" @click="nameupdate=false">完成</button>
               </div>
            </div>
        </div>
	</div>
</template>

<script>
	import headnav from "../../common/header"
    import { Dialog } from 'vant';
	
	export default {
		components: {
			headnav
		},
		data() {
			return {
                username:"馒头包子",
                nameupdate:false,
                imgsrc:"../../../../static/img/img@2x.png",
  		    }
        },
        methods:{
            afterRead(file) {
            // 此时可以自行将文件上传至服务器
            this.imgsrc=file.content
            }
        }
    }
	
</script>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";

.userindex{
    .namecolor{
        font-size: .75rem;
        color: #333333;
    }
    .userimg{
        background: #fff;
        margin-bottom: .5rem;
        height: 3.9rem;
        line-height: 3.9rem;
        .flex;
        padding: 0 .8rem;
        span{
            font-size: .8rem;
        }
    }
    .imgbox{
        display: inline-block;
         height: 3.9rem;
        line-height: 3.9rem;
        img{
            width: 3.1rem;
            height: 3.1rem;
            border-radius: 100px;
            vertical-align: middle;
        }
        
    }
}
.usernamebox{
    .nameinfo{
        height: 2.4rem;
        line-height: 2.4rem;
        padding:0   .8rem;
        background: #fff;
        input{
            width: 100%;
            font-size: .75rem;
        }
    }
    .btnbox{
        margin-top: 8rem;
    }
}
</style>
