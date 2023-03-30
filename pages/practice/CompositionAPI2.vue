<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input v-model.number="state.num1" type="text"/>
      <span> + </span>
      <input v-model.number="state.num2" type="text"/>
      <span> = </span>
      <span>{{state.result}}</span>
    </div>
  </div>
</template>

<script>
import {reactive, computed} from 'vue';
export default {
  name: "CompositionAPI2",
  setup() {
    const state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => state.num1 + state.num2),
    });

    return {
      state
    }
  },
}
</script>

<style scoped>

</style>
