<template>
  <div>
    <input type="text" placeholder="Search for art" v-model="searchPhrase">
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchPhrase: ''
    }
  }
}
</script>

<style>

</style>
