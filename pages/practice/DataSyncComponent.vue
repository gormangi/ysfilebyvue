<template>
<div>
  <button type="button" @click="changeData">자식컴포넌트 데이터변경</button>
</div>
</template>

<script>
export default {
  name: "DataSyncComponent",
  data() {
    return {
      msg: '데이터 동기화 메시지'
    }
  },
  methods: {
    changeData() {
      this.msg = '자식 컴포넌트에서 데이터 변경이 일어났습니다.';
    }
  }
}
</script>

<style scoped>

</style>
