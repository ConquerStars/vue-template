<template>
  <a-layout-header class="main_header">
    <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="collapsedTrigger" />
  </a-layout-header>
</template>

<script>
import {account} from '@/util/api'

export default {
  name: 'main_header',
  computed: {
    collapsed(){
      return this.$store.state.collapsed
    }
  },
  data() {
    return {

    }
  },
  methods: {
    collapsedTrigger(){
      this.$store.commit('setMenuCollapsed', !this.collapsed)
    },
    logout(){
      account.logout()
      localStorage.removeItem('menus')
      localStorage.removeItem('roles')
      this.$router.replace('/login')
      this.$store.commit('setUserInfo', {})
    }
  },
  mounted(){

  }
}
</script>

<style lang="less" scoped>
.main_header{
  background-color: #fff;
  padding: 0 20px;
  .anticon-menu-fold, .anticon-menu-unfold{
    font-size: 18px;;
  }
}
</style>
