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
      this.$miapi.get('collections')
        .then(response => {
          console.log(response);
          
        })
    }
  }
}
</script>

<style>

</style>
