<template>
<div>
  <input v-focus type="text"/>
</div>
</template>

<script>
export default {
  name: "CustomDirective",
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      }
    }
  }
}
</script>

<style scoped>

</style>
