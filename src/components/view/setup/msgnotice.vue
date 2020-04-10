<template>
    <div class="msgnotice tophead2">
        <headnav leftback="i-back" :flexnum="1" titletext="消息通知"></headnav>
        <ul class="msgul">
            <li>
                <p class="msgtitle">评论系统技术升级通知</p>
                <p class="msgtext">
                    尊敬的用户您好：<br>
                    因网站评论系统技术升级，自即日起至10月10日，掰开花将暂时关闭评论功能。
                    给您带来的不便敬请谅解。
                </p>
                <p class="msgtime">2019年10月8日</p>
            </li>
            <li>
                <p class="msgtitle">评论系统技术升级通知</p>
                <p class="msgtext">
                    尊敬的用户您好：<br>
                    因网站评论系统技术升级，自即日起至10月10日，掰开花将暂时关闭评论功能。
                    给您带来的不便敬请谅解。
                </p>
                <p class="msgtime">2019年10月8日</p>
            </li>
        </ul>
    </div>
</template>
<script>
	import headnav from "../../common/header" //第一步，导入组件
	export default {
		components: {
			headnav 
		}
	}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/public.less";

.msgnotice{
    ul{
        padding: .5rem .8rem;
        li{
            padding: 1rem .8rem;
            background: #fff;
            margin-bottom: .5rem;
        }
        .msgtitle{
            font-size: .8rem;
            color: #333333;
            
        }
        .msgtext{
            font-size: .7rem;
            color: #666666;
            margin:.6rem 0;
        }
        .msgtime{
            font-size: .7rem;
            color: #666666;
            text-align: right;
        }
    }
}
</style>