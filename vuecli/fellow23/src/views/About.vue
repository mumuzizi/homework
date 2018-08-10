<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <h1>局部方法</h1>
      <button @click = "add">加一</button>
      <button @click= "reduce">减一</button>
      {{num}}
    </div>
    <div>
      <h1>全局方法</h1>
      <button @click="$store.commit('add',3)">加一</button>
      <button @click="$store.commit('reduce')">减一</button>
      <!-- {{$store.state.count}} -->
      {{count}}
    </div>
  </div>
</template>
<script>
// import store from "@/store"
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
  data(){
    return{
      num:0
    }
  },
  // computed:{
  //   sum(){
  //     return this.$store.state.count
  //   }
  // },
  // computed:{
  //   sum1(state){
  //     return state.count
  //   }
  // },
  computed:{
    ...mapState(["count"]),
    ...mapGetters(["count"])
  },
  methods:{
    add(){
      this.num++;
    },
    reduce(){
      this.num--
    }
  },
//   beforeRouteEnter(to,from,next){
//     console.log(to);
//     console.log(from);
//     next();
//   },
//   beforeRouteLeave(to,from,next){
//     console.log(to);
//     console.log(from);
//     next();
//   }
}
</script>
