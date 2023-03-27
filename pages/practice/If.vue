<template>
  <div>
    <h1 v-if="bRender">bRender 값이 true이면, h1 블록이 화면에 보여지게 됩니다.</h1>
    <h1 v-else>bRender 값이 false이면, h1 블록이 화면에 보여지게 됩니다.</h1>

    <h1 v-if="type==='A'">A</h1>
    <h1 v-else-if="type==='B'">B</h1>
    <h1 v-else-if="type==='C'">C</h1>
    <h1 v-else>Other</h1>

    <h1 v-show="bRender">A</h1>
  </div>
</template>

<script>
export default {
  name: "If",
  data() {
    return {
      bRender: true,
      type:'D'
    }
  }
}
</script>

<style scoped>

</style>
