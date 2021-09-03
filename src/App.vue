<template>
  <div class="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style rel="stylesheet/stylus" lang="stylus">
  .app
    width 100%
    height 100%
    background-color #f5f5f5
</style>
