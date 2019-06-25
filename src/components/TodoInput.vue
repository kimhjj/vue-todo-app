<template>
  <div>
    <!-- 아래 input에 값을 입력하면, newTodoItem 변수에 값이 들어간다. -->
    <input type="text" v-model="newTodoItem">
    <button>추가</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ''
    }
  },
}
</script>

<style>

</style>
