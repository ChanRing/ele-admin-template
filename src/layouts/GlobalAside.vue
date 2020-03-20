<template>
  <nav-menu :menus="menus" :collapse="collapse" :theme="theme"></nav-menu>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import NavMenu from '../components/NavMenu/src/NavMenu'
const { mapState } = createNamespacedHelpers('common')
export default {
  name: 'GlobalAside',
  computed: {
    ...mapState({
      collapse: 'collapse',
      theme: 'theme',
      menus: 'menus'
    })
  },
  components: { NavMenu }
}
</script>
