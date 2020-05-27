<template>
  <div class="track">
    <div class="track-login" @click="userInfo">
      <div class="el-icon-user"></div>
      <div class="track-login-user">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{this.email}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>email: {{this.email}}</el-dropdown-item>
            <el-dropdown-item>role: {{this.role}}</el-dropdown-item>
            <el-dropdown-item>ip: {{this.ip}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <el-button
      type="primary"
      icon="el-icon-arrow-right"
      class="track-lr-button track-right-button"
      circle
      @click="trackToDataAnalyze"
    ></el-button>
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
    //       Title,
    //       Search
    TrackMap
  },

  methods: {
    trackToDataInfo() {
      this.$router.push('/data-info')
    },
    trackToDataAnalyze() {
      this.$router.push('/data-analyze')
    },
    userInfo() {
      console.log('user,hi')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.track-lr-button {
  position: absolute;
  top: 30%;
  transform: translate(0, -50%);
  z-index: 106;
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
}
.track-left-button {
  left: 1%;
}
.track-right-button {
  right: 1%;
}
.el-button--primary:focus .el-button--primary:hover {
  background: #02617e;
}
/* deep*2 */
/deep/ .el-icon-arrow-left {
  font-size: 34px;
  color: #f7f7f7;
}
/deep/ .el-icon-arrow-right {
  font-size: 34px;
  color: #f7f7f7;
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
.track-login-user {
  width: 180px;
  color: rgba(255, 255, 255, 0.685);

  float: right;
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
