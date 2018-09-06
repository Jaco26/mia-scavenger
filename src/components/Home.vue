<template>
  <div>
    <h1>Welcome</h1>
    <!-- If the user is logged in, show them this -->
    <div v-if="isLoggedIn">
      We are so glad you logged in!

    </div>
    <v-container grid-list-md>
      <v-data-iterator 
        :items="items"
        :rows-per-page-items="rowsPerPageItems"
        :pagination.sync="pagination"
        content-tag="v-layout"
        row>
        <v-toolbar
        slot="header"
        class="mb-2"
        color="#FAFAFA"
        flat
      >
      <v-toolbar-title>Curated Art Collections</v-toolbar-title>
      </v-toolbar>
        <v-flex
        slot="item"
        slot-scope="props"
        xs12
        sm6
        md4
        lg3
      >
        
        <v-list dense>
          <v-card>
            <v-img :src="props.item.image" aspect-ratio="1"></v-img> 
          </v-card>
          <v-list-tile-content class="align-start"> <strong>{{ props.item.name }} </strong> </v-list-tile-content>
          <v-list-tile-content>
            <p class="align-start">{{props.item.description}}</p>
          </v-list-tile-content> 
        </v-list>
        
        </v-flex>
      </v-data-iterator>
    </v-container>
    <!-- Otherwise, show them this -->
    <!-- <div>
      Hey why don't you sign up or log in!
    </div> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex'
export default {
  data: ()=>({
    rowsPerPageItems: [4, 8],
      pagination: {
        rowsPerPage: 4
      },
      items: [
        {
          name: 'Family',
          image: 'https://api.artsmia.org/images/63940/small.jpg',
          description: 'A glimpse into how artists depicted family'
        },
        {
          name: 'Family',
          image: 'https://api.artsmia.org/images/5833/small.jpg',
          description: 'A glimpse into how artists depicted family'
        },
        {
          name: 'Family',
          image: 'https://api.artsmia.org/images/51350/small.jpg',
          description: 'A glimpse into how artists depicted family'
        },
        {
          name: 'Family',
          image: 'https://api.artsmia.org/images/113370/small.jpg',
          description:'A glimpse into how artists depicted family'
        },
        {
          name: 'Family',
          image: 'https://api.artsmia.org/images/93617/small.jpg',
          description: 'A glimpse into how artists depicted family'
        },
        {
          name: 'Family',
          image: 'https://api.artsmia.org/images/81435/small.jpg',
          description: 'A glimpse into how artists depicted family'
        },
        {
          name: 'Family',
          image: 'https://api.artsmia.org/images/23956/small.jpg',
          description: 'A glimpse into how artists depicted family'
        },
        {
          name: 'Family',
          image: 'https://api.artsmia.org/images/53571/small.jpg',
          description: 'A glimpse into how artists depicted family'
        },
      ]
  }) ,
  computed: {
    ...mapGetters('user', ['fetchUser','isLoggedIn']),
  },
  methods:{
    ...mapActions('art', ['getArt']),
  }, 
  Created(){
    this.fetchUser(userLoginInfo);
    this.getArt();
  }
}
</script>
