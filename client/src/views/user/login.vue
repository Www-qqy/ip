<template>
  <div class="login-container">
    <div class="video-container">
      <!-- <div :style="fixStyle" class="filter"></div> -->
      <video v-if="vedioCanPlay" autoplay loop class="login-vedio-bg" v-on:canplay="canplay" muted>
        <source :src="PATH_TO_MP4" type="video/mp4" />浏览器不支持 video 标签，建议升级浏览器。
      </video>
      <div class="login-bg" v-if="!vedioCanPlay">
        <img :src="PATH_TO_JPG" alt="背景" />
      </div>
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        label-width="150px"
      >
        <div class="login-error">{{ this.error }}</div>
        <el-form-item prop="email" label="邮箱">
          <el-input v-model="loginForm.email"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          native-type="submit"
          @click="login"
          style="width:100%"
        >登录</el-button>
        <div class="login-info">
          如果未注册账号请
          <router-link :to="{ name: 'register' }">点击注册</router-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import UserService from '../../services/UserService'
import mp4Path from '../../assets/login-bg.mp4'
import jpgPath from '../../assets/map-bg.jpg'
export default {
  data() {
    return {
      vedioCanPlay: false,
      fixStyle: '',
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
  created() {
    window.addEventListener('hashchange', this.afterQRScan)

    this.PATH_TO_JPG = jpgPath
    this.PATH_TO_MP4 = mp4Path
  },
  destroyed() {
    window.removeEventListener('hashchange', this.afterQRScan)
  },
  mounted: function() {
    window.onresize = () => {
      const windowWidth = document.body.clientWidth
      const windowHeight = document.body.clientHeight
      // const windowAspectRatio = windowHeight / windowWidth
      let videoWidth
      let videoHeight
      if (windowWidth < 1000) {
        this.vedioCanPlay = false
        videoWidth = windowWidth
        videoHeight = videoWidth * 0.5625
        this.fixStyle = {
          height: windowWidth * 0.5625 + 'px',
          width: windowWidth + 'px',
          'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
          'margin-left': 'initial'
        }
      } else {
        this.vedioCanPlay = true
        console.log('aaaaaaaaaaa', this.vedioCanPlay)
        videoHeight = windowHeight
        videoWidth = videoHeight / 0.5625
        this.fixStyle = {
          height: windowHeight + 'px',
          width: windowHeight / 0.5625 + 'px',
          'margin-left': (windowWidth - videoWidth) / 2 + 'px',
          'margin-bottom': 'initial'
        }
      }
    }
    window.onresize()
  },
  methods: {
    canplay() {
      this.vedioCanPlay = true
      console.log(this.vedioCanPlay)
    },
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
              this.$router.push('/track')
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

  background-color: #000000;
  width: 100%;
  top: 0;
  bottom: 0;
}
.login-form {
  position: relative;
  width: 430px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}
.login-info {
  text-align: right;
  font-size: 0.9rem;
  margin-top: 10px;
  color: #ffffff;
}
.login-error {
  color: #f56c6c;
}

.video-container {
  position: relative;
  top: 0;
  height: 100%;
  z-index: 0;
}
.login-vedio-bg {
  position: relative;
  height: 100%;
  z-index: 0;
}
.login-bg {
  position: relative;

  z-index: 0;
}
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: rgba(231, 230, 240, 0.5);
  padding: 20px;
  border-radius: 5px;
  color: white;
}

.el-form-item {
  margin-top: 20px;
}

.el-button {
  margin-top: 20px;
  height: 40px;
}
/deep/ .el-form-item__label {
  color: white;
}
/deep/ .el-input__inner {
  background-color: rgba(243, 239, 239, 0.3);
  color: white;
}

a {
  color: white;
}
</style>
