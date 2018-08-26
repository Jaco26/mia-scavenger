<template>
  <div>
    <b-row v-for="item in displayResults" :key="item.id">
      <b-col>
        <b-card>
          <b-media>
            <b-img slot="aside" :src="item.imgUrl" alt="placeholder" />
            <b-media-body>
              <h5> {{item.title}} </h5>
              <p> {{item.description}} </p>
              <div v-for="stop in item.audioStops" :key="stop._id" >
                <audio controls>
                  <source v-if="stop.link" :src="stop.link">
                </audio>
              </div>
              <b-button @click="save(item.id)"> Add To Playlist </b-button>
            </b-media-body>
          </b-media>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    results: Array,
  },
  computed: {
    displayResults() {
      if (this.results) {
        return this.results.map(item => ({
          id: item.id,
          title: item.title,
          description: item.description,
          room: item.room,
          imgUrl: item.imgUrl,
          audioStops: item.audioStops
        }));
      }
    }
  },
  methods: {
    save(id) {
      console.log(id);
      
    }
  }
  
}
</script>