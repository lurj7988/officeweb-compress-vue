<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-tree
        :data="data"
        :props="defaultProps"
        node-key="id"
        :default-expanded-keys="expandedKeys"
        accordion
        :render-content="renderContent"
        @node-click="handleNodeClick"
      />
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import variables from '@/styles/variables.scss'
import axios from 'axios'

export default {
  components: { Logo },
  data() {
    return {
      data: [],
      key: window.appSettings.key,
      supports: window.appSettings.supports,
      expandedKeys: [window.appSettings.key],
      defaultProps: {
        children: 'children',
        label: 'title'
      }
    }
  },
  computed: {
    ...mapGetters([
      // 'permission_routes',
      'sidebar'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  mounted() {
    this.postData()
  },
  methods: {
    handleNodeClick(data) {
      // console.log(data)
      // 只有叶子节点才可以跳转，也有可能是空文件夹
      if (data.children.length === 0) {
        if (data.title) {
          const name = data.title
          const suffix = name.substring(name.lastIndexOf('.') + 1)
          if (this.supports.indexOf(suffix) > 0) {
            window.open('compress?key=' + this.key + '&id=' + data.id)
          } else {
            this.$store.dispatch('compress/changeNode', {
              key: 'node',
              value: data
            })
            this.$store.dispatch('compress/changeNode', {
              key: 'loading',
              value: true
            })
          }
        }
      }
    },
    renderContent(h, { node, data, store }) {
      // console.log(data)
      if (data.children.length === 0) {
        return (
          <span class='custom-tree-node'>
            <i class='el-icon-document' style='padding-right: 5px'></i>
            <span>{node.label}</span>
          </span>
        )
      }
      return (
        <span class='custom-tree-node'>
          <i class='el-icon-folder-opened' style='padding-right: 5px'></i>
          <span>{node.label}</span>
        </span>)
    },
    postData() {
      axios({
        url: 'structure',
        method: 'post',
        params: {
          key: this.key
        }
      }).then(res => {
        this.data = res.data
      }).catch(err => console.log(err))
    }
  }
}
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  font-size: 15px;
  padding-right: 8px;
}
</style>
