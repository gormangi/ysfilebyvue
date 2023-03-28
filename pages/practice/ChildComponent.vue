<template>
  <div>
    <div>likes: {{likes}}</div>
    <div>isOk: {{isOk}}</div>
    <div>author name: {{author.name}}</div>
    <div>author name: {{author.company}}</div>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  props: {
    likes: {
      type: Number,
      default: 0,
    },
    isOk: {
      type: Boolean,
      default: false,
    },
    commentIds: {
      type: Array,
    },
    author: {
      type: Object,
    }
  },
  mounted() {
    console.log(this.commentIds);
  }
}
</script>

<style scoped>

</style>
