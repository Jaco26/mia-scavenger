<template>
    <!-- <div b-container class="login h-100">
        <div id="bg">
            <img src="https://source.unsplash.com/random">
        </div>
        <img id="login-background">
         <b-row align-v="center" align-h="center" class="h-100 mx-auto ">
            <b-col cols="6">
             <b-card class="login-card">
                <h1 class="mb-5">MIA's Field Trip Planner</h1>
                <b-form @submit="onSubmit">
                    <b-form-group class="" id="exampleInputGroup1"
                                label="Email address:"
                                label-for="exampleInput1"
                                description="">
                        <b-form-input id="exampleInput1"
                                    type="email"
                                    v-model="form.email"
                                    required
                                    placeholder="Enter email">
                        </b-form-input>
                    </b-form-group>
                     <b-form-group class="" id="password"
                                label="Password:"
                                label-for="password"
                                description="">
                        <b-form-input id="password"
                                    type="password"
                                    v-model="form.password"
                                    required
                                    placeholder="Enter password">
                        </b-form-input>
                    </b-form-group>
                    <b-button class="btn-block mt-5" type="submit">Log in</b-button>
                </b-form>
            </b-card>
           </b-col>
        </b-row>
       
    </div> -->
    <v-container fill-height>
        <div id="bg">
            <img src="https://source.unsplash.com/random">
        </div>
        <v-layout align-center justify-center row fill-height>
            <v-flex  xs12 md4>
                <v-card class="login-card">
                    <v-card-title primary-title>
                        <div class="headline">Mia's Field Trip App</div>
                    </v-card-title>
                    <v-form v-model="valid">
                        <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        :counter="10"
                        label="Name"
                        required
                        ></v-text-field>
                        <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        ></v-text-field>
                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>

import { mapActions, mapState } from 'vuex';

export default {
  components: {},
  methods: {
    // ...mapActions('search', ['searchArt']),
    onSubmit(evt){
        evt.preventDefault();
        console.log("submit");
        this.$router.push({ path: 'home' })
    }
  },
  data(){
    return{
        form: {
            email:'',
            password: '',
        }
    } 

  }
 

}
</script>

<style>
    #bg {
    position: fixed; 
    top: -50%; 
    left: -50%; 
    width: 200%; 
    height: 200%;
    }
    #bg img {
    position: absolute; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    margin: auto; 
    min-width: 50%;
    min-height: 50%;
    }
    .login-card{
        background-color: rgba(255, 255, 255, 0.836);
    }  

   #app{
        height: 100vh;
    }
</style>