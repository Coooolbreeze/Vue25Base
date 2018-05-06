<template>
  <div id="paginate">
    <ul>
      <li
        :class="{disabled : currentPage === 1}"
        @click="prevPage"
      >&lsaquo;</li>
      <li
        :class="{active : currentPage === 1}"
        @click="onPageTap(1)"
      >1</li>
      <li class="omit" v-if="pageCount > 9 && currentPage > 5">...</li>
      <li
        v-for="page in renderPages"
        :key="page"
        :class="{active : currentPage === page}"
        @click="onPageTap(page)"
      >{{page}}</li>
      <li class="omit" v-if="pageCount > 9 && currentPage <= pageCount - 5">...</li>
      <li
        v-if="pageCount !== 1"
        :class="{active : currentPage === pageCount}"
        @click="onPageTap(pageCount)"
      >{{pageCount}}</li>
      <li
        :class="{disabled : currentPage === pageCount}"
        @click="nextPage"
      >&rsaquo;</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Paginate',
  props: {
    pageCount: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      pages: []
    }
  },
  computed: {
    renderPages () {
      let pages = []
      if (this.pageCount <= 9) {
        for (let page = 2; page < this.pageCount; page++) pages.push(page)
      } else {
        if (this.currentPage <= 5) {
          pages.push(2, 3, 4, 5, 6, 7)
        } else if (this.currentPage + 5 > this.pageCount) {
          pages.push(
            this.pageCount - 6,
            this.pageCount - 5,
            this.pageCount - 4,
            this.pageCount - 3,
            this.pageCount - 2,
            this.pageCount - 1
          )
        } else {
          pages.push(
            this.currentPage - 2,
            this.currentPage - 1,
            this.currentPage,
            this.currentPage + 1,
            this.currentPage + 2
          )
        }
      }
      return pages
    }
  },
  methods: {
    onPageTap (page) {
      page !== this.currentPage && this.$emit('change', page)
    },
    prevPage () {
      this.currentPage !== 1 && this.$emit('prev')
    },
    nextPage () {
      this.currentPage !== this.pageCount && this.$emit('next')
    }
  }
}
</script>

<style lang="stylus" scoped>
#paginate {
  display: flex;
  justify-content: center;
  padding: .5em 0 1.5em 0;
}

ul {
  display: flex;
  user-select: none;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e2e2e2;
    width: 2em;
    height: 2em;
    cursor: pointer;
    transition: all 0.3s;

    &:not(.active):not(.disabled):not(.omit):hover {
      position: relative;
      bottom: 1px;
      box-shadow: 1px 1px 1px 1px #e2e2e2;
    }

    &.active {
      background: #2196f3;
      color: #ffffff;
      border: 1px solid #2196f3;
      cursor: not-allowed;
    }

    &.disabled, &.omit {
      cursor: not-allowed;
    }
  }
}

@media (max-width: 460px) {
  ul>li {
    font-size: .9rem;
  }
}
</style>
