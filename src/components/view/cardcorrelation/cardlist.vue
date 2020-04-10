<template>
	<div class="cardlist tophead2">
		<headnav leftback="i-back" :flexnum="1" titletext="银行卡"></headnav>
       <div class="btmlist">
           <ul class="cardgroup">
               <li class="cardcell card-zg" @click="show=true">
                    <div class="cardtype">
                    <i class="cardicon"></i><span><p class="cardname">中国银行</p><p class="cardtypename">储蓄卡</p></span>
                    </div>
                    <p class="cardnum"><em>****</em><em>****</em><em>****</em><b>3445</b></p>
                    <span class="bgcard"></span>
               </li>
               <li class="cardcell card-jt">
                    <div class="cardtype">
                    <i class="cardicon"></i><span><p class="cardname">交通银行</p><p class="cardtypename">储蓄卡</p></span>
                    </div>
                    <p class="cardnum"><em>****</em><em>****</em><em>****</em><b>3445</b></p>
                    <span class="bgcard"></span>
               </li>
           </ul>
       </div>
       <van-action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        @select="onSelect"
        @cancel="onCancel"
        />
	</div>
</template>

<script>
    import headnav from "../../common/header"; //第一步，导入组件
    import { ActionSheet } from 'vant';
    import { Toast } from 'vant';
	export default {
		components: {
            headnav,//第二步，注册组件
        },
        data() {
            return {
                show: false,
                actions: [
                    { name: '解除绑定' },
                ],
            };
        },
        methods:{
            topage(id){
                this.$router.push({name:"appointmentinfo",params:{idname:id}})
            },
            onSelect(item) {
            // 点击选项时默认不会关闭菜单，可以手动关闭
            this.show = false;
            Toast(item.name);
            },
            onCancel(){

            }
        }
	}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/public.less";
.cardlist{
    .btmlist{
        padding: 0 .8rem;
    }
    .cardcell{
        margin-top:.5rem;
        height: 6.6rem;
        color: #FFFFFF;
        border-radius: 4px;
        position: relative;
        padding: 1rem;
        span{
            display: inline-block;  
            vertical-align: top;
        }
        .cardicon{
            display: inline-block;
            background: #fff;
            border-radius: 100px;
            height: 1.8rem;
            width: 1.8rem;
            margin-right: .6rem;
            background-size: 1.8rem;
            background-image: url("../../../../static/img/i_zg.png");
            background-repeat: no-repeat;
        }
        .cardname{
            font-size: .8rem;
            line-height: 1rem;
            height: 1rem;
        }
        .cardtypename{
            font-size: .6rem;
            line-height: 1.1rem;
        }
        .bgcard{
            background: #9A1F24;
            background-image: url("../../../../static/img/i_zg_w.png");
            background-repeat: no-repeat;
            display: inline-block;
            position:absolute;
            height: 4.65rem;
            width: 4.75rem;
            right: 0;
            bottom: 0px;
            background-size: 8.75rem;
            background-position: -1rem -1rem;
            opacity: .1;
            
        }
        .cardnum{
            margin-top: 1.4rem;
            font-size: 1.2rem;
            em{
                padding-right: .5rem;
            }
        }
    }
    .card-zg{
        background: #9A1F24;
    }
    .card-jt{
         background: #00367A;
         .cardicon{
             .i-jt;
         }
        .bgcard{
             background-image: url("../../../../static/img/i_jt_w.png");
        }
    }
}
</style>
