<template>
  <div>
    <form @submit.prevent="search">
       <input type="text" placeholder="Search for art" v-model="searchPhrase">
       <button type="submit">Get</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchPhrase: ''
    }
  },
  methods: {
    search() {
      if (this.searchPhrase) {
        this.$api.get(`/search/${this.searchPhrase}`)
        .then(response => {
          console.log(response);
          
        })
        .catch(err => {
          console.log(err)
        });
      } else {
        alert("You haven't typed any search phrase")
      }
      
    }
  }
}
</script>

<style>

</style>
