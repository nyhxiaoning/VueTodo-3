import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'EN', // set locale
  messages: {
    EN: require('./EN'),
    CN: require('./zh_CN')
  }
});

export default i18n;
