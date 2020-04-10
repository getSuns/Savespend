<template>
    <div class="city">
        <div class="topsearch">
            <form action="/">
            <van-search
                v-model="searchvalue"
                placeholder="城市名"
                shape="round"
                show-action
                left-icon="../../../../static/img/icon_search@2x.png"
                @search="onSearch"
                @cancel="onCancel"
            />
            </form>
        </div>
        <div class="midhot">
            <p class="ptitlt">当前定位</p>
            <div><span class="tag activecity"><i class="i-map"></i>{{$store.state.cityname}}</span></div>
            <p class="ptitlt">热门城市</p>
            <div>
                <span class="tag" @click="changecity('株洲')" >株洲</span>
                <span class="tag" @click="changecity('耒阳')" >耒阳</span>
                <span class="tag" @click="changecity('衡阳')" >衡阳</span>
                <span class="tag" @click="changecity('上海')" >上海</span>
            </div>
        </div>
        <div class="citybtm">
           <van-index-bar :index-list="indexList" highlight-color="#E62129">
                <van-index-anchor index="A">标题1</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />                
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-index-anchor index="B">标题2</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />                
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-index-anchor index="C">标题3</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />                
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />                
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-index-anchor index="D">标题4</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-index-anchor index="E">标题5</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-index-anchor index="F">标题6</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />                
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />                
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />                
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />                
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
            </van-index-bar>    
        </div>
    </div>
</template>
<script>
import mutation from "../../../store/store";

export default {
    
    props:{
    },
     data() {
        const indexList = [];
        const charCodeOfA = 'A'.charCodeAt(0);
        for (let i = 0; i < 26; i++) {
        indexList.push(String.fromCharCode(charCodeOfA + i));
        }
        return {
            indexList,
            searchvalue:""
        };
    },
    mounted:function(){
        //console.log(this.$route.params.cityname);
    },
    methods:{
        changecity(cityname){
            this.$store.commit('changeCity',cityname);
            this.$router.push('/');
        },
        onSearch(value){
            console.log(value);
        },        
        onCancel(value){
            this.$router.go(-1)
        },
    }
}
</script>
<style>
.van-index-bar__sidebar{
    margin-right: .3rem!important;
}
</style>
<style lang="less" scoped>
 @import "../../../assets/css/public.less";
    .topsearch,.midhot{
        background-color: #fff;
    }
    .midhot{
        padding: 0 .8rem 1rem .8rem;

        .ptitlt{
            font-size: .8rem;
            color: #333;
            font-weight: bold;
            padding: 1rem 0 .5rem 0;
        }
    }
    .i-map{
        .icon;
		background-image: url("../../../../static/img/icon_pos@2x.png");
    }
    .activecity{
        .active;
         padding: 0 .6rem
    }
</style>