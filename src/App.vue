<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList @toggleItemEvent="toggleComplete"></TodoList>
    <TodoFooter @clearItemEvent="clearTodo"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todoItems: []
    }
  },
  /** 
   * vue life cycle 4개의 단계
   * vue life cycle 8개의 속성
    ■ 인스턴스 생성
    ｜ 1) beforeCreated
    ｜ 2) created
    ｜ 3) beforeMount
    ｜ 4) mounted
    ■ 생성된 인스턴스를 화면에 부착
    ｜ 5) beforeUpdate
    ｜ 6) updated
    ■ 화면에 부착된 인스턴스 내용 갱신
    ｜ 7) beforeDestroy
    ｜ 8) destroyed
    ■ 인스턴스가 제거되는 소멸
  */ 
  created() {
    /** store.js로 이동함
    if(localStorage.length > 0){
      for(let i=0; i<localStorage.length; i++) {
        // local storage data를 읽음
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          let itemJson = localStorage.getItem(localStorage.key(i));
          this.todoItems.push(JSON.parse(itemJson));
        }
      }
    }
    */
  },
  methods: {
    /** store.js로 이동함. 루트 컴포넌트가 아닌 스토어랑 통신함
    addTodo(newTodoItem) {
      let obj = {completed: false, item: newTodoItem};
      localStorage.setItem(newTodoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    */
    clearTodo() {
      localStorage.clear();
      this.todoItems = [];
    },
    toggleComplete(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
  /**
  [리팩토링]
    • 변수선언 var 를 const 나 let 으로 변경한다.
    • 객체의 속성을 메서드로 사용할 때 function 예약어를 생략한다.
    • 객체의 속성 이름과 값의 이름이 같은 경우를 찾아 속성의 이름은 생략한다
   */
}
</script>

<!-- 하위 컴포넌트에도 적용되는 스타일 -->
<style>
body {
text-align: center;
background-color: #f6f6f6;
}
input {
border-style: groove;
width:200px;
}
button {
border-style: groove;
}
.shadow {
box-shadow: 5px 10px 10px
rgba(0, 0, 0, 0.03);
}
</style>
