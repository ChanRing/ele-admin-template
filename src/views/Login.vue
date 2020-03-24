<template>
  <div :class="['login', { background: hasBackground }]">
    <el-form :model="form" hide-required-asterisk status-icon>
      <el-form-item>
        <h1>项目模板</h1>
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: #99a9bf; // todo 有待转化为变量
  h1 {
    text-align: center;
    color: $--color-primary;
  }
  &.background {
    background: url('../assets/background.png') no-repeat center;
  }
  .el-form {
    width: 400px;
    padding: 0 20px;
    border-radius: 5px;
    z-index: 10;
    background: rgba(0,0,0,.2);
  }
  .login-btn {
    width: 100%;
  }
}
</style>
