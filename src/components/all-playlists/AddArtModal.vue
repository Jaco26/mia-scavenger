<template>
  <v-diaolg v-model="showDialog"></v-diaolg>
</template>

<script>

export default {
  computed: {
    showModal: {
      get() {
        return this.$store.playlists.showModal
      },
      set(val) {
        this.$store.commit('playlists/setShowModal', val);
      }
    }
  }
}
</script>

<style>

</style>
