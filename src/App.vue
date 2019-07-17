<template>
  <div id="app">
    <TopBar @toggle-menu="menuIsOpened = !menuIsOpened"></TopBar>
    <section>
      <LeftBar @open-menu="menuIsOpened = true" @close-menu="menuIsOpened = false" :menuIsOpened="menuIsOpened"></LeftBar>
      <router-view/>
      <RightBar></RightBar>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar.vue'
import LeftBar from '@/components/LeftBar.vue'
import RightBar from '@/components/RightBar.vue'
import store from '@/store.js'
import { setInterval } from 'timers';

export default {
  name: 'home',
  components: {
    TopBar,
    LeftBar,
    RightBar,
  },
  data() {
    return {
      menuIsOpened: false
    }
  },
  mounted() {
    // setInterval(() => {
    //   store.commit('FEED_EMAILS')
    // }, 5000)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  section {
    display: flex;
    justify-content: space-between;
  }
}
body {
  margin: 0px;
}
</style>
