<template>
  <div id="app">
    <a-locale-provider :locale="zhCN">
      <router-view />
    </a-locale-provider>
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  name: 'app',
  data() {
    return { zhCN }
  },
  mounted(){
    this.$message.config({ maxCount: 1 })
  }
}
</script>

<style lang="less">
@import "assets/style/common";
</style>
