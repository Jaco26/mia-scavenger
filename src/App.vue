<template>
  <v-app id="app">
    <app-nav ></app-nav>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center fill-height>
          <v-flex>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import AppNav from '@/components/Nav';
export default {
  name: 'App',
  components: {
    AppNav,
  },
  methods: {
    ...mapActions('art', ['getArt']),
    ...mapActions('user', ['fetchUser']),
  },
  created() {
    // const userLoginInfo = {
    //   username: 'Mx. Doe',
    //   password: 1,
    // }
    // console.log("whats this", this.isLoggedIn);
    // this.fetchUser(userLoginInfo);
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
