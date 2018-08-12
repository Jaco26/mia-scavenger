<template>
  <div>
    <input type="text" placeholder="Search for art" v-model="searchPhrase">
    <button @click="search">Get</button>
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
      this.$api.get('/test')
        .then(response => {
          console.log(response);
          
        })
    }
  }
}
</script>

<style>

</style>
