<template>
  <div>
    User：{{id}} -- {{title}}
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$route.params.id);

  },
  props:['id','title']
}
</script>

<style>

</style>