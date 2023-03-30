<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input v-model.number="num1" type="text" @keyup="plusNumbers" />
      <span> + </span>
      <input v-model.number="num2" type="text" @keyup="plusNumbers" />
      <span> = </span>
      <span>{{result}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0
    }
  },
  methods: {
    plusNumbers() {
      this.result = this.num1 + this.num2;
    }
  }
}
</script>

<style scoped>

</style>
