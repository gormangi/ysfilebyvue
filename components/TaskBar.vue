<template>
  <div class="taskbar">
    <img src="favicon2.ico" class="taskbar__start" alt="startImg" @click="taskClickEl('start')"/>
    <button type="button" class="taskbar__app">Item1</button>
    <button type="button" class="taskbar__app">Item2</button>
    <button type="button" class="taskbar__app">Item3</button>
  </div>
</template>

<script>
export default {
  name: "TaskBar",
  methods: {
    taskClickEl(el) {
      this.$emit('task-click-el', el);
    }
  }
}
</script>

<style scoped>
.taskbar {
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  padding: 0;
}
.taskbar__start {
  width: 50px;
  height: 100%;
  cursor: pointer;
  border: none;
  margin-right: 15px;
}
.taskbar__start:hover {
  background-color: chartreuse;
}
.taskbar__app {
  height: 100%;
  width: 180px;
  background-color: chartreuse;
  color: violet;
}
.taskbar__app:active {
  background-color: violet;
}
</style>
