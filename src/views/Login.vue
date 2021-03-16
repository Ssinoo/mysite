<template>
  <div>
    <input type="text" v-model="user">
    <input type="password" v-model="pwd">
    <button @click="handleLogin">登入按钮</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: '',
        pwd:''
      }
    },
    methods: {
      handleLogin() {
        //获取账户，模拟从后端获取用户信息 
        setTimeout(()=>{
          let data = {
            user:this.user,
            pwd:this.pwd
          }
        localStorage.setItem('user',JSON.stringify(data))
          this.$router.push({
            name:'notes'
          })
        },1000)
        //然后保存到本地
      }
    },
  }
</script>

<style lang="sass" scoped>

</style>