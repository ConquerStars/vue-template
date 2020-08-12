<template>
  <a-layout-footer class="layout_footer">
    <span>Copyright&nbsp;&copy;&nbsp;2019</span>
    <span class="company">深圳市大恒数据安全科技有限责任公司</span>
    <span class="recordNum">粤ICP备17118467号</span>
  </a-layout-footer>
</template>

<script>
export default {
  name: "layout_footer",
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.layout_footer{
  text-align: center;
  color: rgba(0, 12, 25, 0.56);
  user-select: none;
  font-size: 12px;
  padding: 10px 20px;
  .company{
    margin-left: 14px;
    margin-right: 28px;
  }
}
</style>
