<template>
  <div class="login container">
    <div class="login-wrap">
      <div class="login-brand"></div>
      <el-form :model="form">
        <el-form-item>
          <h1 class="title">基于Saas化的协同办公平台</h1>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入您的账号"> </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" type="password" placeholder="请输入您的密码">
          </el-input>
        </el-form-item>
        <el-form-item class="vertify">
          <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
          <verification-code></verification-code>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="$router.push({ name: 'workbench' })"
            >登录</el-button
          >
          <el-link :underline="false">忘记密码？</el-link>
        </el-form-item>
      </el-form>
    </div>
    <wave-wrapper></wave-wrapper>
  </div>
</template>

<script>
import waveWrapper from './components/WaveWrapper'
import VerificationCode from './components/VertifyCode'
export default {
  name: 'Login',
  components: { waveWrapper, VerificationCode },
  data() {
    return {
      form: {}
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-wrap {
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
    background: url('../../assets/undraw_work_chat_erdt.png') no-repeat;
    background-size: cover;
  }
  .login-btn {
    width: 100%;
  }

  .el-form {
    width: 300px;
    h1.title {
      font-size: $--font-size-main;
      text-align: center;
    }
    &-item:last-child {
      text-align: center;
    }
    .vertify ::v-deep .el-form-item__content {
      display: flex;
      align-items: center;
      .el-input {
        width: calc(100% - 120px);
        margin-right: 20px;
      }
    }
  }
}
</style>
