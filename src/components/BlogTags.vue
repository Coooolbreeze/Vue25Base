<template>
  <div id="tags">
    <ul>
      <li
        v-for="tag in tags"
        :key="tag"
        :class="{active : currentTag === tag}"
        @click="switchTag(tag)"
      >
        {{tag}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    },
    currentTag: {
      type: String,
      required: true
    }
  },
  methods: {
    switchTag (tag) {
      this.currentTag !== tag && this.$emit('change', tag)
    }
  }
}
</script>


<style lang="stylus" scoped>
#tags {
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.5em 0;

    li {
      position: relative;
      display: flex;
      align-items: center;
      height: 26px;
      margin: 5px 5px 1px 0;
      padding: 0 8px 0 18px;
      border-radius: 0 4px 4px 0;
      font-size: 0.8rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      box-sizing: border-box;
      background: #eeeeee;
      cursor: pointer;
      user-select: none;

      &.active {
        background: #2196f3;
        color: #ffffff;
        cursor: not-allowed;
      }

      &:before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border-width: 13px 13px 13px 0;
        border-color: #fff transparent;
        border-style: solid;
      }

      &:after {
        position: absolute;
        content: '';
        width: 5px;
        height: 5px;
        top: 11px;
        left: 8px;
        border-radius: 100%;
        background: #fff;
      }
    }
  }
}

@media (max-width: 720px) {
  #tags {
    ul {
      li {
        height: 22px;
        margin: 3px 3px 1px 0;
        padding: 0 6px 0 16px;
        font-size: .1rem;

        &:before {
          border-width: 11px 11px 11px 0;
        }

        &:after {
          width: 4px;
          height: 4px;
          top: 9px;
          left: 8px;
        }
      }
    }
  }
}
</style>

