<template>
<div>
  <button ref="child_btn" type="button" @click="childFunc">자식에 있는 클릭</button>
</div>
</template>

<script>
export default {
  name: "ChildComponentFunc",
  methods: {
    childFunc() {
      alert('부모컴포넌트에서 직접 발생시킨 이벤트');
    }
  }
}
</script>

<style scoped>

</style>
