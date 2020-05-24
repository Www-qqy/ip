<template>
  <div class="track">
    <div class="track-login">
      <div class="el-icon-user"></div>
      <div class="track-login-user">
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
    <track-map></track-map>
  </div>
</template>
<script>
import TrackMap from '../components/TrackMap'
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
  components: {
    TrackMap
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
</style>
