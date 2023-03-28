<template>
<div><button type="button" @click="sendFromChild">emit 등록된 자식 컴포넌트의 버튼</button></div>
</template>

<script>
export default {
  name: "UppendComponent",
  data() {
    return {
      msg: '자식 컴포넌트로 부터 보내는 메시지'
    }
  },
  methods: {
    sendFromChild() {
      this.$emit('send-message', this.msg);
    }
  }
}
</script>

<style scoped>

</style>
