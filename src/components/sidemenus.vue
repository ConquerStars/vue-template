<template>
  <a-layout-sider :trigger="null" collapsible v-model="collapsed" class="side_menus">
    <div class="logo" >
      <img src="../assets/img/logo.png" alt="logo">
      <h1>鸿蒙云取证平台</h1>
    </div>
    <a-menu theme="dark" mode="inline" v-model="selectedMenus" :defaultOpenKeys="expendMenus">
      <a-menu-item key="dashboard" v-show="menus['SY']">
        <router-link to="/dashboard">
          <a-icon type="user" />
          <span>首页</span>
        </router-link>
      </a-menu-item>

      <a-sub-menu key="dzgl">
        <span slot="title"><a-icon type="setting" /><span>调证管理</span></span>
        <a-menu-item key="list">
          <router-link to="/dispatch_evidence_list">
            <a-icon type="user" />
            <span>调证列表</span>
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="zfdw">
        <span slot="title"><a-icon type="setting" /><span>执法单位</span></span>
        <a-menu-item key="enforce_unit">
          <router-link to="/enforce_unit">
            <a-icon type="user" />
            <span>执法单位列表</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="enforcer">
          <router-link to="/enforcer">
            <a-icon type="user" />
            <span>执法人员列表</span>
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="ycs">
        <span slot="title"><a-icon type="setting" /><span>云厂商</span></span>
        <a-menu-item key="cloud_manufacturers">
          <router-link to="/cloud_manufacturers">
            <a-icon type="user" />
            <span>云厂商列表</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="licloud_staffst">
          <router-link to="/cloud_staff">
            <a-icon type="user" />
            <span>云厂商人员</span>
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="jggl">
        <span slot="title"><a-icon type="setting" /><span>机构管理</span></span>
        <a-menu-item key="organ">
          <router-link to="/organ">
            <a-icon type="user" />
            <span>机构管理列表</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="organ_member">
          <router-link to="/organ_member">
            <a-icon type="user" />
            <span>机构管理成员</span>
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'side_menus',
  computed: {
    menus(){
      return this.$store.state.menus
    },
    collapsed(){
      return this.$store.state.collapsed
    }
  },
  created(){
    this.selectedMenus = [this.$route.name]
    this.expendMenus = (this.$route.meta && this.$route.meta.expendMenus) || []
  },
  data() {
    return {
      selectedMenus: [],
      expendMenus: []
    }
  },
  watch: {
    '$route.name'(v){
      this.selectedMenus = [v]
    }
  }
}
</script>

<style lang="less">
.side_menus{
  .logo{
    padding: 0 14px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    overflow: hidden;
    height: 60px;
    >img{
      margin: 10px 0;
    }
    >h1{
      font-size: 16px;
      color: #fff;
      vertical-align: middle;
      margin: 0 0 0 12px;
      display: inline-block;
      font-weight: 600;
      transition: all 1s;
    }
  }
}
.side_menus.ant-layout-sider-collapsed{
  .logo{
    >h1{
      opacity: 0;
    }
  }
}
</style>
