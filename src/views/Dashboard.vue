<template>
  <div v-loading="loading">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <iframe
      ref="Iframe"
      :src="title"
    />
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    // HelloWorld
  },
  computed: {
    ...mapGetters([
      'node',
      'loading'
    ]),
    title() {
      const key = window.appSettings.key
      return this.node.id ? process.env.VUE_APP_IFRAME_URL + 'compress?key=' + key + '&id=' + this.node.id : ''
    }
  },
  mounted() {
    const iframe = this.$refs.Iframe
    if (iframe.attachEvent) { // IE
      iframe.attachEvent('onload', () => {
        this.$store.dispatch('compress/changeNode', {
          key: 'loading',
          value: false
        })
      })
    } else { // 非IE
      iframe.onload = () => {
        this.$store.dispatch('compress/changeNode', {
          key: 'loading',
          value: false
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
iframe {
  min-height: calc(100vh - 60px);
  width: 100%;
  border-width: 0;
}
</style>
