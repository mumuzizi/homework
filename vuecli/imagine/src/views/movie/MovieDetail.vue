<template>
  <div class="container">
    <h1>电影详情页面:{{$route.params.id}}</h1>
   
  </div>
</template>
<script>
import axios from 'axios'
export default {
  created() {
    this.getData();
  },
  data(){
    return{
      detailData:{}
    }
  },
  methods:{
    getData(){
      axios.get(API_PROXY+'https://api.douban.com/v2/movie/subject/'+this.$route.params.id)
      .then((res)=>{
        //  console.log(res);
         
        })
        .catch(()=>{
         
        })
    }
  }
}
</script>