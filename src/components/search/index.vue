<template>
  <b-container>
    <AppNavBar />

    <router-view></router-view>

    <AppSearchResults 
      :results="results"
    />
    
  </b-container>
</template>

<script>
import AppNavBar from './Nav'
export default {
  components: {
    AppNavBar,
  },
  data() {
    return {
      searchResults: [],
      numOfItems: 10,
      error: ''
    }
  },
  computed: {
    results() {
      return this.searchResults.slice(0, this.numOfItems);
    },
  },
  methods: { 
    search(searchPhrase) {
      axios.get(`/api/search/${searchPhrase}`)
        .then(response => {
          this.searchResults = response.data
        })
        .catch(err => this.error = err);
    },
  },
}
</script>

<style>

</style>
