<template>
  <div>
    <table>
      <thead>
        <th>Title</th>
        <th>Room</th>
        <th>Image</th>
        <th>Audio</th>
      </thead>
      <tbody v-if="results[0]">
        <tr v-for="result in results" :key="result.id">
          <td> {{result.title}} </td>
          <td>
            {{result.room}}
          </td>
          <td> 
            <img :src="result.imgUrl" alt="Art Pic ;)"> 
          </td>
          <td> 
            <audio controls v-for="item in result.audioStops" :key="item._id" >
              <source :src="item.link" type="audio/mp3">
            </audio> 
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    results: Array,
  },
  
}
</script>

<style scoped> 

</style>
