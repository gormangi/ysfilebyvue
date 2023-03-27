<template>
  <div>
    <input v-model="lastName" type="text"/>
    <input v-model="firstName" type="text"/>
    <h1>Hello, {{fullName}}</h1>
  </div>
</template>

<script>
export default {
  name: "Computed",
  data() {
    return {
      firstName: '성규',
      lastName: '양'
    }
  },
  computed: {
    fullName() {
      return this.lastName + this.firstName;
    }
  },
  methods: {
    getFullName() {
      return this.lastName + this.firstName;
    }
  }
}
</script>

<style scoped>

</style>
