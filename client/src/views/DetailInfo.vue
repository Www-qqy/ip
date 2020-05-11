<template>
  <div class="map">
    <div class="map-login">
      <div class="el-icon-user"></div>
      <div class="map-login-user">Administrator</div>
    </div>
    <div class="map-echarts">
      <img class="map-bg" src="../assets/detail-info.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  befoblueestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.map-bg {
  width: 100%;
}
.map {
  border: 1px solid rgb(21, 38, 48);
  background-color: rgb(21, 38, 48);
}
.map-login {
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(7, 10, 10, 0.3);
  z-index: 102;
  line-height: 60px;
}
.map-echarts {
  position: relative;
}

.map-echarts-color {
  height: 30px;
  line-height: 30px;
  display: flex;

  color: rgb(141, 141, 141);
  font-size: 12px;
}
.map-echarts-color-img {
  width: 30px;
  height: 16px;
  border-radius: 5px;
  margin-top: 7px;
  margin-right: 20px;
}
.map-echarts-info-red-img {
  background-color: #94533e;
}
.map-echarts-info-yellow-img {
  background-color: #947734;
}
.map-echarts-info-green-img {
  background-color: #39a793;
}
.echarts {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('../assets/map-bg.jpg');
}
.map-info {
  height: 100vh;
  width: 100%;
}
.map-login-user {
  width: 140px;
  color: rgba(255, 255, 255, 0.685);

  float: right;
}
.info-bg {
  width: 100%;
}
.el-icon-user {
  color: rgba(255, 255, 255, 0.651);
  position: absolute;
  float: right;
  right: 130px;
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
</style>
