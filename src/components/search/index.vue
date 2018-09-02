<template>
  <b-container>
    <AppNavBar />
    <router-view></router-view>
  </b-container>
</template>

<script>
import AppNavBar from './Nav'
export default {
  components: {
    AppNavBar,
  },
}
</script>

<style>

</style>
