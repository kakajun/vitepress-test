# Card

常用的卡片布局。

## 基础用法

基础的卡片用法。

:::demo 使用`size`、`style`属性来定义 Card 的样式。

```vue
<template>
  <div class="card-wrap">
   <Cascader :options="options" v-model="value"/>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
   data() {
      return {
         value: [
        [1, 2, 3],
        [1, 2, 4]
      ],
          options: [
        {
          value: 1,
          label: '东南',
          level: 1,
          children: [
            {
              value: 2,
              level: 2,
              label: '上海',
              children: [
                { value: 3, level: 3, label: '普陀' },
                { value: 4, level: 3, label: '黄埔' },
                { value: 5, level: 3, label: '徐汇' }
              ]
            },
            {
              value: 7,
              level: 2,
              label: '江苏',
              children: [
                { value: 8, label: '南京' },
                { value: 9, label: '苏州' },
                { value: 10, label: '无锡' }
              ]
            },
            {
              value: 12,
              label: '浙江',
              children: [
                { value: 13, label: '杭州' },
                { value: 14, label: '宁波' },
                { value: 15, label: '嘉兴' }
              ]
            }
          ]
        },
        {
          value: 17,
          level: 2,
          label: '西北',
          children: [
            {
              value: 18,
              label: '陕西',
              children: [
                { value: 19, label: '西安' },
                { value: 20, label: '延安' }
              ]
            },
            {
              value: 21,
              label: '新疆维吾尔族自治区',
              children: [
                { value: 22, label: '乌鲁木齐' },
                { value: 23, label: '克拉玛依' }
              ]
            }
          ]
        },
            {
          value: 27,
          level: 2,
          label: '西北',
        },
            {
          value: 37,
          level: 2,
          label: '西北',
        },
            {
          value: 247,
          level: 2,
          label: '西北',
        },
            {
          value: 257,
          level: 2,
          label: '西北',
        },
            {
          value: 267,
          level: 2,
          label: '西北',
        },
            {
          value: 277,
          level: 2,
          label: '西北',
        }
      ]
      }
      }
})
</script>

<style lang="scss">
.card-wrap {
  text-align: center;
  .card {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    color: var(--c-brand);
    background: var(--c-bg);
    border: 1px solid var(--c-brand);
    height: 80px;
    width: 600px;
  }
}
</style>
```

:::





