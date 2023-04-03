<template>
<div>
  <TaskBar @task-click-el="taskClickEl"/>
</div>
</template>

<script>
import TaskBar from "@/components/TaskBar";
export default {
  name: "Desk",
  components: {TaskBar},
  methods: {
    taskClickEl(el) {
      alert(el);
    }
  }
}
</script>

<style scoped>

</style>
