import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('exitCheck', function (user) {
  if (user.isGoingToExit === false) {
    return "idi kupi narukvicu";
  } else {
    return "to brate moj";
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
