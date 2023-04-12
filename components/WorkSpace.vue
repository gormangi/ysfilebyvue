<template>
  <div>
    <div v-show="showStart" class="start__popup">
      <div class="start__table">
        <div class="row">
          <span class="cell">열 1-1</span>
        </div>
        <div class="row">
          <span class="cell">열 1-2</span>
        </div>
      </div>
    </div>
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
  data() {
    return {
      showStart: false,
    }
  },
  watch: {
    openWindowObj() {
      if (this.openWindowObj.length > 0) {
        this.openWindowObj.forEach((i) => {
          if (i === 'start') {
            this.showStart ? this.showStart = false : this.showStart = true;
          }
        });
      } else {
        this.showStart = false;
      }
    }
  }
}
</script>

<style scoped>
.start__popup {
  background-color: white;
  position: initial;
  width: 200px;
  height: auto;
  z-index: 2;
}
.start__table {
  display: table;
  width:100%;
}
.row {
  display: table-row;
}
.cell {
  color: violet;
  height: 50px;
  line-height: 50px;
  text-align: center;
  display: table-cell;
  border-bottom: 1px solid indigo;
}
</style>
