import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

let cookieLang = 'CN';
const vm = new Vue();
if(vm.$cookies.isKey('i18n_lang')) {
  cookieLang = vm.$cookies.get('i18n_lang')
}
const i18n = new VueI18n({
  locale: cookieLang, // set locale
  messages: {
    EN: require('./EN'),
    CN: require('./zh_CN')
  }
});

export default i18n;
