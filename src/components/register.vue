<template>
  <div >
    <form>
      <label>Name</label>
      <input type="text" v-model="user.userName"/>
      <label>School</label>
      <input type="text" v-model="user.userSchool"/>
      <label>Grade</label>
      <input type="text" v-model="user.userGrade"/>
    </form>
    <button @click="submitUser">Submit</button>
  </div>
</template>

<script>
import {bus} from '../main';
export default {
  name: 'Register',
  data () {
    return {
      user: {
        userName: '',
        userSchool:'',
        userGrade: '',
      },
    }
  },
  methods: {
    submitUser() {
      bus.$emit('sendUser', {
        userName: this.user.userName,
        userSchool: this.user.userSchool,
        userGrade: this.user.userGrade, 
        });
      this.$router.push({name: 'HomePage'}); 
    },
  }
}
</script>