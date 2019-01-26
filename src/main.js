import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bowser from '../node_modules/bowser/src/bowser'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false
Vue.use(VueAnalytics, {
    id: 'UA-132392783-1',
    router
})

new Vue({
    router,
    store,
    render: function (h) { return h(App) }
}).$mount('#app')

//mobile Saffari対策
function mobileSafariRequiem() {
    if (bowser.safari && bowser.ios) {
        //iPhoneかiPadならば
        document.getElementById('body').classList.add('mobileSafari')
    }
}
mobileSafariRequiem()