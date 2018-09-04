<template>
  <div>
    <h1>Welcome</h1>
    <!-- If the user is logged in, show them this -->
    <div v-if="isLoggedIn">
      We are so glad you logged in!
    </div>
    <!-- Otherwise, show them this -->
    <div v-else>
      Hey why don't you sign up or log in!
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex'
export default {
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
