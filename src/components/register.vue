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
    <button><router-link to="/">Submit</router-link></button>
  </div>
</template>

<script>
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
      console.log('button click');
    },
  }
}
</script>