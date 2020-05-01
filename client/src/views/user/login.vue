<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      label-width="150px"
    >
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="loginForm.email"> </el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="loginForm.password"> </el-input>
      </el-form-item>

      <el-button
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
export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
        comparePassword: ''
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
        },
        comparePassword: {
          type: 'string',
          required: true,
          trigger: 'blur',
          validator: function(rule, value, callback) {
            if (value === '') {
              callback(new Error('请再次输入密码'))
            } else if (value !== this.loginForm.password) {
              callback(new Error('两次输入的密码不一致'))
            } else {
              callback()
            }
          }.bind(this)
        }
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(valid => {
        console.log(valid)
        if (valid) {
          // TODO:login api
        }
      })
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
</style>
