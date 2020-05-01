<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      label-width="150px"
    >
      <div class="login-error">{{ this.error }}</div>
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="loginForm.email"> </el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="loginForm.password" type="password"> </el-input>
      </el-form-item>
      <el-button
        :loading="loading"
        type="primary"
        native-type="submit"
        @click="login"
        style="width:100%"
        >登录</el-button
      >
      <div class="login-info">
        如果未注册账号请<router-link :to="{ name: 'register' }"
          >点击注册</router-link
        >
      </div>
    </el-form>
  </div>
</template>

<script>
import UserService from '../../services/UserService'
export default {
  data() {
    return {
      error: '',
      loading: false,
      loginForm: {
        email: '',
        password: ''
      },
      loginRules: {
        email: {
          type: 'email',
          required: true,
          message: '请输入有效的邮箱地址',
          trigger: 'blur'
        },
        password: {
          type: 'string',
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          // TODO:login api
          this.loading = true
          this.error = ''
          try {
            const response = await UserService.login({
              email: this.loginForm.email,
              password: this.loginForm.password
            })
            if (response.data.code !== 200) {
              this.error = response.data.error
            } else {
              // TODO：将用户信息和token保存到vuex
              this.$router.push('/')
            }
            this.loading = false
            console.log(response)
          } catch (error) {}
        }
      })
    },
    async test() {
      console.log('22222')
      const user = await UserService.getUserById()
      console.log(user)
    }
  }
}
</script>

<style scoped>
.login-container {
  position: absolute;

  background-color: #2d3a4b;
  width: 100%;
  top: 0;
  bottom: 0;
}
.login-form {
  position: relative;
  width: 430px;
  margin: 130px auto 0;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}
.login-info {
  text-align: right;
  font-size: 0.9rem;
  margin-top: 10px;
  color: #909399;
}
.login-error {
  color: #f56c6c;
}
</style>
