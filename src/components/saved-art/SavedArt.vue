<template>
  <div>
    <AppDisplayArt
      :results="savedArt"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppDisplayArt from './DisplayArt';
export default {
  components: {
    AppDisplayArt,
  },
  computed: {
    ...mapState('art', ['savedArt']),
  }

}
</script>

<style>

</style>
