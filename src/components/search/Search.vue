<template>
  <div>
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

    <AppDisplayArt 
      :results="searchResults"
    />

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AppDisplayArt from './DisplayArt'
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
    }
  },
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
