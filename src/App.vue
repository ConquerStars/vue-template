<template>
  <div id="app">
    <a-config-provider :locale="zhCN">
      <router-view />
    </a-config-provider>
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

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
