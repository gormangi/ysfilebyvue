<template>
<div>
  <button type="button" @click="one(), two()">Add 1</button>
  <p>The count is : {{counter}}</p>

  <select v-model="city" @change="changeSelect">
    <option value="서울">서울</option>
    <option value="부산">부산</option>
    <option value="제주">제주</option>
  </select>

  <input v-model="textValue" type="text" @keyup.enter="showValue"/>
</div>
</template>

<script>
export default {
  name: "Event",
  data() {
    return {
      counter:0,
      city:'',
      textValue: ''
    }
  },
  methods: {
    one() {
      alert('One');
    },
    two() {
      alert('two');
    },
    changeSelect() {
      alert(this.city);
    },
    showValue() {
      alert(this.textValue);
    }
  }
}
</script>

<style scoped>

</style>
