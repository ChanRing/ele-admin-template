<template>
  <div :class="['login', 'mediate', { background: hasBackground }]">
    <el-form :model="form" hide-required-asterisk status-icon>
      <el-form-item>
        <h1 class="title">项目模板</h1>
      </el-form-item>
      <el-form-item required>
        <el-input v-model="form.username" placeholder="用户名">
          <i class="el-input__icon el-icon-user" slot="prefix"></i>
        </el-input>
      </el-form-item>
      <el-form-item required>
        <el-input v-model="form.password" type="password" placeholder="密码">
          <i class="el-input__icon el-icon-unlock" slot="prefix"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn">登录</el-button>
      </el-form-item>
    </el-form>
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
.login {
  height: 100vh;
  width: 100vw;
  background: #2d3a4b;
  .title {
    text-align: center;
    color: $--color-primary;
  }
  &.background {
    background: url('~@/assets/background.png') no-repeat center;
  }
  .el-form {
    width: 400px;
    padding: 0 20px;
    border-radius: 4px;
    z-index: 10;
    background: rgba(0, 0, 0, 0.2);
    ::v-deep input {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: #fff;
    }
  }
  .login-btn {
    width: 100%;
  }
}
</style>
