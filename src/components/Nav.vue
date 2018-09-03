<template>
  <v-toolbar dark app>
    <v-toolbar-title primary-title>
      <router-link tag="span" style="cursor: pointer;" :to="{name: 'home'}">mia scavenger</router-link> 
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat :to="{name: 'search'}">Search</v-btn>
      <v-btn flat :to="{name: 'savedArt'}">My Art</v-btn>
      <v-btn flat :to="{name: 'allPlaylists'}">My Playlists</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  
}
</script>


