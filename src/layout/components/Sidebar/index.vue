<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>-->
      <el-tree
        :data="data"
        :props="defaultProps"
        node-key="id"
        :default-expanded-keys="['0c664e081072a06e1a6b52e50d9a4a1c']"
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
// import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { Logo },
  data() {
    return {
      data: [
        {
          title: 'e5737b81-a06d-4982-acb2-fa352598f2ce.zip',
          id: '0c664e081072a06e1a6b52e50d9a4a1c',
          pid: 'root',
          field: null,
          children: [
            {
              title: 'zip',
              id: 'b0e731a9-1d30-47a3-8354-c80330a65451',
              pid: '0c664e081072a06e1a6b52e50d9a4a1c',
              field: null,
              children: [
                {
                  title: 'cf111081-cbcb-46ea-a1aa-3ee25338b1c4.pdf',
                  id: 'd69867e5-daf2-4a43-a4e9-a4334efa5fb5',
                  pid: 'b0e731a9-1d30-47a3-8354-c80330a65451',
                  field: null,
                  children: [],
                  href: 'zip/cf111081-cbcb-46ea-a1aa-3ee25338b1c4.pdf',
                  spread: false,
                  checked: false,
                  disabled: false
                },
                {
                  title: 'pic',
                  id: 'ecb4711e-58f2-44cf-970d-a2409da8b0a1',
                  pid: 'b0e731a9-1d30-47a3-8354-c80330a65451',
                  field: null,
                  children: [
                    {
                      title: '1 (5).jpeg',
                      id: '5baff34b-df3d-48d4-945b-5eaf06a8a03b',
                      pid: 'ecb4711e-58f2-44cf-970d-a2409da8b0a1',
                      field: null,
                      children: [],
                      href: 'zip/pic/1 (5).jpeg',
                      spread: false,
                      checked: false,
                      disabled: false
                    },
                    {
                      title: '244924.png',
                      id: '839ddc48-33d0-4bad-a105-5b34c72c048d',
                      pid: 'ecb4711e-58f2-44cf-970d-a2409da8b0a1',
                      field: null,
                      children: [],
                      href: 'zip/pic/244924.png',
                      spread: false,
                      checked: false,
                      disabled: false
                    },
                    {
                      title: 'nginx.svg',
                      id: '9e6bb95e-5afa-4161-986e-1bf35f1cd5dd',
                      pid: 'ecb4711e-58f2-44cf-970d-a2409da8b0a1',
                      field: null,
                      children: [],
                      href: 'zip/pic/nginx.svg',
                      spread: false,
                      checked: false,
                      disabled: false
                    },
                    {
                      title: 'reactor.png',
                      id: '6b3725c1-93f2-4355-9885-34f105a76a7c',
                      pid: 'ecb4711e-58f2-44cf-970d-a2409da8b0a1',
                      field: null,
                      children: [],
                      href: 'zip/pic/reactor.png',
                      spread: false,
                      checked: false,
                      disabled: false
                    }
                  ],
                  href: 'zip/pic',
                  spread: true,
                  checked: false,
                  disabled: false
                },
                {
                  title: 'pic.rar',
                  id: '210f4004-2be5-4e1f-b3c2-44642c640a74',
                  pid: 'b0e731a9-1d30-47a3-8354-c80330a65451',
                  field: null,
                  children: [],
                  href: 'zip/pic.rar',
                  spread: false,
                  checked: false,
                  disabled: false
                },
                {
                  title: 'txt',
                  id: '82c5b1b6-29a7-4de0-abc2-46bb56aa2af6',
                  pid: 'b0e731a9-1d30-47a3-8354-c80330a65451',
                  field: null,
                  children: [
                    {
                      title: 'Rest4ZBToolv3.java',
                      id: '08016933-727e-435f-be7e-f2e70896658b',
                      pid: '82c5b1b6-29a7-4de0-abc2-46bb56aa2af6',
                      field: null,
                      children: [],
                      href: 'zip/txt/Rest4ZBToolv3.java',
                      spread: false,
                      checked: false,
                      disabled: false
                    },
                    {
                      title: 'spring.log',
                      id: '3142fbf1-4dc9-48f8-9c30-ce032b6fdef5',
                      pid: '82c5b1b6-29a7-4de0-abc2-46bb56aa2af6',
                      field: null,
                      children: [],
                      href: 'zip/txt/spring.log',
                      spread: false,
                      checked: false,
                      disabled: false
                    },
                    {
                      title: 'web.xml',
                      id: 'd73bc6fd-3f49-4707-9e23-a54e88c6834f',
                      pid: '82c5b1b6-29a7-4de0-abc2-46bb56aa2af6',
                      field: null,
                      children: [],
                      href: 'zip/txt/web.xml',
                      spread: false,
                      checked: false,
                      disabled: false
                    }
                  ],
                  href: 'zip/txt',
                  spread: true,
                  checked: false,
                  disabled: false
                },
                {
                  title: '场景测试案例V1.3-8月版.xlsx',
                  id: '1c01f217-ae41-4f39-b68c-08f58b9842b0',
                  pid: 'b0e731a9-1d30-47a3-8354-c80330a65451',
                  field: null,
                  children: [],
                  href: 'zip/场景测试案例V1.3-8月版.xlsx',
                  spread: false,
                  checked: false,
                  disabled: false
                },
                {
                  title: '服务器迁移工作规范V1.2.1.docx',
                  id: 'f940d1c3-d767-4aaf-bcec-8761f75b6123',
                  pid: 'b0e731a9-1d30-47a3-8354-c80330a65451',
                  field: null,
                  children: [],
                  href: 'zip/服务器迁移工作规范V1.2.1.docx',
                  spread: false,
                  checked: false,
                  disabled: false
                },
                {
                  title: '部署流程效能提升点.pptx',
                  id: '77eba5bf-5abe-4ee0-90fb-06aabc8291d1',
                  pid: 'b0e731a9-1d30-47a3-8354-c80330a65451',
                  field: null,
                  children: [],
                  href: 'zip/部署流程效能提升点.pptx',
                  spread: false,
                  checked: false,
                  disabled: false
                }
              ],
              href: 'zip',
              spread: true,
              checked: false,
              disabled: false
            }
          ],
          href: null,
          spread: true,
          checked: false,
          disabled: false
        }
      ],
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
  methods: {
    handleNodeClick(data) {
      // console.log(data)
      // 只有叶子节点才可以跳转，也有可能是空文件夹
      if (data.children.length === 0) {
        if (data.title) {
          const name = data.title
          const suffix = name.substring(name.lastIndexOf('.') + 1)
          const supports = 'zip,rar,7z,jar,gzip'
          if (supports.indexOf(suffix) > 0) {
            // window.open('compress?md5=' + md5 + '&id=' + data.id)
          } else {
            this.$store.dispatch('compress/changeUrl', {
              key: 'url',
              value: data.title
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
