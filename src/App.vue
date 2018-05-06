<template>
  <div id="app">
    <div id="cover"></div>
    <the-menu />
    <the-header />
    <div class="bg">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <the-footer />
  </div>
</template>

<script>
import TheMenu from './components/TheMenu.vue'
import TheHeader from './components/TheHeader.vue'
import TheLogin from './components/TheLogin.vue'
import TheBlog from './components/TheBlog.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  metaInfo: {
    title: "Cooolbreeze's Blog"
  },
  components: {
    TheMenu,
    TheHeader,
    TheLogin,
    TheBlog,
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
  background-color: rgba(255, 255, 0, 0.1);
  opacity: 0.1;
  z-index: -1;
}

.bg {
  background: linear-gradient(to bottom, #fffef4 0%,#ffffff 100%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
