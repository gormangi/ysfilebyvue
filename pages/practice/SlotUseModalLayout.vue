<template>
<modal-layout>
  <template #header>
    <h1>팝업 타이틀</h1>
  </template>
  <template #default>
    <p>팝업 컨텐츠 1</p>
    <p>팝업 컨텐츠 2</p>
  </template>
  <template #footer>
    <button type="button">닫기</button>
  </template>
</modal-layout>
</template>

<script>
import SlotModalLayout from "@/pages/practice/SlotModalLayout";

export default {
  name: "SlotUseModalLayout",
  components: {'modal-layout': SlotModalLayout},
}
</script>

<style scoped>

</style>
