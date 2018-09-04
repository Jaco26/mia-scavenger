<template>
  <div>
    <v-snackbar
      v-model="showSnackbar"
      bottom right
      :timeout="snackbarTimeout"
      :color="alertColor"
    >
      {{ alertMsg }}
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
import { mapActions, mapState } from 'vuex';
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
    triggerSnackbar(colorVariant, message, timeout) {
      this.showSnackbar = true;
      this.snackbarTimeout = timeout;
      this.alertMsg = message;
      this.alertColor = colorVariant;
    }
  },
  computed: {
    searchPhrase: {
      get() {
        return this.$store.state.search.searchPhrase;
      },
      set(val) {
        this.$store.commit('search/setSearchPhrase', val);
      },
    },
    ...mapState('search', ['searchResults']),
    ...mapState('art', ['errorMsg', 'successMsg']),
  },
  watch: {
    errorMsg(msg) {
      if (msg) {
        this.triggerSnackbar('danger', msg, 5000);
      } 
    },
    successMsg(msg) {
      if (msg) {        
        this.triggerSnackbar('success', msg, 5000);
      }
    }
  }
}
</script>

