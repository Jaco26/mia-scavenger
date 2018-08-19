<template>
  <div>
    <form @submit.prevent="$emit('search', searchPhrase)">
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
}
</script>
