<template>
  <div class="hello">
    <h1>{{ url }}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <iframe style="width: 100%; height: 100%; border-width: 0" src="http://localhost:8080/?furl=6114EEDA03814C683A62D8FC2BBE8D9C35305DEA217EA75614469D9A62C3556DF2CF2D8B856885071FC16286E0BF58E74FB76F499B2CE12BF3A4D7B30DCAA34E93905073C53D4DD2E59F9D45BDC806F572EE9F71E97A640A4289BBB36F6A16F8B19EC4BDE8EEE5001834285378BD07CF4B1871D613CE12A6B670E32229F5DBB0B9DD7C9989892AB1E858DD4867792717466EE6A812F325409CA14236D699DFD056B92D3588814F5301CD9E304BCB448B792EDC46C17902B65EE8BFF97D762E3AE65F308C10369E10660E0297B4C6E5B4&decryptmodel=2&fname=f88d94ba-5f51-46fd-ae8a-41a995150f26.docx" /> -->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters([
      'url'
    ])
  }
}
</script>
