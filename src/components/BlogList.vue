<template>
  <div id="list">
    <div class="card" @click="showArticle(1)">
      <h1>我的第一篇博客</h1>
      <p>博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容...</p>
      <i>2018-05-06 00:18:26 by Coooolbreeze</i>
    </div>
    <div class="card">
      <h1>我的第一篇博客</h1>
      <p>博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容...</p>
      <i>2018-05-06 00:18:26 by Coooolbreeze</i>
    </div>
    <div class="card">
      <h1>我的第一篇博客</h1>
      <p>博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容...</p>
      <i>2018-05-06 00:18:26 by Coooolbreeze</i>
    </div>
    <div class="card">
      <h1>我的第一篇博客</h1>
      <p>博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容博客的内容...</p>
      <i>2018-05-06 00:18:26 by Coooolbreeze</i>
    </div>

    <paginate
      :page-count="pageCount"
      :current-page="page"
      @change="changePage"
      @prev="prevPage"
      @next="nextPage"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageCount: 20,
      page: 1
    }
  },
  methods: {
    changePage (page) {
      this.page = page
    },
    prevPage () {
      this.page--
    },
    nextPage () {
      this.page++
    },
    showArticle (id) {
      this.$router.push('blog/' + id)
    }
  }
}
</script>

<style lang="stylus" scoped>
#list {
  .card {
    box-sizing border-box;
    margin-bottom: 0.6em;
    padding: 0.8em;
    background: #ffffff;
    box-shadow: 4px 3px 10px 1px #ececec;
    border: 1px solid #ececec;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      position: relative;
      bottom: 1px;
      right: 1px;
      box-shadow: 5px 4px 10px 4px #ececec;
    }

    h1 {
      margin: 0;
      text-align: center;
      font-weight: 400;
      font-size: 1.6rem;
      color: #555555;
    }

    p {
      line-height 1.5em;
      margin-top: 0.5em;
      text-indent: 2em;
      font-size: 1.1rem;
      color: #666666;
    }

    i {
      display: flex;
      justify-content: flex-end;
      font-size: 1rem;
      color: #999999;
    }
  }
}

@media (max-width: 720px) {
  #list {
    .card {
      h1 {
        font-size: 1.2rem;
      }

      p {
        font-size: 1rem;
      }

      i {
        font-size: .8rem;
      }
    }
  }
}
</style>
