
<template>
  <div class="data-info">
    <img class="xxx-bg" src="../assets/信息飘屏.jpg" />
    <el-button
      type="primary"
      icon="el-icon-arrow-right"
      class="data-info-lr-button data-info-right-button"
      circle
      @click="DataInfoToTrack"
    ></el-button>
    <el-button type="primary" class="to-detail" @click="DataInfoToDetail">hhhhh</el-button>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  methods: {
    DataInfoToTrack() {
      this.$router.push('/track')
    },
    DataInfoToDetail() {
      this.$router.push('/detail-info')
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
.data-info {
  position: relative;
}
.xxx-bg {
  width: 100%;
}
.data-info-lr-button {
  position: absolute;
  top: 46%;
  transform: translate(0, -50%);
  z-index: 106;
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
}

.data-info-right-button {
  right: 1%;
}
.el-button--primary:focus .el-button--primary:hover {
  background: #02617e;
}

/deep/ .el-icon-arrow-right {
  font-size: 34px;
  color: #f7f7f7;
}
</style>
