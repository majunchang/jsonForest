<template>
  <div class="hello">
    <div :key="index" v-for="(item, index) in options" :label="item.label" :style="indent">
      <input type="checkbox" @click.stop="inputClick(item.id, $event)" :checked="item.checked" />
      {{ item.value }}
      <div v-if="item.children && item.children.length">
        <JsTree :options="item.children" :depth="item.children[0].depth" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "JsTree",
  props: ["options", "depth"],
  data () {
    return {};
  },
  computed: {
    indent () {
      return { transform: `translate(${this.depth * 50}px)` };
    }
  },
  mounted () { },
  methods: {
    inputClick (id, e) {
      this.$events.$emit("listen", id, e.target.checked);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .el-radio {
  display: block;
  margin-right: 0;
  height: 30px;
} */
</style>
