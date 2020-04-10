 <template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{$store.state.count}}</h3>
        <div>
            <button @click="add">+</button>
            <button @click="reduce">-</button>
        </div>
    </div>
</template>
<script>
import fetch from "../assets/js/fetch";
import mutation from "../store/store";
export default{
        data(){
            return{
                msg:'Hello Vuex',
            }
        },
        methods:{
            add() {
                this.$store.commit('add')
                // const TMPURL = ''; // url地址
                // const params = {}; // 参数
                // fetch.post(TMPURL + '/login/login', params);
            },
            reduce() {
                this.$store.commit('reduce');
            }
        }
    }
</script>
<style lang="less">
 @import "../assets/css/public.less";

</style>