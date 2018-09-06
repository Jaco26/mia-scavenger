<template>
    <h1>{{$route.params.playlistId}}</h1>
</template>
<script>
export default {
    watch: {
    '$route' (to, from) {
      // react to route changes...
        },
    }
}
</script>
