<template>
  <div>

    <v-snackbar
      v-model="success"
      top
      dismissable
      :timeout="5000"
      color="success"
    >
      {{ successMsg }}
    </v-snackbar>

    <v-snackbar
      v-model="error"
      top
      dismissable
      :timeout="5000"
      color="danger"
    >
      {{ errorMsg }}
    </v-snackbar>


    <v-form @submit.prevent="searchArt(searchPhrase)">
      <v-layout justify-center>
        <v-flex xs12 class="ma-2">
            <v-text-field 
              v-model="searchPhrase"
              solo 
              prepend-icon="search"
            ></v-text-field>
            <v-btn type="submit">Search</v-btn>
        </v-flex>
      </v-layout>
    </v-form>

    <global-display-art 
      :results="searchResults"
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
          text: 'Description',
          value: 'description',
        },
        {
          text: 'Text',
          value: 'text'
        },
        {
          text: 'Artist',
          value: 'artist'
        },
        {
          text: 'Title',
          value: 'title'
        },
      ],
      selectedFields: [],

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
    searchPhrase: {
      get() {
        this.$store.state.search.searchPhrase;
      },
      set(val) {
        this.$store.commit('search/setSearchPhrase', val);
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
    ...mapState('search', ['searchResults']),
    ...mapState('art', ['errorMsg', 'successMsg']),
  },
}
</script>

