import Vue from 'vue';
import Vuex from 'vuex';

// 루트 컴포넌트에 stroe 옵션을 제공
// store는 루트의 모든 하위 컴포넌트에 주입된다.
Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];

    if(localStorage.length > 0){
      for(let i=0; i<localStorage.length; i++) {
        // local storage data를 읽음
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          let itemJson = localStorage.getItem(localStorage.key(i));
          arr.push(JSON.parse(itemJson));
        }
      }
    }
    return arr;
  }
}

export const store = new Vuex.Store({
  // state를 선언
  state: {
    todoItems: storage.fetch()
  },
  mutations: {
    addTodo(state, newTodoItem) {
      let obj = {completed: false, item: newTodoItem};
      localStorage.setItem(newTodoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeTodo(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload, 1);
    },
    toggleComplete(state, payload) {
      let index = payload.index;
      let todoItem = payload.todoItem;
      state.todoItems[index].completed = !state.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearTodo(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  }
});