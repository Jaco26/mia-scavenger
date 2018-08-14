<template>
  <div class="hello">
    <navbar></navbar>
    <img src="./../assets/logo.png" alt="user" id="user-photo">
    <h1>Hello {{user.userName}}</h1>
    <button>Plan a Trip</button>
    <button>Past Trips</button>
    <button>Pre-curated Trips</button>
  </div>
</template>

<script>
import Navbar from './Navbar';
import {mapState} from 'vuex';

export default {
  name: 'HomePage',
  computed: {
    ...mapState(['user'])
  },
  components: {
    Navbar,
  },
  data () {
    return {
      userName: '',
      userGrade: '',
      userSchool: '',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
button {
  background-color: #231f20;
  padding: 15px;
  width: 225px;
  margin: 10px auto;
  display: block;
  font-size: 1em;
  font-weight: 600;
  border-radius: 7px;
  color: #fff;
  cursor: pointer;
}
#user-photo{
  height: 200px;
  width: 200px;
  margin: 0 auto;
  border-radius: 50%;
}
</style>
