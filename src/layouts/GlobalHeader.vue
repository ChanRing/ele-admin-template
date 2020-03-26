<template>
  <el-header :class="['global-header', theme]">
    <!-- LOGO区域 -->
    <div :class="['brand', { 'full-brand': !this.collapse }]">
      项目主题名称
    </div>

    <!--    &lt;!&ndash; 当出现侧边菜单栏才存在折叠按钮 &ndash;&gt;-->
    <!--    <template v-if="direction === 'vertical'">-->
    <!--      <div class="toggle-btn" @click="toggleCollapse">-->
    <!--        <i :class="toggleIcon"></i>-->
    <!--      </div>-->
    <!--    </template>-->

    <!-- 横向菜单区域 -->
    <nav-menu v-if="isHorizontal" :menus="menus" :mode="direction"></nav-menu>

    <!-- 用户信息区域 -->
    <el-dropdown
      @command="name => $router.push({ name })"
      class="avatar-dropdown"
    >
      <span class="avatar-dropdown-link">
        <el-avatar :size="32" style="margin-right: 14px">{{
          avatar
        }}</el-avatar>
        {{ username }}
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
      const fold = this.collapse ? 'right' : 'left'
      return `el-icon-d-arrow-${fold}`
    },
    avatar() {
      // todo 待接入头像
      return this.username.substr(0, 1)
    },
    username() {
      return '赖昌荣'
    },
    isHorizontal() {
      return this.direction === 'horizontal'
    }
  },
  methods: {
    ...mapActions(['toggleCollapse'])
  }
}
</script>

<style scoped lang="scss">
.global-header {
  display: flex;
  align-items: center;
  .brand {
    width: 64px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: $--font-size-main;
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
    font-size: 20px;
    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
  .avatar-dropdown {
    margin-left: auto;
    &:hover {
      cursor: pointer;
    }
    &-link {
      display: flex;
      align-items: center;
      padding-left: 20px;
      color: #fff;
    }
  }
}
</style>
