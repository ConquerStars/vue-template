<template>
  <div class="enterMain">
    <div class="loading_mask" v-if="fetching">
      <a-spin class="loading">
        <a-icon slot="indicator" type="loading" spin />
      </a-spin>
      <span class="loading_msg">拼命加载中...</span>
    </div>
    <a-layout v-else>

      <side-menus />

      <a-layout>
        <main-header />
        <a-layout-content class="custom_content">
          <router-view />
          <a-back-top />
        </a-layout-content>
        <main-footer />
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import SideMenus from '@/components/sidemenus'
import MainHeader from '@/components/header'
import MainFooter from '@/components/footer'

export default {
  name: 'enterMain',
  components: {
    SideMenus,
    MainHeader,
    MainFooter,
  },
  computed: {
    fetching(){
      return this.$store.state.fetching
    }
  },
  created(){
    this.checkAuth()
  },
  methods: {
    checkAuth(){
      let menusStr = localStorage.getItem('menus')
      let menus = menusStr?menusStr.split(','):[]
      if(menus.length){
        this.menuCtr(menus)
        console.log('查询用户信息')
        setTimeout(() => {
          this.$store.commit('setUserInfo', {name: 'cooong', avatar: ''})
        }, 2000)
        // account.fetchInfo().then(({data})=> {
        //   this.$store.commit('setUserInfo', data)
        // }).catch(({response})=> {
        //   console.error(response.data.msg || '查询用户信息失败！')
        //   this.$store.commit('setUserInfo', {})
        //   this.$router.replace(`/login?redirect=${this.$route.fullPath}`)
        // })
      } else {
        let redirect = this.$route.fullPath
        this.$store.commit('setUserInfo', {})
        this.$router.replace(`/login${(redirect&&redirect!=='/')?`?redirect=${redirect}`:''}`)
      }
    },
    menuCtr(menus){
      let temp = {...this.$store.state.menus}
      if(menus.includes('*')){ // 管理员拥有全部菜单
        for(let i in temp){ temp[i] = true }
      } else {
        for(let i of menus){ temp[i] = true }
      }
      this.$store.commit('setMenus', temp)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.enterMain{
  .loading_mask{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .loading{
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      >.anticon{
        font-size: 32px;
      }
    }
    .loading_msg{
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, calc(32px - 50%));
    }
  }
  .ant-layout{
    min-height: 100vh;
    .custom_content{
      margin: 24px 16px 0;
      padding: 24px;
      background: #fff;
    }
  }
}
</style>
