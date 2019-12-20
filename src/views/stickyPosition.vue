<template>
  <div class="stickyPosition">
    <h1>stickyPosition</h1>
    <div class="box">
      <div class="container">
        <section>SECTION-1</section>
        <section>SECTION-2</section>
        <section>SECTION-3</section>
        <section>SECTION-4</section>
        <section>SECTION-5</section>
        <p :key="index" v-for="(item,index) in arr">{{computedProperty()}}</p>
      </div>
    </div>————————————————
  </div>
</template>

<script>


export default {
  name: 'stickyPosition',
  data () {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    computedProperty () {
      console.log('1');

      return '我是计算属性'
    }
  }
}
</script>

<style>
section:first-child {
  height: 200px;
  background-color: lightgray;
}
section:nth-child(2) {
  height: 100px;
  background-color: orange;
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
}
section:nth-child(3) {
  height: 300px;
  background-color: lightgray;
}
section:nth-child(4) {
  height: 100px;
  background-color: orange;
  position: sticky;
  position: -webkit-sticky;
  top: 150px;
}
section:last-child {
  height: 500px;
  background-color: darkgray;
}
</style>
