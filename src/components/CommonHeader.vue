<template>
  <header>
    <div class="l-content">
      <el-button class="btn" type="primary" icon="el-icon-menu" size="mini" @click="isCollage"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">
          {{current.label}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <img :src="userImage" alt="" class="user">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item style="text-align:center">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  data () {
    return {
      userImage: require('../assets/image/1.gif')
    }
  },
  methods: {
    isCollage() {
      this.$store.commit('collapseMenu')
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner{
  color: #fff!important;
}

.el-icon--right {
  color: #fff;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
}
header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.l-content {
  display: flex;
  align-items: center;
  .btn {
    margin-right: 30px;
  }
}
</style>
<style lang="scss">
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
  color: #fff;
}

</style>