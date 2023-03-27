<template>
<div>
  <button type="button" @click="getProductList">조회</button>
  <table>
    <thead>
      <tr>
        <th>제품명</th>
        <th>가격</th>
        <th>배송료</th>
        <th>카테고리</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, i) in productList" :key="i">
        <td>{{product.productName}}</td>
        <td>{{product.price}}</td>
        <td>{{product.deliveryPrice}}</td>
        <td>{{product.category}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: "ServerData",
  data() {
    return {
      productList: []
    }
  },
  methods: {
    async getProductList() {
      this.productList = await this.api('/api/testMockup', {});
      console.log(this.productList);
    },
    async api(url, data) {
      return await this.$axios.$post(url, data).catch(e => {console.log(e)});
    }
  }
}
</script>

<style scoped>

</style>
