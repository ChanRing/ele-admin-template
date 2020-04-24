<template>
  <div class="login-brand">
    <h1>基于Sass化的协同办公平台</h1>
    <div class="brand"></div>
  </div>
</template>

<script>
export default {
  name: 'LoginBrand'
}
</script>

<style scoped lang="scss">
.login-brand {
  width: 378px;
  text-align: center;
  h1 {
    font-size: $--font-size-title;
    font-weight: bold;
    line-height: 40px;
    margin-bottom: 14px;
  }
  .brand {
    height: 286px;
    margin: auto;
    background: url('~@/assets/undraw_work_chat_erdt.png') no-repeat;
    background-size: cover;
  }
}
</style>
