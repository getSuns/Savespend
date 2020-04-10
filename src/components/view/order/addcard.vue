<template>
    <div class="addcard tophead2">
		<headnav leftback="i-back" :flexnum="1"></headnav>
        <p class="cardtitle">添加银行卡</p>
        <ul class="ulcard">
            <li><span class="lileft">持卡人</span><span class="liright"><input v-model="username" v-on:input="change"/></span></li>
            <li><span class="lileft">卡号</span><span class="liright"><input v-model="cardnum" type="number" v-on:input="change"/><i class="i-camera"></i></span></li>
        </ul>
        <div class="btnbox">
            <button :class="cardflag?'paybtn':'restbtn'" :disabled=!cardflag  @click="cardinfo">下一步</button>
        </div>
    </div>
</template>
<script>
    import headnav from "../../common/header" //第一步，导入组件
    import { Dialog } from 'vant';
	export default {
		components: {
			headnav //第二步，注册组件
        },
        data(){
            return{
                cardflag:false,
                cardnum:"",
                username:"",
            }
        },
        mounted: function () {
                Dialog.alert({
                    title: '提示',
                    message: '持卡人绑定后不可修改\n请谨慎绑定首个持卡人',
                    confirmButtonText:'我知道了',
                    confirmButtonColor:'#0070FF',
                    }).then(() => {
                });
            
        },
        methods:{
             cardinfo(){
                 this.$router.push("/cardinfo")
             },
             change(){
                 console.log(this.cardnum+this.username)
                 if(this.cardnum&&this.username){
                     this.cardflag=true;
                 }else{
                     this.cardflag=false;
                 }
             }
        }
	}
</script>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";
 .addcard{
     .btnbox{
         margin-top:3.5rem;
     }
     .bkhtips{
         padding-right: .8rem;
         em{
             display: block;
         }
     }
     span{
         font-size: .8rem;
     }
     .i-camera{
         .icon;
         background-image: url("../../../../static/img/icon_camera@2x.png");
         float:right;
         margin-top:.7rem;
     }
     .lileft{
         display: inline-block;
         width: 3.5rem;
     }
 }

</style>