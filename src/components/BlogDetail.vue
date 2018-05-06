<template>
  <div id="content">
    <div class="article">
      <h1>我的第一篇博客</h1>
      <div class="about">
        <span>作者：<i>Coooolbreeze</i></span>
        <span>发布日期：<i>2018-05-06 00:18:26</i></span>
      </div>
      <div class="detail">
        博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容
      </div>
      <div class="action">
        <router-link to="">上一篇 我的第一篇博客</router-link>
        <router-link to="">下一篇 我的第二篇博客</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$route.params)
  }
}
</script>

<style lang="stylus" scoped>
.article {
  border: 1px solid #fefefe;
  box-shadow: 0 0 2px 2px #efefef;
  margin-bottom: 2em;
  background: #ffffff;

  h1 {
    font-size: 1.8rem;
    font-weight: 500;
    text-align: center;
    color: #555555;
  }

  .about {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: #555555;
      font-size: 1rem

      i {
        color: #999999;
      }
    }

    span:first-child {
      margin-right: 1em
    }
  }

  .detail {
    margin: 2em;
    color: #666666;
  }

  .action {
    display: flex;
    justify-content: space-between;
    margin: 2em;

    a {
      font-size: 1rem;
      color: #2196f3;
      transition: all 0.3s;

      &:hover {
        color: darken(#2196f3, 15);
      }
    }
  }
}

@media (max-width: 720px) {
  .article {
    h1 {
      font-size: 1.2rem;
    }

    .about {
      span {
        font-size: .7rem;
      }
    }

    .detail {
      margin: 1em;
      font-size: .9rem;
    }

    .action {
      flex-direction: column;
      align-items: flex-end;
      margin 1em

      a {
        font-size: .8rem;
      }

      a:first-child {
        margin-bottom: .5em;
      }
    }
  }
}

@media (max-width: 375px) {
  .article .about {
    flex-direction: column;

    span:first-child  {
      margin-bottom .5em
    }
  }
}
</style>
