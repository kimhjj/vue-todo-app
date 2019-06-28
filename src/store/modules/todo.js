import axios from 'axios';

const base_url = 'http://localhost:4500/api/todos';

const state = {
  todoItems: []
}

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
}

const actions = {
  loadTodoItems(context) {
    // get: 조회
    // 템플릿 리터럴: 백틱을 사용해서 스트링을 감싸고 ${ }을 사용해서 변수를 담는다.
    axios.get(`${base_url}`)
      .then(res => res.data)
      .then(items => {
        context.commit('setTodoItems', items)
      })
  },
  removeTodoItem(context, payload) { // state라고 해도 되지만, 여기서는 context
    // delete: 삭제
    // 템플릿 리터럴: 백틱을 사용해서 스트링을 감싸고 ${ }을 사용해서 변수를 담는다.
    // 삭제할 아이디를 준다.
    axios.delete(`${base_url}/${payload.id}`)
      .then(res => res.data)
      .then(items => {
        context.commit('setTodoItems', items)
      })
  },
  addTodoItem(context, payload) { // state라고 해도 되지만, 여기서는 context
    // post: 등록
    // 템플릿 리터럴: 백틱을 사용해서 스트링을 감싸고 ${ }을 사용해서 변수를 담는다.
    axios.post(`${base_url}`, payload)
      .then(res => res.data)
      .then(items => {
        context.commit('setTodoItems', items)
      })
  },
  toggleComplete(context, payload) {
    // put: 수정
    // 템플릿 리터럴: 백틱을 사용해서 스트링을 감싸고 ${ }을 사용해서 변수를 담는다.
    axios.put(`${base_url}/${payload.id}`, payload)
      .then(res => res.data)
      .then(items => {
        context.commit('setTodoItems', items)
      })
  },
  clearTodoItems(context) {
    // delete: 삭제
    // 템플릿 리터럴: 백틱을 사용해서 스트링을 감싸고 ${ }을 사용해서 변수를 담는다.
    // 전체를 삭제한다.
    axios.delete(`${base_url}`)
      .then(res => res.data)
      .then(items => {
        context.commit('setTodoItems', items)
      })
  }
}

const mutations = {
  setTodoItems(state, items) {
    // state 속성의 todoItems에 새로운 item을 set 한다.
    state.todoItems = items;
  }
}
  
export default {
  state,
  getters,
  actions,
  mutations
}