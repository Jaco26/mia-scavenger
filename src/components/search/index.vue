<template>
  <div>

    <AppSearchForm
      @search="search"
    />

    <AppSearchResults 
      :results="results"
    />
    
  </div>
</template>

<script>
import AppSearchForm from './SearchForm'
import AppSearchResults from './SearchResults'
import axios from 'axios'
export default {
  components: {
    AppSearchForm,
    AppSearchResults
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
