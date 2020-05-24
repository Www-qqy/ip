<template>
  <div class="admin">
    <div class="admin-login">
      <div class="el-icon-user"></div>
      <div class="admin-login-user">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{email}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>email: {{email}}</el-dropdown-item>
            <el-dropdown-item>role: {{role}}</el-dropdown-item>
            <el-dropdown-item>ip: {{ip}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: 'Admin',
      email: '',
      role: '',
      ip: '192.168.0.126'
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
  components: {},
  methods: {}
}
</script>
<style>
.admin {
  border: 1px solid rgb(12, 53, 126);
  background-color: rgb(1, 28, 75);
  background-image: url('../assets/map-bg.jpg');
  position: relative;
  width: 100vh;
  height: 100vh;
}
.admin-login {
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(7, 10, 10, 0.3);
  z-index: 102;
  line-height: 60px;
}

.admin-login-user {
  width: 170px;
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
}
.el-dropdown-menu__item {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
