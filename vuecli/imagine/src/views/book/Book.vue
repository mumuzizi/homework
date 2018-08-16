<template>
  <div>
    <div class="container">
      <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
        <swipe-item class="slide4"></swipe-item>
      </swipe>
    </div>
  </div>
</template>
<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
   components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  },
  created() {
    this.$emit('routerChange','book')
  },
}
</script>
<style scoped>
/* @import url('xx.css');
@import 'xxx.css';  引入css的方法*/ 
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background:url('../../../public/img/1.jpg') no-repeat center/cover ;
  color: #fff;
}

.slide2 {
 background:url('../../../public/img/2.jpg') no-repeat center/cover;
  color: #000;
}

.slide3 {
  background:url('../../../public/img/36.jpg') no-repeat center/cover;
  color: #fff;
}
.slide4 {
  background:url('../../../public/img/43.jpg') no-repeat center/cover;
  color: #fff;
}
</style>
