<template>
  <div>
    <input v-model.number="x1" type="text">
    <input v-model.number="x2" type="text">
<!--    <button type="button" @click="plusNumber">계산</button>-->
    <input v-model.number="y" type="text">
  </div>
</template>

<script>
export default {
  name: "Watch",
  data() {
    return {
      x1: 0,
      x2: 0,
      y: 0
    }
  },
  watch: {
    x1() {
      this.y = this.x1 + this.x2;
    },
    x2() {
      this.y = this.x1 + this.x2;
    }
  },
  /* computed: {
    y() {
      return this.x1 + this.x2;
    }
  }, */
  methods: {
    plusNumber() {
      this.y = this.x1 + this.x2;
    }
  }
}
</script>

<style scoped>

</style>
