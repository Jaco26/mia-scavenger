<template>
  <div>
    <global-display-art
      :results="savedArt"
      :resultsDeletable="true"
    ></global-display-art>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('art', ['savedArt']),
  }

}
</script>

<style>

</style>
