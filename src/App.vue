<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- message-value 속성에 title 값을 담아서 자식에게 전달한다. -->
    <HelloWorld v-bind:message-value="title" v-on:show-log="printText"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      title: "Passed from Parent Component!."
    }
  },
  methods: {
    printText() {
      alert('received an event!');
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
