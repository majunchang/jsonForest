<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <JsTree :options="options" :depth="0" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import JsTree from './components/jsTree';

export default {
  name: 'App',
  components: {
    JsTree
  },
  data () {
    return {
      options: [
        {
          value: 1,
          label: 1,
          id: 1,
          checked: true,
          children: [
            {
              value: '1-1',
              label: '1-1',
              id: '1-1',
              checked: false,
              depth: 1,
              children: [
                {
                  value: '1-1-1',
                  label: '1-1-1',
                  id: '1-1-1',
                  depth: 2,
                  checked: false
                }
              ]
            },
            {
              value: '1-2',
              label: '1-2',
              id: '1-2',
              depth: 1,
              checked: false
            }
          ]
        },
        {
          value: 2,
          label: 2,
          id: 2,
          checked: false
        },
        {
          value: 3,
          label: 3,
          id: 3,
          checked: false
        },
        {
          value: 4,
          label: 4,
          id: 4,
          checked: false
        },
        {
          value: 5,
          label: 5,
          id: 5,
          checked: false
        }
      ]
    }
  },
  mounted () {
    this.$events.$on('listen', (id, value) => {
      console.log(id)
      console.log(value)
      this.options = this.calcOptionsParent(
        this.calcOptions(this.options, id, value)
      )
      console.log(this.options)
    })
  },
  methods: {
    calcOptions (obj, id, value) {
      if (!obj) {
        return
      }
      let data = obj
      data.forEach((item, index) => {
        if (item.id == id) {
          item.checked = value
          // 1 父组件为 true 和 false 的时候  子组件全部为 false
          if (item.children && item.children.length) {
            this.childrenChecked(item.children, value)
          }
          // 2 子组件选择的时候  确定其他的子组件有没有同样被选择
        } else {
          this.calcOptions(item.children, id, value)
        }
      })
      return data
    },
    calcOptionsParent (obj) {
      if (!obj) {
        return
      }
      obj.forEach((item, index) => {
        if (item.children && item.children.length) {
          item.checked = !item.children.find(item => {
            return !item.checked
          })
          this.calcOptionsParent(item.children)
        }
      })
      return obj
    },
    childrenChecked (obj, value) {
      if (!obj) {
        return
      }
      obj.forEach((item, index) => {
        item.checked = value
        console.log('刘亦菲')
        console.log(item.children)
        this.childrenChecked(item.children, value)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
