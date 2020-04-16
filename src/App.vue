<template>
  <div id="app">
    <a-config-provider :locale="zhCN">
      <router-view />
    </a-config-provider>
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
// import {account} from '@/util/api'

export default {
  name: 'app',
  data() {
    return { zhCN }
  },
  methods: {
    checkAuth(){
      setTimeout(() => {
        this.$store.commit('setUserInfo', {
          name: '张三',
          avatar: ''
        })
        this.$route.name === 'main' && this.$router.replace('/dashboard')
      }, 1500)
      // account.fetchUserInfo().then(({data})=> {
      //   this.$store.commit('setUserInfo', data)
      //   this.$route.name === 'main' && this.$router.replace('/dashboard')
      // }).catch(()=> {
      //   this.$store.commit('setUserInfo', {})
      //   this.$route.name != 'login' && this.$router.replace('/login')
      // })
    }
  },
  mounted(){
    this.$message.config({ maxCount: 1 })
    this.checkAuth()
  }
}
</script>

<style lang="less">
@import "assets/style/common";
</style>
