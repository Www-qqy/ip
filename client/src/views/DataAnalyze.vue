<template>
  <div class="map">
    <div class="map-login">
      <div class="el-icon-user"></div>
      <div class="map-login-user">Administrator</div>
    </div>
    <div class="map-echarts">
      <div class="echarts">
        <div :class="className" :id="id" :style="{ height: height, width: width }" ref="myEchart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from '../../node_modules/echarts'
import '../../node_modules/echarts/map/js/world.js'

export default {
  name: 'echarts',
  props: {
    className: {
      type: String,
      default: 'data-map'
    },
    id: {
      type: String,
      default: 'data-map'
    },
    width: {
      type: String,
      default: '200%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
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
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.myEchart)
      window.onresize = echarts.init(this.$refs.myEchart).resize

      //       把配置和数据放这里

      //   var svg ='path://     M32.597,9.782 L30.475,11.904 C30.085,12.294 29.452,12.294 29.061,11.904 C28.671,11.513 28.671,10.880 29.061,10.489 L31.182,8.368 C31.573,7.978 32.206,7.978 32.597,8.368 C32.987,8.759 32.987,9.392 32.597,9.782 ZM30.000,30.500 C30.000,31.328 29.329,32.000 28.500,32.000 L5.500,32.000 C4.672,32.000 4.000,31.328 4.000,30.500 C4.000,29.672 4.672,29.000 5.500,29.000 L8.009,29.000 L8.009,18.244 C8.009,13.139 12.034,9.000 17.000,9.000 C21.966,9.000 25.992,13.139 25.992,18.244 L25.992,29.000 L28.500,29.000 C29.329,29.000 30.000,29.672 30.000,30.500 ZM17.867,14.444 L13.000,22.000 L17.000,22.000 L17.133,26.556 L21.000,20.000 L17.000,20.000 L17.867,14.444 ZM25.221,6.327 C25.033,6.846 24.459,7.113 23.940,6.924 C23.421,6.735 23.153,6.162 23.342,5.643 L24.368,2.823 C24.557,2.304 25.131,2.037 25.650,2.226 C26.169,2.415 26.436,2.989 26.248,3.508 L25.221,6.327 ZM17.000,5.000 C16.448,5.000 16.000,4.552 16.000,4.000 L16.000,1.000 C16.000,0.448 16.448,0.000 17.000,0.000 C17.552,0.000 18.000,0.448 18.000,1.000 L18.000,4.000 C18.000,4.552 17.552,5.000 17.000,5.000 ZM10.028,7.197 C9.509,7.386 8.935,7.118 8.746,6.599 L7.720,3.780 C7.532,3.261 7.799,2.687 8.318,2.498 C8.837,2.309 9.411,2.577 9.600,3.096 L10.626,5.915 C10.815,6.434 10.547,7.008 10.028,7.197 ZM3.354,12.268 L1.232,10.146 C0.842,9.756 0.842,9.123 1.232,8.732 C1.623,8.342 2.256,8.342 2.646,8.732 L4.768,10.854 C5.158,11.244 5.158,11.877 4.768,12.268 C4.377,12.658 3.744,12.658 3.354,12.268 Z'
      var data = [
        {
          time: '3.16',
          data: [
            { name: 'China', value: [81116, '中国'] },
            { name: 'Italy', value: [24747, '意大利'] },
            { name: 'Iran', value: [14991, '伊朗'] },
            { name: 'Corea', value: [8236, '韩国'] },
            { name: 'Spain', value: [7753, '西班牙'] },
            { name: 'France', value: [5380, '法国'] },
            { name: 'Germany', value: [4838, '德国'] },
            { name: 'United States', value: [1678, '美国'] },
            { name: 'United Kingdom', value: [1395, '英国'] },
            { name: 'Japan', value: [814, '日本'] }
          ]
        },
        {
          time: '3.17',
          data: [
            { name: 'China', value: [81151, '中国'] },
            { name: 'Italy', value: [27980, '意大利'] },
            { name: 'Iran', value: [16169, '伊朗'] },
            { name: 'Spain', value: [9191, '西班牙'] },
            { name: 'Corea', value: [8320, '韩国'] },
            { name: 'France', value: [6573, '法国'] },
            { name: 'Germany', value: [6012, '德国'] },
            { name: 'United States', value: [3503, '美国'] },
            { name: 'United Kingdom', value: [1547, '英国'] },
            { name: 'Japan', value: [829, '日本'] }
          ]
        },
        {
          time: '3.18',
          data: [
            { name: 'China', value: [81235, '中国'] },
            { name: 'Italy', value: [31506, '意大利'] },
            { name: 'Iran', value: [17361, '伊朗'] },
            { name: 'Spain', value: [11178, '西班牙'] },
            { name: 'Corea', value: [8413, '韩国'] },
            { name: 'France', value: [7652, '法国'] },
            { name: 'Germany', value: [7156, '德国'] },
            { name: 'United States', value: [3536, '美国'] },
            { name: 'United Kingdom', value: [1954, '英国'] },
            { name: 'Japan', value: [898, '日本'] }
          ]
        },
        {
          time: '3.19',
          data: [
            { name: 'China', value: [81300, '中国'] },
            { name: 'Italy', value: [35713, '意大利'] },
            { name: 'Iran', value: [18407, '伊朗'] },
            { name: 'Spain', value: [13716, '西班牙'] },
            { name: 'France', value: [9043, '法国'] },
            { name: 'Corea', value: [8652, '韩国'] },
            { name: 'Germany', value: [8198, '德国'] },
            { name: 'United States', value: [7087, '美国'] },
            { name: 'United Kingdom', value: [2630, '英国'] },
            { name: 'Japan', value: [959, '日本'] }
          ]
        },
        {
          time: '3.20',
          data: [
            { name: 'China', value: [81416, '中国'] },
            { name: 'Italy', value: [47021, '意大利'] },
            { name: 'Spain', value: [19980, '西班牙'] },
            { name: 'Iran', value: [19644, '伊朗'] },
            { name: 'Germany', value: [18323, '德国'] },
            { name: 'France', value: [12475, '法国'] },
            { name: 'United States', value: [10442, '美国'] },
            { name: 'Corea', value: [8799, '韩国'] },
            { name: 'United Kingdom', value: [3983, '英国'] },
            { name: 'Japan', value: [969, '日本'] }
          ]
        },
        {
          time: '3.21',
          data: [
            { name: 'China', value: [81498, '中国'] },
            { name: 'Italy', value: [53578, '意大利'] },
            { name: 'Spain', value: [24926, '西班牙'] },
            { name: 'Germany', value: [21463, '德国'] },
            { name: 'Iran', value: [20610, '伊朗'] },
            { name: 'United States', value: [15219, '美国'] },
            { name: 'France', value: [14296, '法国'] },
            { name: 'Corea', value: [8897, '韩国'] },
            { name: 'United Kingdom', value: [5018, '英国'] },
            { name: 'Japan', value: [1054, '日本'] }
          ]
        },
        {
          time: '3.22',
          data: [
            { name: 'China', value: [81600, '中国'] },
            { name: 'Italy', value: [53578, '意大利'] },
            { name: 'Spain', value: [24926, '西班牙'] },
            { name: 'Iran', value: [21638, '伊朗'] },
            { name: 'Germany', value: [21463, '德国'] },
            { name: 'United States', value: [15219, '美国'] },
            { name: 'France', value: [14296, '法国'] },
            { name: 'Corea', value: [8897, '韩国'] },
            { name: 'United Kingdom', value: [5018, '英国'] },
            { name: 'Turkey', value: [1236, '土耳其'] }
          ]
        },
        {
          time: '3.23',
          data: [
            { name: 'China', value: [81747, '中国'] },
            { name: 'Italy', value: [59138, '意大利'] },
            { name: 'United States', value: [31573, '美国'] },
            { name: 'Spain', value: [28572, '西班牙'] },
            { name: 'Germany', value: [24774, '德国'] },
            { name: 'Iran', value: [23049, '伊朗'] },
            { name: 'France', value: [15821, '法国'] },
            { name: 'Corea', value: [8961, '韩国'] },
            { name: 'United Kingdom', value: [5687, '英国'] },
            { name: 'Turkey', value: [1529, '土耳其'] }
          ]
        },
        {
          time: '3.24',
          data: [
            { name: 'China', value: [81847, '中国'] },
            { name: 'Italy', value: [63927, '意大利'] },
            { name: 'United States', value: [42164, '美国'] },
            { name: 'Spain', value: [33089, '西班牙'] },
            { name: 'Germany', value: [29212, '德国'] },
            { name: 'Iran', value: [24811, '伊朗'] },
            { name: 'France', value: [19615, '法国'] },
            { name: 'Corea', value: [9037, '韩国'] },
            { name: 'United Kingdom', value: [6654, '英国'] },
            { name: 'Australia', value: [4486, '澳大利亚'] }
          ]
        },
        {
          time: '3.25',
          data: [
            { name: 'China', value: [81960, '中国'] },
            { name: 'Italy', value: [69176, '意大利'] },
            { name: 'United States', value: [51914, '美国'] },
            { name: 'Spain', value: [39673, '西班牙'] },
            { name: 'Germany', value: [31554, '德国'] },
            { name: 'Iran', value: [27017, '伊朗'] },
            { name: 'France', value: [22025, '法国'] },
            { name: 'Corea', value: [9241, '韩国'] },
            { name: 'United Kingdom', value: [8081, '英国'] },
            { name: 'Australia', value: [5282, '澳大利亚'] }
          ]
        },
        {
          time: '3.26',
          data: [
            { name: 'China', value: [82078, '中国'] },
            { name: 'Italy', value: [74386, '意大利'] },
            { name: 'United States', value: [63570, '美国'] },
            { name: 'Spain', value: [47610, '西班牙'] },
            { name: 'Germany', value: [36508, '德国'] },
            { name: 'Iran', value: [29406, '伊朗'] },
            { name: 'France', value: [24920, '法国'] },
            { name: 'United Kingdom', value: [9533, '英国'] },
            { name: 'Corea', value: [9332, '韩国'] },
            { name: 'Turkey', value: [3629, '土耳其'] }
          ]
        },
        {
          time: '3.27',
          data: [
            { name: 'China', value: [82213, '中国'] },
            { name: 'Italy', value: [80539, '意大利'] },
            { name: 'United States', value: [68334, '美国'] },
            { name: 'Spain', value: [56188, '西班牙'] },
            { name: 'Germany', value: [42288, '德国'] },
            { name: 'Iran', value: [32332, '伊朗'] },
            { name: 'France', value: [28786, '法国'] },
            { name: 'United Kingdom', value: [11662, '英国'] },
            { name: 'Corea', value: [9332, '韩国'] },
            { name: 'Turkey', value: [5698, '土耳其'] }
          ]
        },
        {
          time: '3.28',
          data: [
            { name: 'Italy', value: [86498, '意大利'] },
            { name: 'United States', value: [85228, '美国'] },
            { name: 'China', value: [82341, '中国'] },
            { name: 'Spain', value: [64059, '西班牙'] },
            { name: 'Germany', value: [48582, '德国'] },
            { name: 'Iran', value: [35408, '伊朗'] },
            { name: 'France', value: [32542, '法国'] },
            { name: 'United Kingdom', value: [14547, '英国'] },
            { name: 'Corea', value: [9478, '韩国'] },
            { name: 'Australia', value: [7697, '澳大利亚'] }
          ]
        },
        {
          time: '3.29',
          data: [
            { name: 'United States', value: [103321, '美国'] },
            { name: 'Italy', value: [92472, '意大利'] },
            { name: 'China', value: [82446, '中国'] },
            { name: 'Spain', value: [72248, '西班牙'] },
            { name: 'Germany', value: [52547, '德国'] },
            { name: 'Iran', value: [38309, '伊朗'] },
            { name: 'France', value: [37145, '法国'] },
            { name: 'United Kingdom', value: [17093, '英国'] },
            { name: 'Corea', value: [9583, '韩国'] },
            { name: 'Turkey', value: [9217, '土耳其'] }
          ]
        },
        {
          time: '3.30',
          data: [
            { name: 'United States', value: [122653, '美国'] },
            { name: 'Italy', value: [97689, '意大利'] },
            { name: 'China', value: [82544, '中国'] },
            { name: 'Spain', value: [78797, '西班牙'] },
            { name: 'Germany', value: [57298, '德国'] },
            { name: 'Iran', value: [41495, '伊朗'] },
            { name: 'France', value: [39642, '法国'] },
            { name: 'United Kingdom', value: [19526, '英国'] },
            { name: 'Corea', value: [9661, '韩国'] },
            { name: 'Turkey', value: [9271, '土耳其'] }
          ]
        },
        {
          time: '3.31',
          data: [
            { name: 'United States', value: [140640, '美国'] },
            { name: 'Italy', value: [101739, '意大利'] },
            { name: 'Spain', value: [85195, '西班牙'] },
            { name: 'China', value: [82630, '中国'] },
            { name: 'Germany', value: [61913, '德国'] },
            { name: 'Iran', value: [44606, '伊朗'] },
            { name: 'France', value: [43977, '法国'] },
            { name: 'United Kingdom', value: [22145, '英国'] },
            { name: 'Turkey', value: [13531, '土耳其'] },
            { name: 'Corea', value: [9887, '韩国'] }
          ]
        }
      ]
      var option = []
      for (var i = 0; i < data.length; i++) {
        // 计算其余国家GDP
        option.push({
          visualMap: [
            {
              dimension: 0,
              left: 0, // 左下角高低柱
              bottom: '5%',
              itemWidth: 12,
              min: data[i].data[9].value[0],
              max: data[i].data[0].value[0],
              text: ['高', '低'],
              textStyle: {
                color: '#ddd'
              },
              inRange: {
                color: ['#39a793', '#947734', '#94533e', '#993300']
              }
            }
          ],
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.1],
            axisLabel: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#ddd'
              }
            }
          },
          yAxis: {
            type: 'category',
            axisLabel: {
              textStyle: {
                color: '#ddd' // 左下角图表y轴文字
              }
            },
            axisLine: {
              lineStyle: {
                color: '#ddd'
              }
            },
            data: data[i].data.map(function(ele) {
              return ele.value[1]
            })
          },
          series: [
            {
              id: 'map',
              data: data[i].data
            },
            {
              id: 'bar',
              data: data[i].data
                .map(function(ele) {
                  return ele.value[0]
                })
                .sort(function(a, b) {
                  return a > b
                })
            }
          ]
        })
      }
      this.chart.setOption({
        baseOption: {
          animationDurationUpdate: 1000,
          animationEasingUpdate: 'quinticInOut',
          timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 2000,
            left: null,
            right: 5, // 右侧数据轴
            top: 70,
            bottom: 20,
            width: 46,
            height: null,
            label: {
              normal: {
                textStyle: {
                  color: '#ddd' // 文字
                }
              },
              emphasis: {
                textStyle: {
                  color: '#fff'
                }
              }
            },
            symbol: 'none',
            lineStyle: {
              color: '#555' // 轴
            },
            checkpointStyle: {
              color: '#bbb', // 轴上小圆点
              borderColor: '#777', // 小圆点边
              borderWidth: 1
            },
            controlStyle: {
              showNextBtn: false,
              showPrevBtn: false,
              normal: {
                color: '#666', // 不知道是啥
                borderColor: '#666'
              },
              emphasis: {
                color: '#aaa',
                borderColor: '#aaa'
              }
            },
            data: data.map(function(ele) {
              return ele.time
            })
          },
          backgroundColor: 'rgba(255,255,255, 0)',
          title: {
            text: '5月16日至5月31日世界累计被攻击数前十动态',
            subtext: '',
            left: 'center',
            top: 60,
            textStyle: {
              fontSize: 25,
              color: '#04888f'
            }
          },
          tooltip: {
            formatter: function(params) {
              if ('value' in params.data) {
                return params.data.value[1] + ': ' + params.data.value[0]
              }
            }
          },
          grid: {
            left: '5%', // 左下角图表位置
            right: '30%',
            top: '70%',
            bottom: '5%',
            width: '30%'
          },
          xAxis: [
            {
              splitNumber: 0,

              splitLine: {
                show: false,
                lineStyle: {
                  color: 'white'
                }
              }
            }
          ],
          yAxis: {},
          series: [
            {
              id: 'map',
              type: 'map',
              mapType: 'world',
              top: '20%', // 地图位置
              bottom: '25%',
              left: '15%',
              height: '60%',
              width: '70%',
              itemStyle: {
                normal: {
                  areaColor: '#04284e', // 地图颜色
                  borderColor: '#04286a' // 地图边界
                },
                emphasis: {
                  label: {
                    show: true
                  },
                  areaColor: 'rgba(255,255,255, 0.5)' // 鼠标悬停在地图某一块时该块的颜色
                }
              },
              data: []
            },
            {
              id: 'bar',
              type: 'bar',
              tooltip: {
                show: false
              },
              label: {
                normal: {
                  show: true,
                  position: 'right', // 左下角图表文字相对于柱的位置
                  textStyle: {
                    color: '' // 左下角图表文字
                  }
                }
              },
              data: []
            }
          ]
        },
        options: option
      })
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
.map {
  border: 1px solid rgb(7, 10, 15);
  background-color: rgb(7, 10, 15);
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
