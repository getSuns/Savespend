<template>
    <div class="content">
        <!-- <van-tabbar v-model="active" >
            <van-tabbar-item icon="home-o"  replace to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="search"  replace to="/shoplist">商家</van-tabbar-item>
            <van-tabbar-item icon="friends-o"  replace to="/usercenter">我的</van-tabbar-item>
        </van-tabbar> -->
        <van-tabbar v-model="active" active-color="#E62129" inactive="#999999" route>
          <van-tabbar-item  to="/">
            <span>首页</span>
            <img
              slot="icon"
              slot-scope="props"
              :src="props.active ? icon.active : icon.normal"
            >
          </van-tabbar-item>
          <van-tabbar-item  to="/shoplist">
            <span>商家</span>
            <img
              slot="icon"
              slot-scope="props"
              :src="props.active ? icon.active2 : icon.normal2"
            >
          </van-tabbar-item>
          <van-tabbar-item to="/usercenter"> 
            <span>我的 </span>
            <img
              slot="icon"
              slot-scope="props"
              :src="props.active ? icon.active3 : icon.normal3"
            >
          </van-tabbar-item>
      </van-tabbar>
    </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: '../../../static/img/icon_tab_home_nor@2x.png',
        active: '../../../static/img/icon_tab_home_pre@2x.png',
        normal2: '../../../static/img/icon_tab_store_nor@2x.png',
        active2: '../../../static/img/icon_tab_store_pre@2x.png',
        normal3: '../../../static/img/icon_tab_my_nor@2x.png',
        active3: '../../../static/img/icon_tab_my_pre@2x.png'
      }
    }
  }
}
</script>
<style scoped>
.van-hairline--top-bottom{
      box-shadow: 0 -2px 4px 0 rgba(0,0,0,0.02);
}
</style>