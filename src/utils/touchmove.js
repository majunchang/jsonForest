
/**
 * moveTopLimit: 移动过程中，随着手指的滑动 dom的偏移量
 * modifyTopLimit: 触发touchEnd的时候 我们需要进行吸顶这样的一个交互 设置吸顶的范围
 */
export default class TouchMove {
  constructor(params) {
    this.props = params;
    this.checkParams(params);
    this.startY = 0;
    this.moveEndY = 0;
    this.oldMoveY = 0;
    this.offsetSum = 0;
    this.curDistance = 0;
    this.init();
  }
  checkParams() {
    const objectKey = [
      'Dom',
      'slider',
    ];
    const baseTypeKey = [
      'moveTopLimit',
      'moveBottomLimit',
      'modifyTopLimit',
      'modifyBottomLimit',
    ];
    objectKey.forEach((item) => {
      if (!this.props[item]) {
        throw new Error(`${item}传参错误，请检查之后重试`);
      }
    });
    baseTypeKey.forEach((item) => {
      if (this.props[item] === undefined ||
        (Object.prototype.toString.call(this.props[item]) !== '[object Number]'
          && Object.prototype.toString.call(this.props[item]) !== '[object String]')) {
        throw new Error(`${item}传参错误，请传入数字或者字符类型的数字`);
      }
    });
  }
  init() {
    console.log(this.props);
    this.Dom = this.props.Dom;
    this.slider = this.props.slider;
    this.moveTopLimit = parseInt(this.props.moveTopLimit, 10) || 0;
    this.moveBottomLimit = parseInt(this.props.moveBottomLimit, 10) || 0;
    this.modifyTopLimit = parseInt(this.props.modifyTopLimit, 10) || 0;
    this.modifyBottomLimit = parseInt(this.props.modifyBottomLimit, 10) || 0;
    this.addListenerWheel();
  }
  addListenerWheel() {
    this.Dom.addEventListener('touchstart', (e) => {
      this.touchStart(e);
    });
    this.Dom.addEventListener('touchmove', (e) => {
      this.touchMove(e);
    });
    this.Dom.addEventListener('touchend', (e) => {
      this.touchEnd(e);
    });
  }
  touchStart(event) {
    console.log('start');
    console.log(event);
    this.flag = 'start'
    this.startY = parseInt(event.touches[0].clientY, 10);
    this.oldMoveY = this.startY;
  }
  touchMove(event) {
    this.flag = 'move'
    if (event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;
    event.preventDefault();
    this.moveY = event.touches[0].clientY;
    this.offset = (this.moveY - this.oldMoveY);
    this.getCurDistance();
    console.log('move');
    console.log('=======');
    console.log(event);
    console.log(this.offset);
    console.log(this.curDistance);
    console.log('--------');
    this.offsetSum = this.offset + this.curDistance;
    if (this.offsetSum > 0) {
      this.offsetSum = Math.min(this.offsetSum, this.moveTopLimit);
    } else if (this.offsetSum < 0) {
      this.offsetSum = Math.max(this.offsetSum, this.moveBottomLimit);
    }
    this.oldMoveY = this.moveY
    this.movePosition(this.offsetSum);
  }
  touchEnd(event) {

    this.moveEndY = parseInt(event.changedTouches[0].clientY, 10);
    this.offset = (this.moveEndY - this.startY);
    this.getCurDistance();
    console.log('end');
    console.log(event);
    console.log(this.startY);
    console.log(this.offset);
    this.offsetSum = this.offset + this.curDistance;
    console.log(this.offsetSum);
    console.log(this.curDistance);
    this.movePosition(this.offsetSum, 'end');
    this.modifyPosition(this.offsetSum);
  }
  getCurDistance() {
    if (this.slider.style.transform) {
      this.curDistance = parseInt(
        this.slider.style.transform.split(',')[1], 10) || 0;
    } else {
      this.curDistance = parseInt(
        this.slider.style.webkitTransform.split(',')[1], 10) || 0;
    }
  }
  movePosition(distance, type) {
    console.log('嘻嘻哈哈');
    console.log(type);
    console.log(distance);
    this.slider.style.webkitTransform = `translate3d(0,${distance}px, 0)`;
    this.slider.style.transform = `translate3d(0,${distance}px, 0)`;
  }
  modifyPosition(distance) {
    console.log('modify');
    console.log(this.offsetSum);
    console.log(this.curDistance);
    if (distance > this.modifyTopLimit) {
      this.curDistance = this.modifyTopLimit;
      setTimeout(() => {
        this.movePosition(this.modifyTopLimit, 'modify');
      }, 50);
    } else if (distance < this.modifyBottomLimit) {
      this.curDistance = this.modifyBottomLimit;
      setTimeout(() => {
        this.movePosition(this.modifyBottomLimit, 'modify');
      }, 50);
    }
  }
}
