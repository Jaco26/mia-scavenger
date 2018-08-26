<template>
  <div>
    <b-row align-h="center">
      <b-col class="m-2" cols="6">
        <b-form @submit.prevent="$emit('search', searchPhrase)">
          <b-form-row>
            <b-col cols="10">
              <b-form-input type="text" placeholder="Search for art" v-model="searchPhrase" />
            </b-col>
            <b-col cols="2">
              <b-button size="md"  type="submit">Search</b-button>
            </b-col>
          </b-form-row>
        </b-form>
      </b-col>
    </b-row>
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
