<!-- template 태그 아래에 항상 root에 해당하는태그가 있어야 한다. eslint가 체크함 -->
<template>
  <div>
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in storedTodoItems"
        :key="index"
        class="shadow">
        <!-- 체크박스 (동적 class, click event) -->
        <i class="fas fa-check checkBtn" :class="{checkBtnCompleted: todoItem.completed}"
          @click="toggleComplete(todoItem)"></i>
        <!-- data -->
        <span :class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <!-- 삭제버튼 -->
        <span class="removeBtn" @click="removeItem(todoItem)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  mounted() {
    this.$store.dispatch('loadTodoItems')
  },
  computed: {
    // 헬퍼 추가
    // 잘 변하지 않지만, 잦은 호출이 있으면 computed 영역에 함수 작성함
    ...mapGetters(['storedTodoItems'])
  },
  methods: {
    ...mapActions({
      removeItem: 'removeTodoItem'
    }),
    toggleComplete(todoItem) {
      todoItem.completed = !todoItem.completed;
      this.$store.dispatch('toggleComplete', todoItem);
    }
  }
};
</script>

<style scoped>
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
