<template>
  <div>
   <my-cart :cart='cartList' :title="title"></my-cart>
   <el-button type="success">成功按钮</el-button>
  </div>
</template>

<script>
import MyCart from './components/Cart.vue';
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
    console.log(res.data.result);
    this.cartList=res.data.result
    })
  },
  components:{
    MyCart
  }
}
</script>

<style>

</style>