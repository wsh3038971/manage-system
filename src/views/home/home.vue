<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" style="height: 290px">
        <div class="userMes">
          <div class="user">
            <img class="userInfo" src="../../assets/image/1.gif" alt="">
            <div class="userRank">
              <div class="userName">Layoom</div>
              <div class="userRole">超级管理员</div>
            </div>
          </div>
          <div class="loginMes">
            <div class="loginTime">
              <span>上次登录时间: </span>
              <span>上次登录地点: </span>
            </div>
            <div class="loginAddress">
              <span>2020-01-15 </span>
              <span>北京市朝阳区</span>
            </div>
          </div>
        </div>
      </el-card>
      <el-card shadow="hover" style="height: 560px">鼠标悬浮时显示</el-card>
    </el-col>
    <el-col :span="16">
      <div class="modules">
        <el-row :gutter="20">
          <el-col :span="8" v-for="(item, index) in countData" :key="index">
            <el-card :body-style="{padding: '0px'}" shadow="hover">
              <div class="modules_item">
                <div class="left" :style="'background:' + item.color">
                  <i :class="'el-icon-' + item.icon" class="icon" color="#fff"></i>
                </div>
                <div class="right">
                  <p class="num">{{item.value}}</p>
                  <p class="txt">{{item.name}}</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <el-card class="echarts1" shadow="hover">
        <div style="height: 280px"> 鼠标悬浮时显示</div>
      </el-card>
      <el-row :gutter="20" class="graph">
        <el-col :span="12">
          <el-card shadow="hover">
            <div style="height: 260px"></div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="hover">
            <div style="height: 260px"></div>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      countData: [
        {
          name: '今日成交时间',
          value: 123,
          icon: 'star-on',
          color: '#008080'
        },
        {
          name: '昨日成交数量',
          value: 123,
          icon: 'circle-check',
          color: '#FFD700'
        },
        {
          name: '今日成交时间',
          value: 123,
          icon: 'message-solid',
          color: '#FF4500'
        },
        {
          name: '今日成交时间',
          value: 123,
          icon: 'star-on',
          color: '#008080'
        },
        {
          name: '今日成交时间',
          value: 123,
          icon: 'circle-check',
          color: '#FFD700'
        },
        {
          name: '今日成交时间',
          value: 123,
          icon: 'message-solid',
          color: '#FF4500'
        }
      ]
    }
  },
  created() {
    this.$http.get("/home/getData").then((response) => {
      console.log(response);
    });
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/home.scss";
</style>