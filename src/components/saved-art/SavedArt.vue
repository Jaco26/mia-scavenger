<template>
  <div>
    <GlobalDisplayArt
      :results="savedArt"
    />
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
