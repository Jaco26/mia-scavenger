<template>
  <div>
    <AppDisplayArt
      :results="art"
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
    ...mapState('art', ['art']),
  }

}
</script>

<style>

</style>
