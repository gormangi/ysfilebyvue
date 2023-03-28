<template>
<div>
  <page-title :title="title"/>
  <child-component :likes="likes" :is-ok="isOk" :comment-ids="commentIds" :author="author"/>
</div>
</template>

<script>
import PageTitle from "@/pages/practice/PageTitle";
import ChildComponent from "@/pages/practice/ChildComponent";
export default {
  name: "ComponentPract",
  components: {
    'page-title':PageTitle,
    'child-component': ChildComponent,
  },
  data() {
    return {
      title : '부모컴포넌트에서 전송한 페이지 타이틀',
      likes: 23,
      isOk: true,
      commentIds: [1,5,2,3],
      author: {name:'홍길동',company:'어디어디'},
    }
  },
}
</script>

<style scoped>

</style>
