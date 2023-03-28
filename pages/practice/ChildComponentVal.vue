<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "ChildComponentVal",
  data() {
    return {
      msg: '자식에 있던 메시지',
    }
  }
}
</script>

<style scoped>

</style>
