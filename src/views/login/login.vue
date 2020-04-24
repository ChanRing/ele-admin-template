<template>
  <div class="login container">
    <div class="login-wrap">
      <login-brand></login-brand>
      <login-form></login-form>
    </div>
    <wave-wrapper></wave-wrapper>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('common')
import waveWrapper from './components/WaveWrapper'
import LoginBrand from '@/views/login/components/LoginBrand'
import LoginForm from '@/views/login/components/LoginForm'
export default {
  name: 'Login',
  components: { LoginForm, LoginBrand, waveWrapper },
  computed: {
    ...mapState({
      brandName: 'brandName'
    })
  },
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
    padding-top: 80px;
    justify-content: space-evenly;
    width: 900px;
    height: 440px;
    background-color: #fff;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 14px;
  }
}
</style>
