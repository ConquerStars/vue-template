<template>
  <div class="login">
    <a-form :form="form">
      <a-form-item>
        <a-input placeholder="请输入账号或者手机号" v-decorator="dec.username" />
      </a-form-item>
      <a-form-item>
        <a-input-password placeholder="请输入密码" @keyup.enter="doLogin" v-decorator="dec.password" />
      </a-form-item>
      <a-form-item>
        <a-button @click="doLogin">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
// import {routerMatch} from '@/util/utils'

export default {
  name: "login",
  data(){
    return {
      form: this.$form.createForm(this),
      dec: {
        username: ['username', { rules: [{ required: true, message: '账号不能为空！' }], initialValue: '' }],
        password: ['password', { rules: [{ required: true, message: "密码不能为空!" }], initialValue: '' },
        ],
      }
    }
  },
  methods: {
    doLogin(){
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values)
          // TODO login
          // 登录成功需将 菜单 角色 存入本地缓存重
          // localStorage.setItem('menus', menus)
          // localStorage.setItem('roles', roles)
          // 如果有重定向参数 则跳转到重定向url
          // let redirect = this.$route.query.redirect
          // this.$router.replace((redirect && redirect != '/') ? redirect : routerMatch(data.menus))
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.login{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  transform: translate(-50%, -50%);
}
</style>
