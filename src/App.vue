<template>
  <div id="app">
    <div id="cover"></div>
    <the-header />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheLogin from './components/TheLogin.vue'
import TheHome from './components/TheHome.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  metaInfo: {
    title: "Cooolbreeze's Blog"
  },
  components: {
    TheHeader,
    TheLogin,
    TheHome,
    TheFooter
  }
}
</script>

<style lang="stylus" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #999999;
  opacity: 0.8;
  z-index: -1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
