<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
        <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
          <common-header></common-header>
      </el-header>
      <common-tabs></common-tabs>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue'
import CommonAside from '@/components/CommonAside.vue'
import CommonTabs from '@/components/CommonTabs.vue'
export default {
    components: {
        CommonHeader,
        CommonAside,
        CommonTabs
    }
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #333;
}
</style>