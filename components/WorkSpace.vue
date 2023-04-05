<template>
  <div>
    <div class="start__popup"></div>
  </div>
</template>

<script>
export default {
  name: "WorkSpace",
  props : {
    openWindowObj: {
      type: Array,
      default: () => {return []},
    }
  },
  watch: {
    openWindowObj() {
      if (this.openWindowObj.length > 0) {
        this.openWindowObj.forEach((i) => {
          if (i === 'start') {
            if (document.querySelector('.start__popup').style.display === 'block') {
              document.querySelector('.start__popup').style.display = 'none';
            } else {
              document.querySelector('.start__popup').style.display = 'block';
            }
          }
        });
      } else {
        document.querySelector('.start__popup').style.display = 'none';
      }
    }
  }
}
</script>

<style scoped>
.start__popup {
  border: 1px solid white;
  position: initial;
  width: 300px;
  height: 700px;
  z-index: 2;
  display: none;
}
</style>
