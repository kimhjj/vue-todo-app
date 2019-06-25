<!-- template 태그 아래에 항상 root에 해당하는태그가 있어야 한다. eslint가 체크함 -->
<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" :key="index">
        {{todoItem}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoItems: []
    }
  },
  // vue life cycle 8개의 속성
  // 
  created() {
    if(localStorage.length > 0){
      for(var i=0; i<localStorage.length; i++) {
        // local storage data를 읽음
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
}
</script>

<style>

</style>
