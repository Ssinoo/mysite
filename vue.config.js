module.exports ={
  devServer:{
    before(app,server){
      app.get('/api/cartList',(req,res)=>{
        res.json({
          result:[
            {id:1,title:'Vue开发',price:188,active:true,count:1},
            {id:2,title:'React开发',price:299,active:true,count:1}
          ]
        })
      })
    }
  }
}