<template>
	<div class="setup tophead7">
		<headnav leftback="i-back" titletext="设置中心" :flexnum="1"></headnav>
        <div class="middle">
            <van-cell title="个人信息" is-link to="/userinfo" size="large" />
            <van-cell title="账号与安全" is-link to="usersecurity"  size="large" />
            <van-cell class="top5" title="清空缓存" is-link size="large" value="778.3M" value-class="cachecolor" @click="clearcache"/>
            <van-cell title="接受新消息通知"  size="large" value="已关闭"/>
            <div class="bkhoffinfo">
               <p>要开启或关闭，您可以在设置-通知-掰开花中更改</p>
                <van-cell title="关于掰开花" is-link url="/vant/mobile.html" size="large" />
            </div>
        </div>
        <div class="btnboxflex">
            <router-link to="/login">
            <button class="canclebtn">退出登录</button>
            </router-link>
        </div>
	</div>
</template>

<script>
	import headnav from "../../common/header"
    import { Dialog, Toast } from 'vant';
	
	export default {
		components: {
			headnav
		},
		data() {
			return {

  		    }
        },
        methods:{
           clearcache(){
                 Dialog.confirm({
                    message: '确认要清除所有缓存？',
                    className:"dialog",
                    }).then(() => {
                       Toast("清除成功");
                    }).catch(() => {
                    // on cancel
                });
           }
        }
    }
	
</script>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";

.setup{
    .setupinfo{
        margin-top: .5rem;
    }
    .bkhoffinfo{
        p{
            font-size:.6rem;
            color: #999999;
            padding: .5rem .8rem;
        }
    }
    .cachecolor{
        color: #333;
    }
}
</style>
