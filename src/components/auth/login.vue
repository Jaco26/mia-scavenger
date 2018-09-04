<template>
    <v-container fill-height>
        <div v-if="background" id="bg">
            <img :src="background">
        </div>
        <v-layout  fill-height align-center justify-center row>
            <v-flex  xs12 md4>
                <v-card class="login-card" >
                    <v-card-title  class="justify-center" primary-title>
                          
                        <div class="headline">Mia's Field Trip App</div>
                    </v-card-title>
                    <v-form  class="mx-4"  v-model="valid">
                        <v-text-field
                        v-model="form.username"
                        :counter="10"
                        label="User Name"
                        required>
                        </v-text-field>
                        <v-text-field
                         v-model="form.password"
                       :append-icon="show1 ? 'visibility_off' : 'visibility'"
                        :rules="[rules.required]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-2"
                        label="Password"
                        hint="At least 8 characters"
                        value="password"
                        class="input-group--focused"
                        @click:append="show1 = !show1"
                        ></v-text-field>
                        <v-btn class="mt-5" large block bottom dark depressed @click="onSubmit">Log In</v-btn>
                    </v-form>
                </v-card>
                <v-card class="mt-1">
                    <v-layout align-center>
                        <v-flex class="my-1">
                            <span>First Time User?</span>
                            <v-btn small depressed>Sign Up</v-btn>     
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>

import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  components: {},
    
  methods: {
     ...mapActions('user', ['fetchUser','isLoggedIn']),
     ...mapActions('art', ['setBackgroundArt', 'background']),
    onSubmit(evt){
        evt.preventDefault();
        console.log("submit");
       return this.fetchUser(this.form)
        .then((res)=>{
            if(res && res.errMsg)return;
            this.$router.push({ path: '/' })
        })
        .catch(err=>{
            console.log("here is the error", err);
            throw new Error(err);
        })
      
    }
  },
   created() {
    this.setBackgroundArt().then(test => console.log("heeoooo",test));

  },
  computed: {
        ...mapGetters('art',['background'])
    },
  data(){
    return{
        form: {
            username:'',
            password: '',
        },
        show1: false,
        rules: {
          required: value => !!value || 'Required.',
        //   min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
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