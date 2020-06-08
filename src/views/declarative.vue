<template>
  <div class="lose-lottery-content">
    <div class="lose-lottery-container">
      <div
        class="lose-lottery"
        :key="index"
        v-for="(item, index) in lotteryList"
      >
        <div class="lose-lottery-title">{{ item.title }}</div>
        <div class="lose-lottery-lotteries">
          <div
            class="lottery-item"
            :key="ind"
            v-for="(singleLottery, ind) in item.list"
          >
            {{ singleLottery }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TouchMove from "../utils/touchmove";
import { getElementsByClassName } from "../utils/dom";

export default {
  name: "LosingLottery",
  data() {
    return {
      lotteryList: [
        {
          title: "电视机彩票1",
          list: [
            100381,
            100382,
            100383,
            100384,
            100385,
            100386,
            100387,
            100388,
            100389,
            100390,
            200381,
            100382,
            100383,
            100384,
            100385,
            100386,
            100387,
            100388,
            100389,
            100390,
            500381,
            100382,
            100383,
            100384,
            100385,
            100386,
            100387,
            100388,
            100389,
            100390,
            900381,
            100382,
            100383,
            100384,
            100385,
            100386,
            100387,
            100388,
            100389,
            100390
          ]
        },
        {
          title: "电视机彩票2",
          list: [
            200381,
            100382,
            100383,
            100384,
            100385,
            100386,
            100387,
            100388,
            100389,
            100390
          ]
        },
        {
          title: "电视机彩票3",
          list: [
            300381,
            100382,
            100383,
            100384,
            100385,
            100386,
            100387,
            100388,
            100389,
            100390
          ]
        }
      ]
    };
  },
  mounted() {
    this.addListenerWheel();
  },
  methods: {
    addListenerWheel() {
      const dom = getElementsByClassName("lose-lottery-content")[0];
      const slider = getElementsByClassName("lose-lottery-container")[0];
      const itemHeight = getElementsByClassName("lottery-item")[0].clientHeight;
      const bottomlimit =
        getElementsByClassName("lose-lottery-container")[0].clientHeight -
        getElementsByClassName("lose-lottery-content")[0].clientHeight;
      console.log(itemHeight);
      console.log(bottomlimit);
      // eslint-disable-next-line no-new
      new TouchMove({
        Dom: dom,
        slider: slider,
        moveTopLimit: itemHeight,
        moveBottomLimit: -(bottomlimit + itemHeight),
        modifyTopLimit: 0,
        modifyBottomLimit: -(bottomlimit + 20)
      });
    }
  }
};
</script>

<style scoped>
.lose-lottery-content {
  margin-bottom: 12px;
  width: 240px;
  height: 335px;
  background: yellowgreen;
  border-radius: 7px;
  overflow-y: hidden;
}

.lose-lottery-container {
  transition: all 0.2s linear;
  touch-action: none;
}

.lose-lottery {
  margin-bottom: 10px;
}

.lose-lottery-title {
  margin-top: 7px;
  height: 19px;
  color: #874815;
  font: 14px/19px miui;
  text-align: center;
  position: relative;
}

.lose-lottery-title::before,
.lose-lottery-title::after {
  width: 15px;
  height: 2px;
  content: "";
  background-size: 15px 2px;
  position: absolute;
  top: 50%;
  margin-top: -1px;
}

/* .lose-lottery-title::before {
  background-image: url(../../image/leftRectangle.png);
  left: 50px;
}

.lose-lottery-title::after {
  background-image: url(../../image/rightRectangle.png);
  right: 50px;
} */

.lose-lottery-lotteries {
  margin-top: 10px;
  flex-wrap: wrap;
  padding-left: 8px;
  overflow: hidden;
}

.lottery-item {
  width: 70px;
  float: left;
  margin-right: 7px;
  margin-bottom: 5px;
  height: 58px;
  background: linear-gradient(
    90deg,
    rgba(255, 231, 209, 1) 0%,
    rgba(255, 225, 202, 1) 100%
  );
  border-radius: 2px;
  font: 10px/28px miui;
  color: #874815;
  font-weight: bold;
  text-align: center;
}
</style>
