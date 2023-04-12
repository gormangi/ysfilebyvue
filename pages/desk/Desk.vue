<template>
<div class="container">
  <TaskBar @task-click-el="taskClickEl"/>
  <WorkSpace :open-window-obj="openWindowObj"/>
</div>
</template>

<script>
import TaskBar from "@/components/TaskBar";
import WorkSpace from "@/components/WorkSpace";
export default {
  name: "Desk",
  components: {
    TaskBar,
    WorkSpace
  },
  data() {
    return {
      openWindowObj: [],
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      console.log(e);
    });
  },
  methods: {
    taskClickEl(el) {
      if (el === 'start') {
        this.openWindowObj.includes(el) ?
          this.openWindowObj.splice(this.openWindowObj.findIndex((i) => {return i === el}), 1) :
          this.openWindowObj.push(el);
      }
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  display:flex;
  flex-direction: column;
}
</style>
