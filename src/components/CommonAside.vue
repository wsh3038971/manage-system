<template>
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#33aef0"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1" v-for="(item, index) in children" :key="index" @click="clickMenu(item)">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span>{{item.label}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(items, indexs) in item.children" :key="indexs" :index="items.path" @click="clickMenu(items)">{{items.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path"  @click="clickMenu(item)">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: 'selectMenu',
    computed: {
      // 过滤出没有children的
      noChildren () {
        return this.asideMenu.filter(item => !item.children)
      },
      // 过滤出有children的
      children () {
        return this.asideMenu.filter(item => item.children)
      }
    },
    data () {
        return {
            asideMenu: [
                {
                    path: '/',
                    name: 'home',
                    label: '首页',
                    icon: 'home'
                },
                {
                    path: '/video',
                    name: 'video',
                    label: '视频管理',
                    icon: 'video-play'
                },
                {
                    path: '/user',
                    name: 'user',
                    label: '用户管理',
                    icon: 'user'
                },
                {
                    label: '其他',
                    name: 'user',
                    icon: 'user',
                    children: [
                      {
                        path: '/',
                        name: 'page1',
                        label: '1',
                        icon: 'video-play'
                      },
                      {
                        path: '/',
                        name: 'page2',
                        label: '2',
                        icon: 'video-play'
                      },
                    ]
                },
            ]
        }
    },
    methods: {
      clickMenu (item) {
        this.$store.commit('selectMenu', item)
      }
    }
}
</script>

<style lang="scss" scoped>
.el-menu {
    height: 100%;
    border: none;
}
</style>