<template>
  <div class="tabs">
    <el-tag
      :key="index"
      v-for="(tag, index) in tags"
      :closable="tag.label === '首页' ? false : true"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
      :effect="$route.name == tag.name ? 'dark' : 'plain'"
    >{{tag.label}}</el-tag>
  </div>
</template>  

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  computed: {
      ...mapState({
          tags: state => state.tab.tabsList
      })
  },
  data() {
    return {
      inputVisible: false,
      inputValue: "",
    };
  },
  methods: {
    ...mapMutations({
        close: 'closeTabs'
    }),
    handleClose(tag) {
        this.close(tag)
    },
    changeMenu(item) {
      console.log(item)
      this.$router.push({name: item.name})
      this.$store.commit('selectMenu', item)
    }
  },
};
</script>

<style lang="scss" scoped>
/deep/ .el-tag {
  cursor: pointer;
}
.tabs {
    padding: 20px;
    .el-tag {
        margin-right: 10px;
    }
}
</style>