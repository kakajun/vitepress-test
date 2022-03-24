<template>
  <el-cascader
    ref="elcascader"
    v-model="arr"
    :options="options"
    :props="{ multiple: true, checkStrictly: true }"
    popper-class="my-cascader"
    clearable
    v-bind="$attrs"
    @visible-change="visibleChange"
    @expand-change="expandChange"
  ></el-cascader>
</template>

<script>
export default {
  name: 'Cascader',
  props: {
    options: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ['input'],
  computed: {
    arr: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    /**
     * @description: 获取最大层级
     * @param {*} columns
     * @return {*}
     */
    getLevels(columns, parentNode) {
      const levels = []
      const li = columns[0]
      li.level = parentNode ? parentNode.level + 1 : 0
      levels.push(li.level)
      const children = li.children
      if (children && children.length > 0) {
        const result = this.getLevels(children, li)
        levels.push(...result)
      }
      return levels
    },
    /**
     * @desc: 出现下拉时触发
     * @author: majun
     */
    visibleChange() {
      if (this.modelValue && this.modelValue.length > 0) {
        this.expandChange()
      }
    },
    /**
     * @desc: 展开时触发
     * @author: majun
     */
    expandChange() {
      const allLevels = this.getLevels(this.options)
      // 获取最大层级
      const maxLevel = Math.max(...allLevels)
      console.log(maxLevel, '3')
      this.$nextTick(() => {
        const dom = document.querySelector('.el-cascader-panel')
        const len = dom.children.length
        console.log([dom], len, maxLevel + 1, 'this.maxLevel')
        if (len === maxLevel + 1) {
          const selectLableDom = dom.children[len - 1].querySelectorAll(
            '.el-scrollbar__view'
          )
          console.log(selectLableDom, 'selectLableDom')
          for (let index = 0; index < selectLableDom.length; index++) {
            const el = selectLableDom[index]
            el.onclick = function () {
              this.previousElementSibling.click()
            }
          }
          const selectDom = dom.children[len - 1].querySelectorAll(
            '.el-checkbox__input'
          )
          for (let index = 0; index < selectDom.length; index++) {
            const element = selectDom[index]
            element.style.display = 'inline-block'
          }
        }
      })
    },
    findinnerText(text) {
      console.log(text)
    }
  }
}
</script>

<style lang="scss">
.my-cascader {
  .el-cascader-menu {
    .el-checkbox__input {
      display: none;
    }
    &:first-child {
      .el-checkbox__input {
        display: none;
      }
    }
  }
  .el-checkbox {
    position: absolute;
    right: 17px;
  }
  .popper__arrow {
    display: none;
  }
}
</style>
