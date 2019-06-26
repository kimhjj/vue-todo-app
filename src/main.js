import Vue from 'vue'
import App from './App.vue'
// export default가 아니니까, { }를 붙인다.
import { store } from './store/store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,  // store는 루트의 모든 하위 컴포넌트에 주입된다. (App.vue에서 쓸거니까 injection)
}).$mount('#app')
