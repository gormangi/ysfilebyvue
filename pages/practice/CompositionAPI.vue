<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input v-model.number="state.num1" type="text" @keyup="plusNumbers" />
      <span> + </span>
      <input v-model.number="state.num2" type="text" @keyup="plusNumbers" />
      <span> = </span>
      <span>{{state.result}}</span>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue';
export default {
  name: "CompositionAPI",
  setup() {
    const state = reactive({
      num1: 0,
      num2: 0,
      result: 0
    });

    function plusNumbers() {
      state.result = state.num1 + state.num2;
    }

    return {
      state,
      plusNumbers
    }
  },
}
</script>

<style scoped>

</style>
