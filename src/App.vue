<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view />
    </a-locale-provider>
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  name: 'app',
  data() {
    return {
      locale: zhCN,
    }
  },
  mounted() {
    this.$message.config({ maxCount: 1 })
    console.log(this.$route)
    console.log(this.$store)
  },
  // computed: {
  //   userInfo(){
  //     return this.$store.state.userInfo
  //   }
  // }
}
</script>

<style>

</style>
