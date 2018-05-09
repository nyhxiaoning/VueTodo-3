<template>
  <header class="main-header">
    <h1>{{ $t("lang.siteName") }}</h1>
    <ul>
      <li>
        <a href="javascript:;" @click="changeLang()">{{ $t("lang.currentLang") }}</a>
      </li>
      <li><a href="https://github.com/dunizb/VueTodo">{{ $t("lang.sourceCode") }}</a></li>
      <li><a href="https://www.dunizb.com">{{ $t("lang.blog") }}</a></li>
      <li><a href="https://store.dunizb.com">{{ $t("lang.store") }}</a></li>
      <li><a href="https://demo.dunizb.com">{{ $t("lang.demo") }}</a></li>
      <li><a href="https://blog.dunizb.com/about/">{{ $t("lang.about") }}</a></li>
    </ul>
  </header>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      changeLang() {
        this.$i18n.locale = this.$i18n.locale === 'CN' ? 'EN' : 'CN';
      }
    }
  }
</script>

<style lang="stylus" scoped>
.main-header {
  display:flex;
  justify-content: space-between
  text-align: center;
  background-color:rgba(0,0,0,.3)
  color:#fff
  margin-bottom 20px
  padding: 0 20px
  ul {
    padding: 0
    margin: 0
    display: flex
    justify-content: center
    align-items: center
  }
  li {
    list-style: none
    padding: 0 5px
    a {
      color: #fff
      text-decoration: none
      font-weight: 300
      font-size: 14px
      &:hover {
        text-shadow: 1px 1px 3px #fff
      }
    }
  }

  h1 {
    font-size: 24px
    margin: 0
    padding: 0
    text-shadow: 1px 1px 3px #fff
  }
}
</style>
