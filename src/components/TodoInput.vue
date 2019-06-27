<template>
  <div class="inputBox shadow">
    <!-- 아래 input에 값을 입력하면, newTodoItem 변수에 값이 들어간다. -->
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <!-- <button @click="addTodo">추가</button> -->
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <Modal v-if="showModal" @close="showModal=false">
      <!-- 오버라이딩. slot ==> Modal.vue에 선언된 태그 -->
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fas fa-times" @click="showModal=false"></i>
      </h3>
      <!-- 오버라이딩. slot ==> Modal.vue에 선언된 태그 -->
      <div slot="body">
        아무것도 입력하지 않으셨습니다.
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";
export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  components: {
    Modal
  },
  methods: {
    addTodo() {
      if(this.newTodoItem !== '') {
        let obj = {completed: false, item: this.newTodoItem};
        this.$store.dispatch('addTodoItem', obj);
        this.clearInput();
      } else {
        this.showModal = !this.showModals;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
}
</script>

<style scoped>
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
.closeModalBtn {
color: #42b983;
}
</style>
