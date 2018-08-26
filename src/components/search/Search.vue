<template>
  <div>
    <b-row align-h="center">
      <b-col class="m-2" cols="6">
        <b-form @submit.prevent="searchArt(searchPhrase)">
          <b-form-row>
            <b-col cols="10">
              <b-form-input type="text" placeholder="Search for art" v-model="searchPhrase" />
            </b-col>
            <b-col cols="2">
              <b-button size="md"  type="submit">Search</b-button>
            </b-col>
          </b-form-row>
        </b-form>
      </b-col>
    </b-row>

    <AppDisplayArt 
      :results="searchResults"
    />

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AppDisplayArt from './DisplayArt'
export default {
  components: {
    AppDisplayArt
  },
  methods: {
    ...mapActions('search', ['searchArt']),
  },
  computed: {
    searchPhrase: {
      get() {
        this.$store.state.search.searchPhrase;
      },
      set(val) {
        this.$store.commit('search/setSearchPhrase', val);
      },
    },
    ...mapState('search', ['searchResults']),
  }
}
</script>
