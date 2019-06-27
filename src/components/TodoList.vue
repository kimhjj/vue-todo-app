<!-- template 태그 아래에 항상 root에 해당하는태그가 있어야 한다. eslint가 체크함 -->
<template>
  <div>
    <!-- 이쁘게 하려고 추가함. name은 list로 해야한다. 스타일과 연결됨 -->
    <!-- transition-group에서 tag에 값을 줌. (예)tag="p",ㄴtag="ul" -->
    <transition-group name="list" tag="ul">
    <!-- <ul> -->
      <li
        v-for="(todoItem, index) in storedTodoItems"
        :key="index"
        class="shadow"
        @click="toggleComplete(todoItem)">
        <!-- 체크박스 (동적 class, click event) -->
        <i class="fas fa-check checkBtn" :class="{checkBtnCompleted: todoItem.completed}"></i>
        <!-- data -->
        <span :class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <!-- 삭제버튼 -->
        <span class="removeBtn" @click="removeItem(todoItem)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    <!-- </ul> -->
    </transition-group>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  mounted() {
    this.$store.dispatch('loadTodoItems')
  },
  // store.js에서 가져오므로 삭제
  //props: ["propsData"],
  computed: {
    // 헬퍼 추가
    // 잘 변하지 않지만, 잦은 호출이 있으면 computed 영역에 함수 작성함
    ...mapGetters(['storedTodoItems'])
    /**
    getTodoItems() {
      return this.$store.getters.getTodoItems;
    }
    */
  },
  methods: {
    ...mapActions({
      removeItem: 'removeTodoItem'
    }),
    // ...mapMutations({
    //   //removeItem: 'removeTodo', 
    //   toggleComplete: 'toggleComplete'
    // })
    //...mapMutations(['removeTodo, toggleComplete']),
    /**
    removeTodo(todoItem, index) {
      // 루트 컴포넌트가 아닌 스토어랑 통신하므로 아래 소스 주석
      //this.$emit("removeItemEvent", todoItem, index);
      // {todoItem, index} === {todoItem:todoItem, index:index} 동일
      this.$store.commit('removeTodo', {todoItem, index});
    },
    toggleComplete(todoItem, index) {
      //this.$emit("toggleItemEvent", todoItem, index);
      this.$store.commit('toggleComplete', {todoItem, index})
    }
    */
    toggleComplete(todoItem) {
      todoItem.completed = !todoItem.completed;
      this.$store.dispatch('toggleComplete', todoItem);
    }
  }
};
</script>

<style scope>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
/*** 이쁘게 START ***/
/* ★ transitions ==> add, remove, sheffle, autoComplate 등의 이벤트를 간단한 처리로 동작하도록 함
 * vue sample: https://vuejs.org/v2/guide/transitions.html#List-Transitions
 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
/*** 이쁘게 END***/
</style>
