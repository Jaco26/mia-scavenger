<template>
  <v-toolbar>
    <v-toolbar-title class="title">mia scavenger</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat :to="{name: 'search'}">Search</v-btn>
      <v-btn flat :to="{name: 'savedArt'}">Saved Art</v-btn>
      <v-btn flat :to="{name: 'savedPlaylists'}">Playlists</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  
}
</script>


