<template>
  <v-toolbar v-if="isLoggedIn" dark app>
    <v-toolbar-title primary-title>
      <router-link tag="span" style="cursor: pointer;" :to="{name: 'home'}">mia scavenger</router-link> 
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat :to="{name: 'search'}">Search</v-btn>
      <v-btn flat :to="{name: 'savedArt'}">My Art</v-btn>
      <v-btn flat :to="{name: 'allPlaylists'}">My Playlists</v-btn>
      <v-btn flat @click="logOut">Logout</v-btn>
    </v-toolbar-items>
    <!-- <v-toolbar-items v-else>
      <v-btn flat :to="{name: 'login'}">Login</v-btn>
      <v-btn flat :to="{name: 'register'}">Sign Up</v-btn>
    </v-toolbar-items> -->
  </v-toolbar>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('user', ['isLoggedIn']),
  },
  methods: {
    logOut() {
      this.$store.commit('user/logOut');
      this.$router.push({name: 'login'});
    }
  }
}
</script>


