<template>
  <el-header :class="['global-header', `global-header-${direction}`, theme]">
    <!-- LOGO区域 -->
    <div :class="['brand', { 'full-brand': !this.collapse }]">
    </div>

    <!-- 当出现侧边菜单栏才存在折叠按钮 -->
    <template v-if="direction === 'vertical'">
      <div class="toggle-btn" @click="toggleCollapse">
        <i :class="toggleIcon"></i>
      </div>
    </template>

    <!-- 横向菜单区域 -->
    <nav-menu :menus="menus" mode="horizontal" v-else></nav-menu>

    <!-- 用户信息区域 -->
    <el-dropdown
      @command="name => $router.push({ name })"
      class="avatar-dropdown"
    >
      <span class="avatar-dropdown-link">
        <el-avatar :size="32" style="margin-right: 14px">{{
          avatar
        }}</el-avatar>
        {{ `欢迎你，${username}` }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="personal">个人资料</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import NavMenu from '../components/NavMenu/src/NavMenu'
const { mapState, mapActions } = createNamespacedHelpers('common')
export default {
  name: 'GlobalHeader',
  components: { NavMenu },
  computed: {
    ...mapState({
      direction: 'direction',
      collapse: 'collapse',
      menus: 'menus',
      theme: 'theme'
    }),
    toggleIcon() {
      const fold = this.collapse ? 'unfold' : 'fold'
      return `el-icon-s-${fold}`
    },
    avatar() {
      // todo 待接入头像
      return this.username.substr(0, 1)
    },
    username() {
      return '赖昌荣'
    }
  },
  methods: {
    ...mapActions(['toggleCollapse'])
  }
}
</script>

<style scoped lang="scss">
.global-header {
  padding-left: 0;
  padding-right: 0;
  display: flex;
  align-items: center;
  .brand {
    width: 64px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-right: 1px;
    transition: 0.3s ease-in-out;
    &.full-brand {
      width: 232px;
    }
  }
  .toggle-btn {
    height: 60px;
    width: 60px;
    text-align: center;
    line-height: 60px;
    color: #99a9bf;
    font-size: 20px;
  }
  .avatar-dropdown {
    margin-left: auto;
    &-link {
      display: flex;
      align-items: center;
      padding: 0 20px;
      color: #fff;
    }
  }
}
</style>
