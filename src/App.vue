<template>
  <div>
   <!-- <my-cart :cart='cartList' :title="title"></my-cart> -->
   <h3><router-link :to="{name:'User',params:{id:1}}">user1</router-link></h3>
   <h3><router-link :to="{name:'User',params:{id:2}}">user2</router-link></h3>
   <h3><router-link :to="{name:'Main'}">main</router-link></h3>
   <h3><router-link :to="{name:'Page',query:{id:1,title:'foo'}}">page</router-link></h3>
   <router-view></router-view>
   <router-view name='SideBar'></router-view>
  </div>
</template>

<script>
// import MyCart from './components/Cart.vue';
export default {
  name:'app',
  data(){
    return{
      cartList:[],
      title:'购物车'
    };
  },
  created(){
    this.$http.get('/api/cartList').then(res=>{
    // console.log(res.data.result);
    this.cartList=res.data.result
    })
  },
  components:{
    
  }
}
</script>

<style>

</style>