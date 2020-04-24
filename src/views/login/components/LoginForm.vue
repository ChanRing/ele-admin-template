<template>
  <div class="login-form">
    <el-tabs v-model="formIndex" stretch>
      <el-tab-pane label="账号登录" name="0"></el-tab-pane>
      <el-tab-pane label="CA登录" name="1"></el-tab-pane>
      <el-tab-pane label="扫码登录" name="2"></el-tab-pane>
    </el-tabs>
    <el-form :model="form">
      <el-form-item v-show="rules.username">
        <el-input v-model="form.username" placeholder="请输入您的账号"> </el-input>
      </el-form-item>
      <el-alert v-show="rules.alert" show-icon v-bind="alertMessage"></el-alert>
      <el-form-item v-show="rules.password">
        <el-input v-model="form.password" type="password" placeholder="请输入您的密码"> </el-input>
      </el-form-item>
      <el-form-item v-show="rules.vertify">
        <div class="vertify">
          <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
          <vertify-code :identifyCode="code" @change="changeIdentifyCode"></vertify-code>
        </div>
      </el-form-item>
      <el-form-item v-show="rules.button">
        <el-button type="primary" @click="handleLogin">登录</el-button>
        <el-link :underline="false">忘记密码？</el-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import VertifyCode from './VertifyCode'
export default {
  name: 'LoginForm',
  components: { VertifyCode },
  data() {
    return {
      formIndex: '0',
      form: {},
      code: ''
    }
  },
  computed: {
    alertMessage() {
      return [
        {
          type: 'warning',
          title: 'CA环境不支持！'
        },
        {
          type: 'success',
          title: 'CA环境已女装，请输入密码'
        }
      ][1]
    },
    rules() {
      const username = this.formIndex === '0'
      const verify = username
      const alert = this.formIndex === '1'
      const password = this.formIndex !== '2'
      const button = password
      return { username, verify, alert, password, button }
    }
  },
  methods: {
    changeIdentifyCode(length = 4) {
      this.code = Array(length)
        .fill(null)
        .map(() => Math.round(Math.random() * 9))
        .join('')
    },
    postLogin() {
      this.$message.success(`欢迎你，${this.form.username}`)
      this.$router.push({ name: 'workbench' })
    },
    caLogin() {},
    scanLogin() {},
    handleLogin() {
      return [this.postLogin, this.caLogin, this.scanLogin][this.formIndex]()
    }
  },
  mounted() {
    this.changeIdentifyCode()
  }
}
</script>

<style scoped lang="scss">
.login-form {
  height: 100%;
  width: 300px;
}
.el-form {
  &-item:last-child {
    text-align: center;
  }
  .el-button {
    width: 100%;
  }
  .el-alert {
    height: 40px;
    margin-bottom: 22px;
  }
}

.vertify {
  display: flex;
  & > .el-input {
    margin-right: 16px;
  }
}
</style>
