<template>
  <div>
    i am page 
  </div>
</template>

<script>
export default {
  created () {
    // console.log(this.$route);
    //结构赋值 拿到数据
    const {id,title} = this.$route.query
    console.log(id,title);
  },
}
</script>

<style>

</style>