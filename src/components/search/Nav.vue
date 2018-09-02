<template>
  <v-toolbar>
    <v-toolbar-title class="title">mia scavenger</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <router-link :to="{name: 'search'}">Search</router-link>
      <router-link :to="{name: 'savedArt'}">Saved Art</router-link>
      <router-link :to="{name: 'savedPlaylists'}">Playlists</router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  
}
</script>


