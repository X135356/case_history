import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vcc from 'vcc-js'
import Data from './libs/Data'

Vue.config.productionTip = false;
Vue.prototype.Vcc = Vcc;
Vue.prototype.Data = Data;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
