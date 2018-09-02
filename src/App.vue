<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',
  methods: {
    ...mapActions('art', ['getArt'])
  },
  created() {
    this.getArt();
  }
}

</script>

<style>
body{
  height: 100vh;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
