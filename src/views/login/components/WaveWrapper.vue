<template>
  <!--Waves Container-->
  <div>
    <svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use
          v-for="i in number"
          :key="i"
          xlink:href="#gentle-wave"
          x="48"
          :y="3 * i"
          :fill="color"
          :opacity="1 - (i + 1) * 0.2"
        ></use>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'WaveWrapper',
  props: {
    // 生成波浪的颜色值
    color: {
      type: String,
      default: '#128EFF'
    },
    number: {
      type: Number,
      default: 3,
      validator(number) {
        return number <= 5
      }
    }
  }
}
</script>

<style scoped lang="scss">
.waves {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 145px;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
