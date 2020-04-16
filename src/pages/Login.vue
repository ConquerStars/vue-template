<template>
  <div class="login">
    <a-form :form="form" class="form_box" @submit="handleSubmit">
      <h1>账号登录</h1>
      <a-form-item>
        <a-input type="text" v-decorator="dec.username" placeholder="用户名/账号" />
      </a-form-item>
      <a-form-item>
        <a-input-password v-decorator="dec.password" placeholder="密码" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" :loading="loading" html-type="submit" class="login_btn">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import {account} from '@/util/api'

export default {
  name: "login",
  data(){
    return {
      form: this.$form.createForm(this),
      dec: {
        username: ['username', {rules: [
          {required: true, message: '账号不能为空!'},
          { validator: (rule, value, callback)=> {
              let reg = new RegExp('^.{6,20}$', 'g')
              if (value && !reg.test(value)) {
                callback('长度为 6 ~ 20 位字符')
                return
              }
              callback()
            }
          }
        ]}],
        password: ['password', {rules: [{required: true, message: '密码不能为空!'}]}],
      },
      loading: false
    }
  },
  methods: {
    async handleSubmit(e){
      e.preventDefault()
      this.form.validateFields((err, values)=> {
        if(!err){
          this.loading = true
          console.log(values)
          setTimeout(() => {
            this.loading = false
          }, 800)
          account.doLogin(values).then(({data})=> {
            console.log(data)
            account.fetchUserInfo().then(({data})=> {
              this.$store.commit('setUserInfo', data)
              this.$router.replace('/dashboard')
            }).catch((e)=> {
              console.log('获取用户信息失败', e)
            })
          }).catch((e)=> {
            console.log('登录失败', e)
          }).finally(()=> {
            this.loading = false
          })
        }
      })
    }
  },
  mounted() {
    console.log('login')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.login{
  .form_box{
    position: absolute;
    width: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .login_btn{
      width: 100%;
    }
  }
}
</style>
