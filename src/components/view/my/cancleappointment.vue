<template>
	<div class="cancleeappoint tophead7">
		<headnav leftback="i-back" :flexnum="1" titletext="取消预约"></headnav>
		<div class="listbtm" >
			<van-radio-group v-model="radio">
                <van-cell-group>
                    <van-cell title="信息填写错误，需要重新预定" clickable  @click="radio = '1'">
                        <van-radio name="1" class="radiostyle">
                                    <img
                                        slot="icon"
                                        slot-scope="props"
                                        :src="props.checked ? icon.active : icon.inactive"
                                        >
                        </van-radio>
                    </van-cell>
                    <van-cell title="行程有变，需要重新预定" clickable @click="radio = '2'">
                         <van-radio name="2" class="radiostyle">
                                    <img
                                        slot="icon"
                                        slot-scope="props"
                                        :src="props.checked ? icon.active : icon.inactive"
                                        >
                        </van-radio>
                    </van-cell>
                    <van-cell title="餐厅无法满足需求" clickable @click="radio = '3'">
                        <van-radio name="3" class="radiostyle">
                                    <img
                                        slot="icon"
                                        slot-scope="props"
                                        :src="props.checked ? icon.active : icon.inactive"
                                        >
                        </van-radio>
                    </van-cell>
                    <van-cell title="其他" clickable @click="radio = '4'">
                         <van-radio name="4" class="radiostyle">
                                    <img
                                        slot="icon"
                                        slot-scope="props"
                                        :src="props.checked ? icon.active : icon.inactive"
                                        >
                        </van-radio>
                         
                    </van-cell>
                    <div class="elsebox" v-if="radio=='4'">
                        <textarea v-model="elsetext" placeholder="请填写原因..."></textarea>  
                    </div>
                    
                </van-cell-group>
            </van-radio-group>
		</div>
         <div class="midbtn btnboxflex">
                <button class="paybtn" @click="submitradio">提交</button>
            </div>
	</div>

</template>

<script>
	import headnav from "../../common/header" //第一步，导入组件
	export default {
		components: {
			headnav //第二步，注册组件
        },
        data(){
            return{
                radio:"1",
                elsetext:"",
                icon: {
                    active: '../../../../static/img/radio2.png',
                    inactive: '../../../../static/img/radio1.png'
                }
            }
        },
        methods:{
            submitradio(){
                alert(this.radio+this.elsetext)
            }
        }
	}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/public.less";
    .radiostyle {
        float:right;
    }
    .radiostyle img{
        width: 1rem;
        height: 1rem;
    }
    .van-cell__value{
        flex:.5;
    }
    .elsebox{
        padding: .8rem;
        textarea{
            width: 100%;
            border: 1px solid #e4e4e4;
            height: 5rem;
            padding: .5rem;
            font-size: .65rem;
            resize:none;
        }
    }
</style>
