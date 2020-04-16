<template>
  <div class="dashboard">
    <div class="progress">
      <div class="click_block" v-for="i in progress" v-bind:key="i" @mousedown="(e)=>handlerMousedown(i, e)" >
        <span class="item" />
      </div>
    </div>
    <div class="maskModal" :style="`display: ${maskModal?'block':'none'}`" @mousemove="handlerMousemove" @mouseup="handlerMouseup" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      progress: [1,2,3,4,5,6,7,8,9,10],
      maskModal: false,
      clickX: 0,
      innerWidth: window.innerWidth
    }
  },
  methods: {
    handlerMousedown(i, e){ // 鼠标按下 
      console.log(`当前点击第${i}个, 横向坐标${e.screenX}, 页面总宽度${this.innerWidth}`)
      this.maskModal = true
      this.clickX = e.screenX
    },
    handlerMousemove(e){ // 鼠标移动 
      let moveX = e.screenX // 鼠标移动的位置
      let onePercent = this.innerWidth/100 // 百分之一视窗大小的宽度
      console.log(`当前x坐标轴位置:${moveX}, 相对点击时x坐标位置:${this.clickX - moveX}, 相对整个网页视窗移动百分比:${((this.clickX - moveX)/onePercent).toFixed(2)}%`)
      // todo 
    },
    handlerMouseup(){ // 鼠标放开
      this.maskModal = false
    }
  },
  mounted(){
    console.log('dashboard complete')
  }
}
</script>

<style lang="less" scoped>
.dashboard{
  padding: 24px;
  .progress{
    cursor: pointer;
    width: 200px;
    margin: 0 auto;
    display: flex;;
    .click_block{
      flex: 1;
        text-align: center;
      .item{
        display: inline-block;
        width: 10px;
        height: 20px;
        background-color: blue;
      }
    }
  }
  .maskModal{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .1);
  }
}
</style>
