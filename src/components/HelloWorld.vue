<template>
  <div class="hello">
    <h1>{{ messageValue }}</h1>
    <!-- v-on:click === @click -->
    <button @click="showLog">Show</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // }
  props: ['messageValue'],
  methods: {
    showLog: function() {
      // 이벤트 전달
      this.$emit('show-log');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
