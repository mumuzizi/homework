<template>
  <div>
    <div class="container">
      <ul>
        <li @click='$router.push("/musicdetail")' v-for="(items,index) in dataList" :key="index+'ml'">
          <img :src= "items.bg" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  created() {
    this.$emit('routerChange','music')
    this.getData();
  },
  data(){
    return{
      dataList:[]
    }
  },
  methods:{
    getData(){
      axios.get('./data/musiclist.json')
      .then((response) => {
        this.dataList = response.data.albums;
      })
      .catch(()=> {
      })
    }
  }
}
</script>
<style scoped>
ul li{
  width: 50%;
  float: left;
}
ul li img{
  width: 100%;
}
</style>
