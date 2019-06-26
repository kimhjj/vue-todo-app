<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      // 루트 컴포넌트가 아닌 스토어랑 통신하므로 아래 소스 주석
      //this.$emit('clearItemEvent');
      this.$store.commit('clearTodo');
    }
  }
}
</script>

<style scope>
.clearAllContainer {
width: 8.5rem;
height: 50px;
line-height: 50px;
background-color: white;
border-radius: 5px;
margin: 0 auto;
}
.clearAllBtn {
color: #e20303;
display: block;
}
</style>
