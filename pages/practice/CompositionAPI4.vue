<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input v-model.number="num1" type="text"/>
      <span> + </span>
      <input v-model.number="num2" type="text"/>
      <span> = </span>
      <span>{{result}}</span>
    </div>
  </div>
</template>

<script>
import {plusCalculator} from "static/js/common";

export default {
  name: "CompositionAPI4",
  setup() {
    const { num1, num2, result } = plusCalculator();

    return {
      num1,
      num2,
      result
    }
  },
}
</script>

<style scoped>

</style>
