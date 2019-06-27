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
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    }
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



/*************** day3_20190626
vuex 설치
  npm install --save vuex
  
MVC 패턴의 문제점
	페이스북에서 이야기 하는 MVC의 가장 큰 단점은 양방향 데이터 흐름이었습니다.
	Model이 업데이트 되어 View가 따라서 업데이트 되고, 
	업데이트 된 View가 다시 다른 Model을 업데이트 한다면,
	또 다른 View가 업데이트 될 수 있습니다. 
	복잡하지 않은 어플리케이션에서는 양방향 데이터 흐름이 묷제가 크지 않을 수 있습니다.
	하지만 어플리케이션이 복잡해 진다면
	이런 양방향 데이터 흐름은 새로운 기능이 추가될 때 시스템의 복잡도를 증가 시키고
	예측 불가능한 코드를 만들게 됩니다.
	
Vuex로 해결할 수 있는 문제
	• MVC 패턴에서 발생하는 구조적 오류
	• 컴포넌트 각 데이터 전달 명시
  • 여러 개의 컴포넌트에서 같은 데이터를 업데이트 할 때 동기화 문제
  
Vuex 개념
	• State : 컴포넌트 간에 공유하는 데이터 data()
	• View : 데이터를 표시하는 화면 template
	• Action : 비동기 로직, 상태변수 값을 변경하는 methods
	• Mutation : 동기 로직, 상태변수 값을 변경하는 methods
	
Vuex 구성요소
	1. state : 여러 컴포넌트에서 공유되는 데이터 data -- 20190626
	2. getters : state 값에 접근하는 속성. computed()처럼 미리 연산된 값에 접근 -- 20190626
	3. mutations : 동기 로직, state 값을 변경할 수 있는 유일한 방법(메서드), commit으로 동작 -- 20190626
					첫번째 인자는 state.
					mutations 인자를 객체로 받는 경우, payload 라는 변수로 쓴다.
	4. actions : 비동기 로직, 비동기 처리 로직을 선언하는 메서드 async method (비동기 메서드) -- 20190627
	
 */

 /******
  * vue UI 템플릿 (오픈소스)
  * https://vuetifyjs.com/ko/
  * 
  * vue Native 모바일 플랫폼 (오픈소스)
  * https://vue-native.io/
  */