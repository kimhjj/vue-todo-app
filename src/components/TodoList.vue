<!-- template 태그 아래에 항상 root에 해당하는태그가 있어야 한다. eslint가 체크함 -->
<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" :key="index" class="shadow">
        <!-- 체크박스 (동적 class, click event) -->
        <i class="fas fa-check checkBtn" :class="{textCompleted: todoItem.completed}" 
          @click="toggleComplete(todoItem, index)"></i>
        <!-- data -->
        <span>{{todoItem}}</span>
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
    if(localStorage.length > 0){
      for(var i=0; i<localStorage.length; i++) {
        // local storage data를 읽음
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          var itemJson = localStorage.getItem(localStorage.key(i));
          this.todoItems.push(JSON.stringify(itemJson));
        }
      }
    }
  },
  methods: {
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
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
