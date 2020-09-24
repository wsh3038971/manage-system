<template>
  <div style="height: 100%" ref="echart"></div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    //   图标数据
    chartData: {
      type: Object,
      default() {
        return {
          // x轴默认数据
          xData: [],
          series: [],
        };
      },
    },
    // 图表是否含有坐标轴标识
    isAxisChart: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    //   判断图表是否携带坐标轴
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption;
    },
  },
  data() {
    return {
      // 初始化echarts
      echarts: null,
      // 有坐标轴的
      axisOption: {
        // x轴  
        xAxis: [
          {
            type: "category",
            data: [],
          },
        ],
        // y轴
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: []
      },
      // 没有坐标轴的
      normalOption: {
        series: []
      },
    };
  },
  methods: {
    // 初始化echarts
    initChart() {
      // 检测echarts是否已经初始化
      if (this.echarts) {
        // 加载图表
        this.echarts.setOptions(this.options);
      } else {
        // 初始化图表
        this.echarts = echarts.init(this.$refs.echart);
        this.echarts.setOptions(this.options);
      }
    },
    // 加载图表数据
    initChartData() {
      if (this.isAxisChart) {
      } else {
      }
    },
  },
};
</script>

<style>
</style>