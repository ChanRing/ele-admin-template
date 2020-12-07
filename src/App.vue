<template>
  <div id="app">
    <big-wheel
      width="3rem"
      height="3rem"
      ref="bigWheel"
      :prizeList="prizeList"
      @start="start"
      @over="over">
      <template v-slot:items="{ item }">
        <div class="prize-name">{{ item.text }}</div>
        <img class="prize-img" :src="item.icon">
      </template>
    </big-wheel>
  </div>
</template>

<script>
import BigWheel from '@/../packages/BigWheel'

export default {
  name: 'App',
  data () {
    return {
      prizeList: [
        // {
        //   text: '除螨仪',
        //   icon: require('@/assets/img/bun.png')
        // },
        {
          text: '扫地机器人',
          icon: require('@/assets/img/bun.png')
        },
        {
          text: '伯伦帅一体机',
          icon: require('@/assets/img/bun.png')
        },
        {
          text: '京东读书VIP月卡',
          icon: require('@/assets/img/bun.png')
        },
        {
          text: '纸巾',
          icon: require('@/assets/img/bun.png')
        },
        {
          text: '触电马克杯',
          icon: require('@/assets/img/bun.png')
        },
        {
          text: '触电笔记本（红）',
          icon: require('@/assets/img/bun.png')
        },
        {
          text: '10积分',
          icon: require('@/assets/img/bun.png')
        },
        {
          text: '50积分',
          icon: require('@/assets/img/bun.png')
        }
      ]
    }
  },
  methods: {
    // 开始转动
    start () {
      // 模拟随机数，这里可以请求后台获取中将信息
      const index = Math.floor(Math.random() * this.prizeList.length)

      // 转动转盘
      this.$refs.bigWheel.rotate(index)
    },
    // 转盘转完事件
    over ({ text }) {
      alert(`恭喜获得${text}`)
    }
  },
  components: {
    BigWheel
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
  background-image: url('~@/assets/img/wheel_bg.jpg');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%;

  .prize-name {
    position: absolute;
    left: .25rem;
    right: .25rem;
    top: .2rem;
    font-size: .14rem;
    text-align: center;
    color: #7D2A00;
  }

  .prize-img {
    position: absolute;
    top: .58rem;
    left: 50%;
    transform: translateX(-50%);
    width: .3rem;
    height: .3rem;
  }
}
</style>
