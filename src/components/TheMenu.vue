<template>
  <div id="menu" :class="showClass">
    <router-link to="login" class="logo">
      <img src="../assets/images/avatar.jpg" alt="logo">
      <div class="cover"></div>
    </router-link>
    <div class="nav">
      <div class="list">
        <ul>
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/blog">博客</router-link></li>
          <li><router-link to="/note">笔记</router-link></li>
          <li><router-link to="/talk">杂谈</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
        </ul>
      </div>
      <div class="search">
        <input type="text" name="" id="">
        <button>
          <svg class="icon icon-search" aria-hidden="true">
            <use xlink:href="#icon-search"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showClass: '',
      scroll: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.menu)
  },
  methods: {
    menu () {
      let scroll =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scroll > 150 && scroll > this.scroll) {
        this.showClass = 'slideOutUp'
        this.scroll = scroll
      }
      if (scroll < this.scroll) {
        this.showClass = 'slideInDown'
        this.scroll = scroll
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
height = 3em;
logo-size = 2em;

#menu {
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1em;
  width: 100%;
  height: height;
  background-color: #2196f3;
  opacity: 0.9;
  overflow: hidden;
  animation-duration: 0.5s;
}

.logo {
  position: relative;
  width: logo-size;
  height: logo-size;
  min-width: logo-size;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1em;
  cursor: pointer;
  transition: all 0.4s;

  .cover {
    position: absolute;
    width: 100%;
    height: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.8s;
  }

  &:hover {
    width: logo-size + 0.2em;
    height: logo-size + 0.2em;
    transform: rotate(-360deg);

    .cover {
      height: 40%;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
}

.nav {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.list {
  height: 100%;

  ul {
    display: flex;
    flex-direction: row;
    height: 100%;

    li {
      width: 2em;
      height: 100%;
      padding: 0 0.8em;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s;

      a {
        color: #e3e3e3;
        user-select: none;
      }

      &:hover {
        background-color: darken(#2196f3, 10);

        a {
          color: darken(#ffffff, 5);
        }
      }
    }
  }
}

.search {
  margin-left: 2em;
  display: flex;
  align-items: center;
}

@media (max-width: 720px) {
  #menu {
    height: 2.3em;
    padding: 0 0.3em;

    .logo {
      width: 1.6em;
      height: 1.6em;
      min-width: 1.6em;
    }

    .search {
      display: none;
    }

    .list>ul>li {
      padding: 0 0.3em;
    }

    .list>ul>li>a {
      font-size: 1rem;
    }
  }
}

@media (max-width: 375px) {
  #menu {
    height: 1.6em;

    .logo {
      width: 1.2em;
      height: 1.2em;
      min-width: 1.2em;
    }

    .list>ul>li {
      padding: 0 0.1em;
    }

    .list>ul>li>a {
      font-size: 0.7rem;
    }
  }
}
</style>
