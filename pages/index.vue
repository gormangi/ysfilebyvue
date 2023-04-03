<template>
<div class="desk-background">
  <Desk/>
</div>
</template>

<script>
import Desk from "@/pages/desk/Desk";
export default {
  name: "Index",
  components: {Desk}
}
</script>

<style scoped>
.desk-background {
  width: 100vw;
  height: 100vh;
  background: black;
}
</style>
