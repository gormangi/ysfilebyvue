<template>
<div>
  <page-title :title="title"/>
  <child-component :likes="likes" :is-ok="isOk" :comment-ids="commentIds" :author="author"/>
  <child-component-func ref="child_component"/>
  <button type="button" @click="callChildFunc">부모에 있는 클릭</button>
  <child-component-val ref="child_component_val"/>
  <button type="button" @click="callChildChangeMsg">자식컴포넌트의 메시지 변경</button>
  <uppend-component @send-message="sendMessage"/>
  <h1>{{parentMsg}}</h1>
  <data-sync-component ref="data_sync_component"/>
  <button type="button" @click="showData">부모버튼</button>
</div>
</template>

<script>
import PageTitle from "@/pages/practice/PageTitle";
import ChildComponent from "@/pages/practice/ChildComponent";
import ChildComponentFunc from "@/pages/practice/ChildComponentFunc";
import ChildComponentVal from "@/pages/practice/ChildComponentVal";
import UppendComponent from "@/pages/practice/UppendComponent";
import DataSyncComponent from "@/pages/practice/DataSyncComponent";

export default {
  name: "ComponentPract",
  components: {
    'page-title':PageTitle,
    'child-component': ChildComponent,
    'child-component-func':ChildComponentFunc,
    'child-component-val':ChildComponentVal,
    'uppend-component':UppendComponent,
    'data-sync-component':DataSyncComponent
  },
  data() {
    return {
      title : '부모컴포넌트에서 전송한 페이지 타이틀',
      likes: 23,
      isOk: true,
      commentIds: [1,5,2,3],
      author: {name:'홍길동',company:'어디어디'},
      parentMsg: '',
    }
  },
  computed: {
    msg() {
      return this.$refs.data_sync_component.msg;
    }
  },
  methods: {
    callChildFunc() {
      // this.$refs.child_component.$refs.child_btn.click(); // 자식컴포넌트의 ref중 child_btn 를 찾아 클릭
      this.$refs.child_component.childFunc(); // 자식컴포넌트의 함수를 바로 실행
    },
    callChildChangeMsg() {
      this.$refs.child_component_val.msg = '부모컴포넌트에서 변경한 메시지';  // 자식컴포넌트의 변수값 수정
    },
    sendMessage(data) {
      // alert(data);
      this.parentMsg = data;
    },
    showData() {
      alert(this.msg);
    }
  }
}
</script>

<style scoped>

</style>
