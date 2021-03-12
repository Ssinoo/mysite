<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="cart"
      tooltip-effect="dark"
      style="width: auto"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="title" label="名称" width="120"> </el-table-column>
      <el-table-column prop="price" label="价格" width="120"> </el-table-column>
      <el-table-column label="数量" width="200">
        <template slot-scope="scope">
          <el-input-number
            v-model="scope.row.count"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
        </template>
      </el-table-column>

      <el-table-column label="总价" width="200">
        <template slot-scope="scope">
          {{scope.row.count*scope.row.price}}
        </template>
      </el-table-column>
      
    </el-table>
  </div>
</template>

<script>
export default {
  name: "cart",
  props: ["cart", "title"],
  computed: {
    count() {
      return this.cart.length;
    },
    activeCount() {
      return this.cart.filter((v) => v.active).length;
    },
    total() {
      return this.cart.reduce((sum, c) => {
        if (c.active) {
          sum += c.price * c.count;
        }
        return sum;
      }, 0);
    },
  },
  methods: {
    handleSelectionChange: function () {},
    handleChange(value) {
      console.log(value);
    },
    add: function (i) {
      this.cart[i].count++;
    },
    remove(i) {
      this.cart.splice(i, 1);
    },
    sub: function (i) {
      this.cart[i].count > 1 ? (this.cart[i].count -= 1) : this.remove(i);
    },
  },
};
</script>

<style scoped>
</style>>

