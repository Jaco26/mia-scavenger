<template>
  <div class="hello">
    <h1>Hello {{userName}}</h1>
    <h2>Grade {{userGrade}}</h2>
  </div>
</template>

<script>
import {bus} from '../main';
export default {
  name: 'HomePage',
  components: {},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
a {
  color: #42b983;
}
</style>
