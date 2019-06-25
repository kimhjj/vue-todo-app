<template>
  <div class="inputBox shadow">
    <!-- 아래 input에 값을 입력하면, newTodoItem 변수에 값이 들어간다. -->
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <!-- <button @click="addTodo">추가</button> -->
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo() {
      // dom이 아니라, 변수의 값이 있는지 확인 (양방향, model)
      if(this.newTodoItem !== '') {
        // local storage에 data 추가
        // 로직) addTodo 추가 버튼을 누르면 newTodoItem에 입력된 값을 local storage에 추가
        // 확인) 개발자 도구의 application 탭에서 local storage 확인 가능
        // 설명) setItem ==> key, value
        var obj = {completed: false, item: this.newTodoItem};
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
}
</script>

<style scope>
input:focus {
outline: none;
}
.inputBox {
background: white;
height: 50px;
line-height: 50px;
border-radius: 5px;
}
.inputBox input {
border-style: none;
font-size: 0.9rem;
}
.addContainer {
float: right;
background: linear-gradient(to right, #6478FB, #8763FB);
display: block;
width: 3rem;
border-radius: 0 5px 5px 0;
}
.addBtn {
color: white;
vertical-align: middle;
}
</style>
