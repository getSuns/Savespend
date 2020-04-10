
<template>
  <div class="applicationeditor">
    <!-- 调用组件  -->
    <draggable element="ul" v-model="list">
      <li v-for="item in list" :key="item.id">{{item.name}}</li>
    </draggable>
    <!-- 输出list数据 -->
    {{list}}
  </div>
</template>

<script>
    import headnav from "../../common/header"; //第一步，导入组件
    import draggable from 'vuedraggable'
	export default {
        name: 'demo',
		components: {
            headnav,//第二步，注册组件
            draggable,
        },
        data () {
    return {
      list:[
        {
          id: 1,
          name: 'a'
        },
        {
          id: 2,
          name: 'b'
        },
        {
          id: 3,
          name: 'c'
        },
        {
          id: 4,
          name: 'd'
        },
        {
          id: 5,
          name: 'e'
        },
        {
          id: 6,
          name: 'f'
        },
      ]
    }
    },

     
	}
</script>

<style lang="less" scoped>
 @import "../../../assets/css/public.less";
</style>
