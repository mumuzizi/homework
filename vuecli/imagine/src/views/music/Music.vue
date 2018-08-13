<template>
  <div>
    <div class="container">
      <ul>
        <li @click="$router.push()"></li>
      </ul>
    </div>
  </div>
</template>
<script>


export default {
  created() {
    this.$emit('routerChange','music')
  },
}
</script>