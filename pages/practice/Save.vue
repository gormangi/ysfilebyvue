<template>
<div>
  <input v-model="userInfo.name" type="text"/>
  <input v-model.number="userInfo.age" type="text"/>
  <input v-model="userInfo.job" type="text"/>
  <button type="button" @click="saveUserInfo">저장</button>
</div>
</template>

<script>
export default {
  name: "Save",
  data() {
    return {
      userInfo: {
        name: '',
        age: 0,
        job: ''
      }
    }
  },
  methods: {
    saveUserInfo() {
      if (this.userInfo.name === '') {
        // alert('사용자이름을 입력하세요');
        this.$swal('사용자이름을 입력하세요');
        return false;
      }
      if (this.userInfo.age === 0 || this.userInfo.age === '') {
        // alert('나이를 입력하세요');
        this.$swal('나이를 입력하세요');
        return false;
      }

      const result = this.saveData(this.userInfo);
      if (result === 'S') {
        // alert('사용자 정보가 생성되었습니다.');
        this.$swal('사용자 정보가 생성되었습니다.');
      }
    },
    saveData(params) {
      // eslint-disable-next-line no-console
      console.log(params);
      const result = 'S';
      return result;
    }
  }
}
</script>

<style scoped>

</style>
