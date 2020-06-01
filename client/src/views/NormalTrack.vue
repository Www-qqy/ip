<template>
  <div class="track">
    <div class="track-login">
      <div class="el-icon-user"></div>
      <div class="track-login-user">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{email}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>email: {{email}}</el-dropdown-item>
            <el-dropdown-item command="applyRole">role: {{role}}</el-dropdown-item>
            <el-dropdown-item>ip: {{ip}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <track-map></track-map>
  </div>
</template>
<script>
import TrackMap from '../components/TrackMap'
import RoleApplyService from '../services/RoleApplyService'
export default {
  data() {
    return {
      user: 'Admin',
      email: '1111111111@qq.com',
      role: 'normal-role',
      ip: '192.168.0.126',
      password: ''
    }
  },
  mounted: function() {
    this.email = this.$route.params.email
    this.role = this.$route.params.role

    console.log('hi', this.role)
    console.log('hii', this.email)
    console.log('hii', this.ip)

    // this.getIp()
  },
  components: {
    TrackMap
  },
  methods: {
    handleCommand(command) {
      this.$prompt('请输入理由', '提示', {
        title: '专业权限申请',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputErrorMessage: '请输入理由'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: '已提交申请，请等待审核 ' + value
          })
          RoleApplyService.enter({
            email: this.email,
            is_apply: 'true',
            reason: value
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
    },
    applyRole() {
      // this.$prompt('请输入理由', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      //   inputErrorMessage: '邮箱格式不正确'
      // })
      //   .then(({ value }) => {
      //     this.$message({
      //       type: 'success',
      //       message: '你的邮箱是: ' + value
      //     })
      //   })
      //   .catch(() => {
      //     this.$message({
      //       type: 'info',
      //       message: '取消输入'
      //     })
      //   })
      alert('hhhh')
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.track {
  border: 1px solid rgb(7, 10, 15);
  background-color: rgb(7, 10, 15);
  position: relative;
}
.track-login {
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(7, 10, 10, 0.3);
  z-index: 102;
  line-height: 60px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
  padding: 10px;
}
.el-dropdown-menu__item {
  margin-left: 20px;
  margin-right: 20px;
}
.track-login-user {
  width: 180px;
  color: rgba(255, 255, 255, 0.685);

  float: right;
}
.el-icon-user {
  color: rgba(255, 255, 255, 0.651);
  position: absolute;
  float: right;
  right: 180px;
  top: 50%;
  transform: translate(0, -50%);
  background-color: rgb(11, 51, 94, 0.8);
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
  padding: 10px;
}
.el-dropdown-menu__item {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
