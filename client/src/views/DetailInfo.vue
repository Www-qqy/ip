<template>
  <div class="detail-info">
    <div class="detail-info-button" @click="detailInfoToTrack">
      <video
        v-if="vedioCanPlay"
        autoplay
        loop
        class="detail-info-button-vedio"
        v-on:canplay="canplay"
        muted
      >
        <source :src="PATH_TO_MP4" type="video/mp4" />浏览器不支持 video 标签，建议升级浏览器。
      </video>
      <div class="register-bg" v-if="!vedioCanPlay">
        <img :src="PATH_TO_JPG" alt="背景" />
      </div>
      <img class="detail-info-button-vedio-border" src="../assets/detail-info-border.png" alt />
    </div>
    <div class="detail-info-info">
      <img class="detail-info-info-border" src="../assets/detail-info-border.png" alt />
      <el-form ref="form" :model="form">
        <el-form-item label="攻击源IP地址 ：">
          <el-form-item v-model="form.name" :label="params[0]?params[0].ip:'Not Found'"></el-form-item>
        </el-form-item>

        <el-form-item label="攻击源位置 ：">
          <el-form-item
            v-model="form.name"
            :label="params[0]?params[0].country+params[0].province:'Not Found'"
          ></el-form-item>
        </el-form-item>
        <el-form-item label="攻击源经度 ：">
          <el-form-item v-model="form.name" :label="params[0]?params[0].longitude+'':'Not Found'"></el-form-item>
        </el-form-item>
        <el-form-item label="攻击源纬度 ：">
          <el-form-item v-model="form.name" :label="params[0]?params[0].latitude+'':'Not Found'"></el-form-item>
        </el-form-item>
        <el-form-item label="被攻击源IP ：">
          <el-form-item v-model="form.name" :label="params[1]?params[1].ip:'Not Found'"></el-form-item>
        </el-form-item>
        <el-form-item label="被攻击源位置 ：">
          <el-form-item
            v-model="form.name"
            :label="params[1]?params[1].country+params[1].province:'Not Found'"
          ></el-form-item>
        </el-form-item>
        <el-form-item label="被攻击源经度 ：">
          <el-form-item v-model="form.name" :label="params[1]?params[1].longitude+'':'Not Found'"></el-form-item>
        </el-form-item>
        <el-form-item label="被攻击源纬度 ：">
          <el-form-item v-model="form.name" :label="params[1]?params[1].latitude+'':'Not Found'"></el-form-item>
        </el-form-item>
        <el-form-item label="被攻击时间 ：">
          <el-form-item v-model="form.name" :label="params[2]?new Date(params[2])+'':'Not Found'"></el-form-item>
        </el-form-item>
        <el-form-item label="被攻击方式 ：">
          <el-form-item v-model="form.name" :label="params[3]"></el-form-item>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import mp4Path from '../assets/earth_Trim.mp4'
import jpgPath from '../assets/data-info-button.png'

export default {
  data() {
    return {
      params: [],
      vedioCanPlay: false,
      fixStyle: '',
      form: {
        name: ''
      }
    }
  },
  components: {},
  created() {
    window.addEventListener('hashchange', this.afterQRScan)

    this.PATH_TO_JPG = jpgPath
    this.PATH_TO_MP4 = mp4Path
    this.params = this.$route.params.data
    console.log('详情页面', this.$route.params.data)
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

  befoblueestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    detailInfoToTrack() {
      this.$router.push('/track')
    },
    canplay() {
      this.vedioCanPlay = true
      console.log(this.vedioCanPlay)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail-info {
  position: relative;
  height: 100vh;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
}
.detail-info-button {
  width: 40%;
  overflow: hidden;
}
.detail-info-button-vedio {
  width: 200%;
  margin-left: -50%;
}
.detail-info-button-vedio-border {
  position: absolute;
  width: 40%;
  height: 75%;
  top: 14%;
  left: 4%;
}
.detail-info-info-border {
  position: absolute;
  height: 75%;
  width: 40%;
  top: 14%;
  right: 5%;
}
.detail-info-info {
  height: 70vh;
  width: 40%;
}
.el-form-item {
  width: 300px;
}
/* deep*1 */
/deep/ .el-form-item__content {
  width: 300px;
}
.el-form {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
}
</style>
