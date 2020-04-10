<template>
	<div class="usersecurity tophead7">
		<headnav leftback="i-back" titletext="账号与安全" :flexnum="1"></headnav>
        <div class="middle">
            <van-cell title="手机号" is-link :to="{name:'phonemodify',params:{type:'phone'}}" size="large" value="188****8475" value-class="cachecolor"/>
            <van-cell class="top5" title="修改登陆密码" is-link   :to="{name:'phonemodify',params:{type:'password'}}" size="large" />
            <van-cell title="忘记登陆密码" is-link   :to="{name:'retrievepassword',params:{type:1}}" size="large" />
            <van-cell class="top5" title="修改支付密码" is-link   :to="{name:'untying',params:{type:2}}" size="large"/>
            <van-cell title="忘记支付密码"  size="large" is-link  :to="{name:'retrievepassword',params:{type:2}}" />
           
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

  		    }
        },
        methods:{
           
        }
    }
	
</script>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";

.usersecurity{
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
