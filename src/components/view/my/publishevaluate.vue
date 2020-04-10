<template>
	<div class="publishevaluate tophead7">
        	<headnav leftback="i-back" :flexnum="1"  titletext="发表评价"></headnav>
        <div class="top">
		    <p>您对商家的整体评价</p>
            <van-rate
            class="ratebox"
            v-model="value"
            allow-half
            void-icon="star"
            void-color="#e4e4e4"
            size="30"
            gutter="14"
            @change="ratechange"
            />
        </div>
        <div class="middle">
            <div class="evaluateinfo">
                <textarea placeholder="说说你的感受，分享给想去的小伙伴们吧" rows="5" v-model="textvalue" maxlength="140"></textarea>
                <div class="top5">
                    <van-uploader
                        v-model="fileList"
                        multiple
                        :max-count="6"
                    >
                    <span class="filebtn">
                        <i class="i-camera"></i>
                        <p>添加图片</p>
                    </span>
                    </van-uploader>
                </div>
            </div>
            <p class="textnumbox"><em>{{textvalue.length}} </em> / <em> 140</em></p>
        </div>
        <div class="btnboxflex">
           <button class="paybtn">发表评价</button>
           <span class="iconfont icon-guanbibeifen"></span>
        </div>
	</div>
</template>

<script>
    import headnav from "../../common/header" //第一步，导入组件

	export default {
		components: {
            headnav, //第二步，注册组件
        },
        data(){
            return{
                value: 2.5,
                textvalue:"",
                fileList: []
            }
        },
        methods:{
            ratechange(){
                console.log(this.value)
            }
        }
	}
</script>
<style lang="less">
    .van-uploader__preview{
        margin-right: 1.6rem!important;
        margin-bottom: .8rem!important;
    }
    .van-uploader__preview-delete{
        right: -12px;
        top: -12px;
        bottom: auto;
        background-color:rgba(255,255,255,0);
        border-radius: 100px;
        background-image: url("../../../../static/img/icon_clear_black@2x.png");
        width: 1rem;
        height: 1rem;
        background-size: 1rem;
    }
    .van-uploader__preview-delete::before{
        content: ""
    }
    
</style>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";
.publishevaluate{
    .btmfoot3;
    .top{
        background: #fff;
        padding: 1.3rem;
        text-align: center;
        p{
            font-size: .9rem;
            color: #333333;
            text-align: center;
        }
        .ratebox{
            margin-top: 1.3rem;
            margin-bottom: .5rem;
        }
    }
    .middle{
        .top5;
        
       
        .evaluateinfo{
            padding: 1rem .8rem;
            background: #fff;
            padding-bottom: .5rem;
            textarea{
                font-size: .8rem;
                color: #333333;
                width: 100%;
                height: 4.5rem;
                resize: none;
            }
        }
        .textnumbox{
            padding: .3rem .8rem;
            text-align: right;
            font-size: .6rem;
            color: #CCCCCC;
        }
    }
    .filebtn{
        width: 4rem;
        height: 4rem;
        display: inline-block;
        border: 1px dashed #ccc;
        text-align: center;
        padding: .7rem;
        p{
            font-size: .6rem;
            color: #CCCCCC;
            margin-top: .5rem;
        }
    }
    .i-camera{
        .icon;
        background-image: url("../../../../static/img/icon_camera@2x.png")
    }
}
</style>
