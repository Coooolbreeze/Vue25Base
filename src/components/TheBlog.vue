<template>
  <div id="body">
    <div class="container">
      <blog-tags
        :tags="tags"
        :currentTag="tag"
        @change="switchTag"
      />
      <div class="content">
        <div class="main">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>
        <div class="tree">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogTags from './BlogTags.vue'

export default {
  components: {
    BlogTags
  },
  data () {
    return {
      tags: ['全部标签', '标签一', '标签二', '标签三', '标签四'],
      tag: '全部标签'
    }
  },
  methods: {
    switchTag (tag) {
      this.tag = tag
      this.$router.push('/blog')
    }
  }
}
</script>


<style lang="stylus" scoped>
#body {
  width: 100%;
  box-sizing: border-box;
}

.container {
  flex-direction column
}

.content {
  display: flex;
  justify-content space-between
}

.main {
  width: 73%;
}

.tree {
  width: 25%;
  height: 50vh;
  background: yellow;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 1200px) {
  .container {
    width: 90%;
  }
}

@media (max-width: 1000px) {
  .container {
    width: 95%;
  }

  .main {
    width: 100%;
  }

  .tree {
    display: none;
  }
}
</style>
