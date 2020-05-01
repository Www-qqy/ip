<template>
  <div class="register-container">
    <el-form
      ref="registerForm"
      :model="registerForm"
      :rules="registerRules"
      class="register-form"
      label-width="150px"
    >
      <div class="register-error">{{ this.error }}</div>
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="registerForm.email"> </el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="registerForm.password" type="password"> </el-input>
      </el-form-item>

      <el-form-item prop="comparePassword" label="确认密码">
        <el-input v-model="registerForm.comparePassword" type="password">
        </el-input>
      </el-form-item>
      <el-button
        :loading="loading"
        type="primary"
        native-type="submit"
        @click="register"
        style="width:100%"
        >注册</el-button
      >
      <div class="register-info">
        如果已注册账号请<router-link :to="{ name: 'login' }"
          >点击登录</router-link
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
      registerForm: {
        email: '',
        password: '',
        comparePassword: ''
      },
      registerRules: {
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
            } else if (value !== this.registerForm.password) {
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
    register() {
      this.$refs.registerForm.validate(async valid => {
        if (valid) {
          // TODO:register api
          this.loading = true
          this.error = ''
          try {
            const response = await UserService.register({
              email: this.registerForm.email,
              password: this.registerForm.password
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
.register-container {
  position: absolute;

  background-color: #2d3a4b;
  width: 100%;
  top: 0;
  bottom: 0;
}
.register-form {
  position: relative;
  width: 430px;
  margin: 130px auto 0;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}
.register-info {
  text-align: right;
  font-size: 0.9rem;
  margin-top: 10px;
  color: #909399;
}
.register-error {
  color: #f56c6c;
}
</style>
