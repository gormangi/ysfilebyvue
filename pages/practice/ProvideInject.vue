<template>
<div>
  <ProvideInjectChild />
</div>
</template>

<script>
import ProvideInjectChild from "@/pages/practice/ProvideInjectChild";
export default {
  name: "ProvideInject",
  components: {
    ProvideInjectChild
  },
  provide() {
    return {
      itemLength: this.items.length,
      items: this.items,
    }
  },
  data() {
    return {
      items: ['A', 'B'],
    }
  }
}
</script>

<style scoped>

</style>
