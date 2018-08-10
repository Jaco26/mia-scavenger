<template>
  <div class="hello">
    <navbar></navbar>
    <h1>Hello {{userName}}</h1>
    <displayed-art></displayed-art>
    <button>Plan a Trip</button>
    <button>Past Trips</button>
    <button>Pre-curated Trips</button>
  </div>
</template>

<script>
import {bus} from '../main';
import DisplayedArt from './DisplayedArt';
import Navbar from './Navbar';
export default {
  name: 'HomePage',
  components: {
    DisplayedArt,
    Navbar,
  },
  data () {
    return {
      userName: '',
      userGrade: '',
      userSchool: '',
    }
  },
  created() {
    bus.$on('sendUser', (data) => {
      this.userName = data.userName;
      this.userGrade = data.userGrade;
      this.userSchool = data.userSchool;
    });
  }
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
}
</style>
