<template>
  <div>
    <h1>
      {{title}}
      <input v-model="title" type="text"/>
    </h1>
  </div>
</template>
<script>
export default {
  name: 'Index',
  components: {},
  setup() {},
  data() {
    return {
      title: 'Hello world',
    }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {

  }
}
</script>
<style scoped>

</style>
