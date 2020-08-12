<template>
  <a-layout class="enterMain">
    <layout-header />

    <a-layout-content class="layout_content">
      <router-view />
    </a-layout-content>

    <layout-footer />
  </a-layout>
</template>

<script>
import LayoutHeader from '@/components/Header'
import LayoutFooter from '@/components/Footer'

import {account} from '@/util/api'
import {routerMatch} from '@/util/utils'

export default {
  name: 'enterMain',
  components: {
    LayoutHeader,
    LayoutFooter,
  },
  methods: {
    checkAuth() {
      let menusStr = localStorage.getItem('menus')
      let menus = menusStr ? menusStr.split(',') : []
      let rolesStr = localStorage.getItem('roles')
      let roles = rolesStr ? rolesStr.split(',') : []
      let redirect = this.$route.fullPath
      if (menus.length && roles.length) {
        this.menuCtr(menus)
        this.roleCtr(roles)
        account.getInfo().then(({data}) => {
            this.$store.commit('setUserInfo', data)
            setTimeout(() => {
              if (this.$route.name === 'main')
                this.$router.replace(routerMatch(menus))
            }, 200);
            // fetchCdnDomain().then(({data}) => { // 获取cdn域名
            //   this.$store.commit('setCdnDomain, data);
            // })
            // account.getResourceCode().then(({data})=>{ // 获取资源权限
            //   let sources = data.split(':')
            //   this.$store.commit('setXXXResources', sources[0]||'')
            // })
          }).catch(data => {
            this.$message.warning(data.code === 401?'请先登录！':data.msg||'服务器繁忙！请稍后再试！')
          })
      } else {
        this.$message.error('该用户无权限！')
        this.$store.commit('logout')
        this.$router.replace(`/login${redirect && redirect !== '/' ? `?redirect=${redirect}` : ''}`)
      }
    },
    menuCtr(menus) {
      let temp = { ...this.$store.state.menus }
      for (let i of menus) {temp[i] = true}
      this.$store.commit('setMenus', temp)
    },
    roleCtr(roles) {
      let temp = { ...this.$store.state.roles }
      for (let i of roles) {temp[i] = true}
      this.$store.commit('setRoles', temp)
    },
  },
  mounted() {
    this.checkAuth()
  }
}
</script>

<style lang="less" scoped>
.enterMain{
  .layout_content{
    min-height: calc(100vh - 64px - 38px);
  }
}
</style>
