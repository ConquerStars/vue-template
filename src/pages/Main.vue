<template>
  <div class="enterMain">
    <div class="loading_mask" v-if="!fetching">
      <a-spin class="loading">
        <a-icon slot="indicator" type="loading" spin />
      </a-spin>
      <span class="loading_msg">拼命加载中...</span>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'enterMain',
  computed: {
    fetching(){
      return this.$store.state.fetching
    }
  },
  data(){
    return {
    }
  },
  methods: {

  },
  mounted() {
    console.log('enterMain')
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
}
</style>
