<template>
  <div id="register-div">
    <h1>Welcome</h1>
    <h3>Minneapolis Institute of Arts</h3>
    <form @submit="submitUser">
      <div class="register-input">
        <label>Name</label>
        <input type="text" v-model="user.userName" placeholder="Name"/>
      </div>
      <div class="register-input">
        <label>School</label>
        <input type="text" v-model="user.userSchool" placeholder="School"/>
      </div>
      <div class="register-input">
        <label>Grade</label>
        <input type="text" v-model="user.userGrade" placeholder="Grade"/> 
      </div>
      <input type="submit">
    </form>
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
      this.$store.commit('setUser', this.user);
      this.$router.push({name: 'HomePage'}); 
    },
  }
}
</script>

<style scoped>
  #register-div {
    font-size: 1.4em;
  }
  #register-div input {
    padding: 8px;
    border-radius: 5px;
  }

  .register-input {
    display: block;
  }

</style>
