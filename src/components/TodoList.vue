<!-- template 태그 아래에 항상 root에 해당하는태그가 있어야 한다. eslint가 체크함 -->
<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsData" :key="index" class="shadow">
        <!-- 체크박스 (동적 class, click event) -->
        <i class="fas fa-check checkBtn" :class="{textCompleted: todoItem.completed}" 
          @click="toggleComplete(todoItem, index)"></i>
        <!-- data -->
        <span>{{todoItem.item}}</span>
        <!-- 삭제버튼 -->
        <span class="removeBtn" @click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsData'],
  methods: {
    removeTodo(todoItem, index) {
      this.$emit('removeItemEvent', todoItem, index);
    },
    toggleComplete: function(todoItem, index) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
}
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
</style>
