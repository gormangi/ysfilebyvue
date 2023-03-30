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
    <button type="button" @click="pageMove()">페이지 이동</button>
  </div>
</template>

<script>
import ApiMixin from '@/mixins/api.js';

export default {
  name: "MixinTest",
  mixins: [ApiMixin],
  data() {
    return {
      productList: []
    }
  },
  mounted() {
    console.log('컴포넌트 mounted!');
  },
  methods: {
    async getProductList() {
      this.productList = await this.$callApi('/api/testMockup', {});
      console.log(this.productList);
    },
    pageMove() {
      this.$router.push({path: 'Save'});
    }
  }
}
</script>

<style scoped>

</style>
