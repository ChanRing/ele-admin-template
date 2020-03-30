<template>
  <div class="login container">
    <div class="login-wrap">
      <div class="login-brand"></div>
      <el-form :model="form">
        <el-form-item>
          <h1 class="title">基于Saas化的协同办公平台</h1>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入您的账号">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入您的密码"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn">登录</el-button>
          <el-link :underline="false">忘记密码？</el-link>
        </el-form-item>
      </el-form>
    </div>
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div class="wave waveTop"></div>
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div class="wave waveMiddle"></div>
      </div>
      <div class="waveWrapperInner bgBottom">
        <div class="wave waveBottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {},
      hasBackground: true
    }
  }
}
</script>

<style scoped lang="scss">
.login-wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 900px;
  height: 520px;
  background-color: #fff;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 14px;
}
.login-brand {
  width: 398px;
  height: 300px;
  background: url('../assets/undraw_work_chat_erdt.png') no-repeat;
  background-size: cover;
}
.login-btn {
  width: 100%;
}

.el-form {
  width: 300px;
  h1.title {
    font-size: $--font-size-main;
  }
  &-item:last-child {
    text-align: center;
  }
}

  .
</style>
