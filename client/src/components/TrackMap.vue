<template>
  <div class="track-echarts">
    <div class="track-echarts-info">
      <div class="track-echarts-info-red track-echarts-color" @click="enter">
        <div class="track-echarts-info-red-img track-echarts-color-img"></div>
        <div class="track-echarts-info-red-text">>120</div>
      </div>
      <div class="track-echarts-info-yellow track-echarts-color">
        <div class="track-echarts-info-yellow-img track-echarts-color-img"></div>
        <div class="track-echarts-info-yellow-text">80~120</div>
      </div>

      <div class="track-echarts-info-green track-echarts-color">
        <div class="track-echarts-info-green-img track-echarts-color-img"></div>
        <div class="track-echarts-info-green-text">&lt;80</div>
      </div>
    </div>
    <div class="echarts">
      <div :class="className" :id="id" :style="{ height: height, width: width }" ref="myEchart"></div>
    </div>
    <div class="float-data-container">
      <div
        :class="list[i]&&list[i][1]&&list[i][1][1]&&list[i][1][1].ip==='192.168.0.126' ?'red-float-data':'float-data'"
        v-for="(item,i) in list"
        :key="i"
        @click="dataToDetail(list[i]?list[i][1]:'no signal')"
      >{{list[i]?list[i][0]:'no signal'}}</div>
    </div>
  </div>
</template>
<script>
import echarts from '../../node_modules/echarts'
import '../../node_modules/echarts/map/js/world.js'
import AttackPointService from '../services/AttackPointService'
import AttackService from '../services/AttackService'

export default {
  name: 'echarts',
  props: {
    className: {
      type: String,
      default: 'track-map'
    },
    id: {
      type: String,
      default: 'track-map'
    },
    width: {
      type: String,
      default: '240%'
    },
    height: {
      type: String,
      default: '120%'
    }
  },
  data() {
    return {
      list: [],
      attack: 0,
      attackedId: 0,
      attackId: 0,
      attackForm: [],
      longitude0: 0,
      longitude1: 0,
      latitude0: 0,
      latitude1: 0,
      error: '',
      loading: false,
      attackPointForm: {
        ip: '216.24.191.87',
        country: '美国',
        province: '加州',
        longitude: '-121.910642',
        latitude: '41.38028'
      },
      meansForm: ['病毒攻击', '黑客入侵', '欺骗技术攻击', '系统漏洞攻击']
    }
  },
  components: {
    //       Title,
    //       Search
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.initChart()
    // })
    var res = [
      [
        { coord: [-87.801833, 41.870975], value: 100 }, // 上海
        { coord: [-4.388361, 11.186148] }
      ],
      [
        { coord: [-118.24311, 34.052713], value: 100 },
        { coord: [-4.388361, 11.186148] }
      ]
    ]

    var that = this
    that.chart = echarts.init(that.$refs.myEchart)
    window.onresize = echarts.init(that.$refs.myEchart).resize
    function randomData() {
      return Math.round(Math.random() * 300)
    }
    var geoCoordMap = {
      上海: [121.4648, 31.2891],
      尼日利亚: [-4.388361, 11.186148],
      美国洛杉矶: [-118.24311, 34.052713],
      香港邦泰: [114.195466, 22.282751],
      美国芝加哥: [-87.801833, 41.870975],
      加纳库马西: [-4.62829, 7.72415],
      英国曼彻斯特: [-1.657222, 51.886863],
      德国汉堡: [10.01959, 54.38474],
      哈萨克斯坦阿拉木图: [45.326912, 41.101891],
      俄罗斯伊尔库茨克: [89.116876, 67.757906],
      巴西: [-48.678945, -10.493623],
      埃及达米埃塔: [31.815593, 31.418032],
      西班牙巴塞罗纳: [2.175129, 41.385064],
      柬埔寨金边: [104.88659, 11.545469],
      意大利米兰: [9.189948, 45.46623],
      乌拉圭蒙得维的亚: [-56.162231, -34.901113],
      莫桑比克马普托: [32.608571, -25.893473],
      阿尔及利亚阿尔及尔: [3.054275, 36.753027],
      阿联酋迪拜: [55.269441, 25.204514],
      匈牙利布达佩斯: [17.108519, 48.179162],
      澳大利亚悉尼: [150.993137, -33.675509],
      美国加州: [-121.910642, 41.38028],
      澳大利亚墨尔本: [144.999416, -37.781726],
      墨西哥: [-99.13187, 19.365711],
      加拿大温哥华: [-123.023921, 49.311753]
    }
    var BJData = [
      [
        {
          name: '尼日利亚',
          value: randomData(),
          ip: '193.26.31.104'
        },
        {
          name: '上海',
          ip: '192.42.26.100'
        }
      ],
      [
        {
          name: '美国洛杉矶',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '香港邦泰',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '美国芝加哥',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '加纳库马西',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '英国曼彻斯特',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '德国汉堡',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '哈萨克斯坦阿拉木图',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '俄罗斯伊尔库茨克',
          value: randomData()
        },
        {
          name: '墨西哥'
        }
      ],
      [
        {
          name: '巴西',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '埃及达米埃塔',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '西班牙巴塞罗纳',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '柬埔寨金边',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '意大利米兰',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '乌拉圭蒙得维的亚',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '莫桑比克马普托',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '阿尔及利亚阿尔及尔',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '阿联酋迪拜',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '匈牙利布达佩斯',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '澳大利亚悉尼',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '美国加州',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '澳大利亚墨尔本',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '墨西哥',
          value: randomData()
        },
        {
          name: '上海'
        }
      ],
      [
        {
          name: '加拿大温哥华',
          value: randomData()
        },
        {
          name: '上海'
        }
      ]
    ]
    var series = []
    ;[['上海', BJData]].forEach(function(item, i) {
      series.push(
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            //     涟漪特效
            period: 5, //     动画时间，值越小速度越快
            brushType: 'stroke', //     波纹绘制方式 stroke, fill
            scale: 6 //     波纹圆环最大限制，值越大波纹越大
          },
          label: {
            normal: {
              show: true,
              position: 'right', //     显示位置
              offset: [5, 0], //     偏移设置
              formatter: '{b}' //     圆环显示文字
            },
            emphasis: {
              show: true,
              color: '#FF6A6A'
            }
          },
          symbol: 'circle',
          symbolSize: function(val) {
            return 4 + val[2] / 1000 //     圆环大小
          },
          itemStyle: {
            normal: {
              show: true
            },
            emphasis: {
              show: true,
              color: '#FF6A6A'
            }
          },
          data: item[1].map(function(dataItem) {
            return {
              name: dataItem[0].name,
              value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
            }
          })
        },
        //     被攻击点
        {
          type: 'scatter', // 气泡图
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            period: 4,
            brushType: 'stroke',
            scale: 4
          },
          label: {
            normal: {
              show: true,
              color: '#942b40', //     上海文字
              position: 'right',
              formatter: '{b}'
            },
            emphasis: {
              show: true,
              color: '#FF6A6A'
            }
          },
          symbol: 'pin',
          symbolSize: 20,
          itemStyle: {
            normal: {
              show: true,
              color: '#942b40' //     上海图标
            },
            emphasis: {
              show: true,
              color: '#FF6A6A'
            }
          },
          data: [
            {
              name: item[0],
              value: geoCoordMap[item[0]].concat([100]),
              visualMap: false
            }
          ]
        }
      )
    })
    that.chart.setOption({
      tooltip: {
        trigger: 'item',
        backgroundColor: '#1540a1',
        borderColor: '#FFFFCC',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100',
        formatter: function(params, ticket, callback) {
          //     根据业务自己拓展要显示的内容
          var res = ''
          var name = params.name
          var value = params.value[params.seriesIndex + 1]
          var add = 'hahaha'
          res =
            "<span style='color:#fff;'>" +
            name +
            '</span><br/>数据：' +
            value +
            add
          return res
        }
      },
      visualMap: {
        //     图例值控制
        show: false, // 值
        type: 'piecewise',
        color: 'white',
        pieces: [
          {
            max: 80,
            color: '#39a793' //     huang色图标及文字
          },
          {
            min: 80,
            max: 120,
            color: '#947734'
          },
          {
            min: 120,
            color: '#94533e'
          }
        ],
        calculable: true
      }, // 地图上文字的颜色
      geo: {
        map: 'world',
        show: true,
        label: {
          emphasis: {
            show: false
          }
        },
        roam: false, //     是否允许缩放
        layoutCenter: ['50%', '50%'], //     地图位置
        layoutSize: '160%',
        itemStyle: {
          normal: {
            show: 'true',
            color: '#04284e', //     地图背景色
            borderColor: '#5bc1c9' //     省市边界线
          },
          emphasis: {
            show: 'true',
            color: 'rgba(37, 43, 61, .5)' //     悬浮背景
          }
        }
      },

      series: series
    })
    setInterval(function() {
      that.attack += 1
      that.randomId()
      var num = Math.floor(Math.random() * 4)
      var time = new Date().getTime()
      var mean = that.meansForm[num]
      AttackService.enter({
        attack: that.attack,
        attacker_id: that.attackId,
        suffer_id: that.attackedId,
        time: time,
        means: mean
      })

      console.log(res, geoCoordMap, BJData)
      Promise.all([
        that.getAttackPointById(that.attackId),
        that.getAttackPointById(that.attackedId)
      ]).then(value => {
        console.log('***********************', value)
        if (res.length === 10) {
          res = []
        }
        res.push([
          { coord: [value[0].longitude, value[0].latitude], value: 100 }, // 上海
          { coord: [value[1].longitude, value[1].latitude] }
        ])
        if (that.list.length === 10) {
          that.list = []
        }
        that.list.push([
          value[0].country +
            value[0].province +
            ' >>>> ' +
            value[1].country +
            value[1].province,
          [value[0], value[1], time, mean]
        ])
        //       把配置和数据放这里
        ;[['上海', BJData]].forEach(function(item, i) {
          series.push({
            name: '攻击线1',
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              color: '#0bc7f3',
              period: 1, //     箭头指向速度，值越小速度越快
              trailLength: 0.1, //     特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: 'arrow', //     箭头图标
              symbolSize: 2.5 //     图标大小
            },
            lineStyle: {
              normal: {
                color: '#0bc7f3',
                width: 0, //     尾迹线条宽度
                opacity: 0.1, //     尾迹线条透明度
                curveness: 0.1 //     尾迹线条曲直度
              }
            },

            data: res
          })
        })
        that.chart.setOption({
          series: series
        })
        //   var svg ='path://     M32.597,9.782 L30.475,11.904 C30.085,12.294 29.452,12.294 29.061,11.904 C28.671,11.513 28.671,10.880 29.061,10.489 L31.182,8.368 C31.573,7.978 32.206,7.978 32.597,8.368 C32.987,8.759 32.987,9.392 32.597,9.782 ZM30.000,30.500 C30.000,31.328 29.329,32.000 28.500,32.000 L5.500,32.000 C4.672,32.000 4.000,31.328 4.000,30.500 C4.000,29.672 4.672,29.000 5.500,29.000 L8.009,29.000 L8.009,18.244 C8.009,13.139 12.034,9.000 17.000,9.000 C21.966,9.000 25.992,13.139 25.992,18.244 L25.992,29.000 L28.500,29.000 C29.329,29.000 30.000,29.672 30.000,30.500 ZM17.867,14.444 L13.000,22.000 L17.000,22.000 L17.133,26.556 L21.000,20.000 L17.000,20.000 L17.867,14.444 ZM25.221,6.327 C25.033,6.846 24.459,7.113 23.940,6.924 C23.421,6.735 23.153,6.162 23.342,5.643 L24.368,2.823 C24.557,2.304 25.131,2.037 25.650,2.226 C26.169,2.415 26.436,2.989 26.248,3.508 L25.221,6.327 ZM17.000,5.000 C16.448,5.000 16.000,4.552 16.000,4.000 L16.000,1.000 C16.000,0.448 16.448,0.000 17.000,0.000 C17.552,0.000 18.000,0.448 18.000,1.000 L18.000,4.000 C18.000,4.552 17.552,5.000 17.000,5.000 ZM10.028,7.197 C9.509,7.386 8.935,7.118 8.746,6.599 L7.720,3.780 C7.532,3.261 7.799,2.687 8.318,2.498 C8.837,2.309 9.411,2.577 9.600,3.096 L10.626,5.915 C10.815,6.434 10.547,7.008 10.028,7.197 ZM3.354,12.268 L1.232,10.146 C0.842,9.756 0.842,9.123 1.232,8.732 C1.623,8.342 2.256,8.342 2.646,8.732 L4.768,10.854 C5.158,11.244 5.158,11.877 4.768,12.268 C4.377,12.658 3.744,12.658 3.354,12.268 Z'
      })
    }, 3000)
  },

  methods: {
    dataToDetail(data) {
      console.log(data)
      this.$router.push({
        name: 'DetailInfo',
        params: { data }
      })
    },
    getTime() {
      var yy = new Date().getFullYear()
      var mm = new Date().getMonth() + 1
      var dd = new Date().getDate()
      var hh = new Date().getHours()
      var mf =
        new Date().getMinutes() < 10
          ? '0' + new Date().getMinutes()
          : new Date().getMinutes()
      var ss =
        new Date().getSeconds() < 10
          ? '0' + new Date().getSeconds()
          : new Date().getSeconds()
      return yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss
    },
    async enter() {
      try {
        const response = await AttackPointService.enter({
          ip: this.attackPointForm.ip,
          country: this.attackPointForm.country,
          province: this.attackPointForm.province,
          longitude: this.attackPointForm.longitude,
          latitude: this.attackPointForm.latitude
        })
        if (response.data.code !== 200) {
          this.error = response.data.error
          console.log(this.error)
        } else {
          // TODO：将用户信息和token保存到vuex
          console.log('enter succeed!', response.data)
        }
        this.loading = false
        console.log(response)
      } catch (error) {}
    },
    randomId() {
      this.attackId = Math.floor(Math.random() * 22) + 1
      this.attackedId = Math.floor(Math.random() * 22) + 1
      while (this.attackId === this.attackedId) {
        this.attackedId = Math.floor(Math.random() * 22) + 1
      }
    },
    async getAttackPointById(id) {
      try {
        const response = await AttackPointService.getAttackPointById(id)
        console.log('trying', response.data, 'kkk', id === this.attackedId)
        this.longitude0 = response.data.attackPoint.longitude
        return response.data.attackPoint
      } catch (error) {}
    },
    async getAttackByAttack(attack) {
      try {
        const response = await AttackService.getAttackByAttack(attack)
        console.log(response)
      } catch (error) {}
    },
    trackToDataInfo() {
      this.$router.push('/data-info')
    },
    trackToDataAnalyze() {
      this.$router.push('/data-analyze')
    },
    initChart() {
      // this.getTwoAttackPoint()
    }
  }
}
</script>
<style>
.track-echarts {
  position: relative;
}
.track-echarts-info {
  height: 100px;
  z-index: 101;
  width: 110px;
  position: absolute;
  top: 80vh;
  left: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.track-button {
  height: 80px;
  position: absolute;
  bottom: 0;
}
.track-echarts-color {
  height: 30px;
  line-height: 30px;
  display: flex;

  color: rgb(141, 141, 141);
  font-size: 12px;
}
.track-echarts-color-img {
  width: 30px;
  height: 16px;
  border-radius: 5px;
  margin-top: 7px;
  margin-right: 20px;
}
.track-echarts-info-red-img {
  background-color: #94533e;
}
.track-echarts-info-yellow-img {
  background-color: #947734;
}
.track-echarts-info-green-img {
  background-color: #39a793;
}
.echarts {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('../assets/map-bg.jpg');
  margin-top: 50px;
}
.track-info {
  height: 100vh;
  width: 100%;
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

.float-data {
  z-index: 100000;
  width: 300px;
  height: 50px;
  color: rgb(130, 245, 239);
  font-size: 16px;
  margin-left: -20px;
  position: relative;
  line-height: 50px;
  animation: 10s linear 1s running slidein;
}
.red-float-data {
  z-index: 100000;
  width: 300px;
  height: 50px;
  color: red;
  margin-top: 5px;
  border: solid 1px rgb(150, 0, 0);
  border-radius: 25px;
  font-size: 16px;
  margin-left: -20px;
  line-height: 50px;
  position: relative;
  animation: 10s linear 1s running slideinred;
}
@keyframes slidein {
  from {
    margin-left: -20px;
    color: rgb(130, 245, 239);
  }
  to {
    margin-left: 100%;
    color: rgb(157, 187, 8);
  }
}
@keyframes slideinred {
  from {
    margin-left: -20px;
    color: rgb(240, 12, 12);
    border: solid 1px rgb(150, 0, 0);
    border-radius: 25px;
  }
  to {
    margin-left: 100%;
    color: rgb(248, 190, 0);
    border: solid 1px rgb(243, 168, 6);
    border-radius: 25px;
  }
}
.float-data-container {
  width: 210vh;
  height: 70vh;
  background-color: rgb(0, 2, 31);
}
</style>
