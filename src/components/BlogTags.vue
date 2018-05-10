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
      height: 2.36em;
      margin: .5em .5em .1em 0;
      padding: 0 1.4em 0 2.2em;
      border-radius: 0 4px 4px 0;
      font-size: .8rem;
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
        border-width: 1.18em 1.4em 1.18em 0;
        border-color: #fff transparent;
        border-style: solid;
      }

      &:after {
        position: absolute;
        content: '';
        width: .4em;
        height: .4em;
        top: 1em;
        left: 1em;
        border-radius: 100%;
        background: #ffffff;
      }
    }
  }
}

@media (max-width: 720px) {
  #tags {
    ul {
      li {
        height: 2.16em;
        margin: .3em .3em .1em 0;
        padding: 0 1em 0 1.9em;
        font-size: .7rem;

        &:before {
          border-width: 1.08em 1.2em 1.08em 0;
        }

        &:after {
          width: .35em;
          height: .35em;
          top: .9em;
          left: 1em;
        }
      }
    }
  }
}
</style>

