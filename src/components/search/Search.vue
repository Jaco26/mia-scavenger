<template>
  <div>
    <v-snackbar
      v-model="success"
      bottom
      dismissable
      :timeout="5000"
      color="success"
    >
      {{ successMsg }}
    </v-snackbar>

    <v-snackbar
      v-model="error"
      bottom
      dismissable
      :timeout="5000"
      color="danger"
    >
      {{ errorMsg }}
    </v-snackbar>

    
    <v-form @submit.prevent="searchArt(fullSearch)">
      <v-layout justify-center>
        <v-flex xs8>
          <v-text-field 
            v-model="searchPhrase"
            :items="searchFields"
            placeholder="Search Mia for art"
            solo
            hide-details
          ></v-text-field>
          <v-flex 
            class="title my-2 pa-1 font-weight-thin"
            d-inline-block
          >
            <div>{{fullSearch.slice(0, fullSearch.indexOf(':') + 1)}}<span style="font-weight: 400;">{{searchPhrase}}</span> </div> 
          </v-flex>
          <v-layout align-center>
            <v-flex font-weight-bold>Search Fields: </v-flex> 
            <v-btn 
              v-for="option in searchFields" 
              :key="option.value" 
              depressed 
              :dark="option.value == searchPhraseModifier.value "
              @click="searchPhraseModifier = option"
              small
            >
            {{option.text}}
          </v-btn>
          <v-checkbox 
            v-model="specificSearch"  
            label="Cast a wider net"
          ></v-checkbox>
          </v-layout>
        </v-flex>        
        <v-btn large icon flat type="submit"><v-icon>search</v-icon></v-btn>
      </v-layout>
    </v-form>
  
    
    <v-divider></v-divider>
    
    <v-progress-linear dark indeterminate v-if="searchLoading"></v-progress-linear>

    <global-display-art 
      :results="searchResults"
      resultsSavable
    ></global-display-art>

  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      searchFields: [
        {
          text: 'All',
          value: '_all',
        },
        {
          text: 'Medium',
          value: 'medium'
        },
        {
          text: 'Artist',
          value: 'artist',
        },
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Description',
          value: 'description',
        },
      ],
      specificSearch: false,
      searchPhraseModifier: {
        text: 'All',
        value: '_all',
      },
      // searchPhrase: '',

      // properties that the vuetify snackbar will use
      showSnackbar: false,
      snackbarTimeout: 0,
      alertMsg: '',
      alertColor: '',
    }
  },
  methods: {
    ...mapActions('search', ['searchArt']),
    ...mapMutations('art', ['setError', 'setSuccess']),
  },
  computed: {
    fullSearch() {
      return this.specificSearch 
        ? `${this.searchPhraseModifier.value}.ngram:${this.searchPhrase.trim()}`
        : `${this.searchPhraseModifier.value}:${this.searchPhrase.trim()}`
    },
    searchPhrase: {
      get() {
        return this.$store.state.search.searchPhrase
      },
      set(val) {
        this.$store.commit('search/setSearchPhrase', val)
      },
    },
    success: {
      get() {
        return this.$store.state.art.success;
      },
      set(val) {
        this.setSuccess(val)
      }
    },
    error: {
      get() {
       return this.$store.state.art.error;
      },
      set(val) {
        this.setError(val)
      }
    },
    ...mapState('search', ['searchResults', 'searchLoading']),
    ...mapState('art', ['errorMsg', 'successMsg']),
  },
}
</script>

<style scoped>


</style>

