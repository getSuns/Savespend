import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count:8,
    cityname:"长沙",
    foodtype:0,//全部食物
}
const mutations={
    //test
    add(){
        state.count+=1;
    },
    reduce(){
        state.count-=1;
    },
    //test
    

    changeCity(state, n = "长沙") {
        return (state.cityname = n)
    },
    changeFoodtype(state,foodtype) {
        return (state.foodtype = foodtype)
        

    },
}

export default new Vuex.Store({
    state,
    mutations
});