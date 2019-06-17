<template>
  <div class="hello">
    <h1>测试用例</h1>
    <el-select v-model="selectValue" placeholder="请选择" @change="chooseValue">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        v-model="item.value"
      >
      </el-option>
    </el-select>

    <el-button>默认按钮</el-button>
    <el-select v-model="resSelectValue" placeholder="请选择">
      <el-option
        v-for="item in resOptions"
        :key="item.value"
        :label="item.label"
        v-model="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import axios from 'axios';
import { CateDtaAllNotsd } from '../plugins/data.js';
const dataObj = {
  水果: 'Shuiguo',
  蔬菜: 'Shucai',
  肉禽蛋类: 'Rou',
  豆制品: 'Dou',
  冷冻冰藏: 'LengDong'
}

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selectValue: '',
      resSelectValue: '',
      options: [
        { value: '水果', label: '水果' },
        { value: '蔬菜', label: '蔬菜' },
        { value: '肉禽蛋类', label: '水产' },
        { value: '豆制品', label: '豆制品' },
        { value: '冷冻冰藏', label: '冷冻冰藏' }
      ],
      resOptions: [],
      result: ''
    }
  },
  mounted () {
    this.jsonTransfer.on('listen', value => {
      console.log('111')
      console.log(value)
      this.resOptions = value
    })
  },
  methods: {
    chooseValue (value) {
      console.log(value)
      axios.get(`${dataObj[value]}`).then(res => {
        console.log(this.jsonTransfer)
        console.log(CateDtaAllNotsd)
        this.jsonTransfer.emit('listen', {
          returnKeys: ['cat_id', 'cat_name', 'depth', 'rank', 'detail'],
          // returnKeys: {},
          keymap: {
            label: 'cat_name',
            value: 'cat_name',
            depth: 'depth'
          },
          data: CateDtaAllNotsd
        })
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
