class JsonForest {
  constructor () {
    this.eventList = []
    this.data = ''
    this.keymap = {
      name: 'cat_name',
      id: 'cat_id',
      depth: 'depth'
    }
    this.returnKeys = ['cat_id', 'cat_name', 'depth', 'rank']
    this.JsonTransfer = new JsonTransfer()
  }
  init (option) {
    this.option = this.checkParam(option) ? option : ''
    this.data = this.checkParam(option.data)
      ? JSON.parse(JSON.stringify(option.data))
      : ''
    this.keymap = this.checkParam(option.keymap) ? option.keymap : ''
    this.returnKeys = this.checkParam(option.returnKeys)
      ? option.returnKeys
      : ''
  }
  checkParam (param) {
    // 如果为空字符串、 空对象、空数组 以及 undefined null 等值的时候 返回 false 否则返回 true
    if (Object.prototype.toString.call(param) === '[object Array]') {
      return !!param.length
    } else if (Object.prototype.toString.call(param) === '[object Object]') {
      return !!Object.keys(param).length
    } else {
      return !!param
    }
  }
  validateLegal (returnKeys, keymap) {
    if (Object.prototype.toString.call(returnKeys) !== '[object Array]') {
      throw new Error('returnKeys字段，必须为数组')
    } else if (Object.prototype.toString.call(keymap) !== '[object Object]') {
      throw new Error('keymap字段，必须为对象')
    } else {
      return true
    }
  }
  emit (type, option) {
    let arr = this.eventList[type]
    if (!arr) {
      /**
       *  没有 on 的时候 emit的兼容
       */
      arr = []
    }
    // 校验 data 存在的情况下 returnKeys为数组  keymap为对象的合法性
    this.validateLegal(this.returnKeys, this.keymap)
    /**
     * 挂载参数  进行整体校验 不符合规范的 转化为空字符串
     */
    this.init(option)
    // option 不传 或者 data 不传  则可认为在执行订阅和发布任务  不做 dom 转化
    if (!this.option || !this.data) {
      arr.forEach((item, index) => {
        item()
      })
    } else {
      /**
       * 1. 检验 returnKeys  如果不对  给出报错
       * 2. 检验 keymaps  如果映射的类名不对  给出报错
       *
       */
      if (this.returnKeys) {
        this.data = this.JsonTransfer.getDataFormReturnKeys(this.data, this.returnKeys)
      }
      if (this.keymap) {
        this.data = this.JsonTransfer.replaceKeymap(this.data, this.keymap, this.returnKeys)
      }
      arr.forEach(item => {
        item(this.data, this.option)
      })
    }
  }
  on (type, callback) {
    if (!this.eventList[type]) {
      this.eventList[type] = []
    }
    this.eventList[type].push(callback)
  }
}

class JsonTransfer {
  getDataFormReturnKeys (data, returnKeys) {
    let result = {}
    if (Object.prototype.toString.call(data) === '[object Array]') {
      result = data.map(item => {
        return this.getDataFormReturnKeys(item, returnKeys)
      })
    } else if (Object.prototype.toString.call(data) === '[object Object]') {
      let prevKeys = Object.keys(data)
      returnKeys.forEach(item => {
        //  原先数据中存在的key 值   才会生效
        if (prevKeys.includes(item)) {
          result = Object.assign(result, {
            [item]: this.getDataFormReturnKeys(data[item], returnKeys)
          })
        }
      })
    } else {
      return data
    }
    return result
  }
  checkKeymapRepeat (keymap) {
    let arr = Object.values(keymap)
    let hash = {}
    for (let i = 0; i < arr.length; i++) {
      if (hash[arr[i]]) {
        return true
      }
      hash[arr[i]] = true
    }
    return false
  }
  replaceRepeatKeymap (data, keymap, returnKeys) {
    let result = {}
    if (Object.prototype.toString.call(data) === '[object Array]') {
      result = data.map(item => {
        return this.replaceRepeatKeymap(item, keymap, returnKeys)
      })
    } else if (Object.prototype.toString.call(data) === '[object Object]') {
      for (let key in keymap) {
        let dataKey = keymap[key]
        if (data.hasOwnProperty(dataKey)) {
          result = Object.assign(result, {
            [key]: this.replaceRepeatKeymap(data[dataKey], keymap, returnKeys)
          })
        }
      }
      // 补充returnKeys 遗留的 key 值
      let filterArr = returnKeys.filter((item) => {
        return !Object.values(keymap).includes(item)
      })
      if (filterArr.length) {
        filterArr.forEach((key) => {
          if (data.hasOwnProperty(key)) {
            result = Object.assign(result, {
              [key]: this.replaceRepeatKeymap(data[key], keymap, returnKeys)
            })
          }
        })
      }
    } else {
      return data
    }
    return result
  }
  replaceKeymap (data, keymap, returnKeys) {
    let str = JSON.stringify(data)
    /**
     * 1.   keymap 中存在相同的 value 值  （特殊情况）
     *  keymap: {
            label: "cat_name",
            value: "cat_name",
            depth: "depth"
          },
     * 2.   keymap 中的 value 值都不相同（正常情况）
     */
    if (this.checkKeymapRepeat(keymap)) {
      return this.replaceRepeatKeymap(data, keymap, returnKeys)
    } else {
      for (let key in keymap) {
        let chiledStr = keymap[key]
        str = str.replace(new RegExp(chiledStr, 'g'), key)
      }
      return JSON.parse(str)
    }
  }
}
export default JsonForest
