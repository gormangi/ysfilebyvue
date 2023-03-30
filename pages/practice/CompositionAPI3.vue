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
import {reactive, computed, toRefs} from 'vue';

function plusCalculator() {
  const state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => state.num1 + state.num2),
  });

  return toRefs(state);
}

export default {
  name: "CompositionAPI3",
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
