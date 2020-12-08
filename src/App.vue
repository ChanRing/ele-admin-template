<template>
  <div id="app">
    <big-wheel
      width="6rem"
      height="6rem"
      ref="bigWheel"
      :prizeList="prizeList"
      @start="start"
      @over="over">
      <template v-slot:item="{ item }">
        <div class="prize-name">{{ item.text }}</div>
        <img class="prize-img" :src="item.icon">
      </template>
      <template v-slot:default="{start}">
        <img class="start-btn 123" data-v="1231" @click="start" :src="require('@/assets/img/go.png')" />
      </template>
    </big-wheel>
  </div>
</template>

<script>

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
      ],
      limits: 5 // 限制抽奖次数
    }
  },
  methods: {
    // 开始转动
    start () {
      if (this.limits <= 0) {
        alert('剩余抽奖次数不足')
        return
      }
      // 模拟随机数，这里可以请求后台获取中将信息
      const index = Math.floor(Math.random() * this.prizeList.length)

      // 转动转盘
      this.$refs.bigWheel.rotate(index)
    },
    // 转盘转完事件
    over ({ text }) {
      this.limits--
      alert(`恭喜获得${text}, 剩余${this.limits}次机会`)
    }
  },
  components: {
    BigWheel: () => import('packages/BigWheel')
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  overflow: hidden;
  width: 7.5rem;
  min-height: 100vh;
  background-color: #53066e;
  //background-image: url('~@/assets/img/wheel_bg.jpg');
  background-repeat: repeat-y;
  background-position: center top;
  background-size: 100%;
  margin: auto;

  .big-wheel {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .prize-name {
    position: absolute;
    left: .7rem;
    right: .7rem;
    top: .4rem;
    font-size: .28rem;
    text-align: center;
    color: #7D2A00;
  }

  .prize-img {
    position: absolute;
    top: 1.26rem;
    left: 50%;
    transform: translateX(-50%);
    width: .6rem;
    height: .6rem;
  }
}
</style>
