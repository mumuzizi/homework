<template>
  <div>
    <div class="container">
      <ul>
        <li v-for="(items,index) in dataList" :key="index+'dl'">
          <div>
            <img :src="items.images.small">
          </div>
          <div>
            <h3>{{items.title}}</h3>
            <span v-for="(items,index) in items.casts" :key="index+'mc'"></span>
            <p>{{items.collect_count}}人已观看</p>
            <p>年份{{items.years}}</p>
            <span v-for="(items,index) in items.genres" :key="index+'mg'">{{items}}/</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="loading" v-show="!isFinish">
      <div class="load-content">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created(){
    this.getData()
  },
   mounted(){
     window.onscroll = ()=>{
      //  console.log(document.documentElement.clientHeight);
      //  console.log(document.documentElement.scrollHeight);
      //  console.log( document.documentElement.scrollTop);
       let cHeight = document.documentElement.clientHeight;
       let sHeight = document.documentElement.scrollHeight;
       let sTop = document.documentElement.scrollTop;
       if(sTop + cHeight == sHeight){
         if(this.isFinish){
            this.getData()
         }
       }
     }
   },
  data(){
    return{
      dataList:[],
      isFinish :true,
    }
  },
  methods:{
    getData(){
      this.isFinish=false;
      axios.get('https://api.myjson.com/bins/nsb9g')
      .then((response) => {
        console.log(response);
        this.dataList = this.dataList.concat(response.data.subjects);
        this.isFinish=true;
      })
      .catch((error)=> {
        console.log(error);
      })
    },
  }
}
</script>

<style scoped>
.loading{
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  }
  .load-content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 1rem;
    border-radius: 5%；
  }
ul{
  padding: 0 .2rem;
}
li{
  display: flex;
  border-bottom: 1px solid #999;
  padding: .5rem 0;
}
li div{
  width: 0;
}
li div:first-child{
  flex-grow: 1;
}
li div:last-child{
  flex-grow: 2;
  margin-left: .5rem;
}
</style>
