<template>
    <v-container>
        <v-row class=" d-flex align-center justify-center" >
            <v-col cols="12" sm="10">
              <v-card class="elevation-6 mt-16 "  >
               
                    <v-row class=" d-flex justify-center">
                      <v-col cols="12" md="6" sm="12">
                        <v-card-text class="mt-12">
                          <h4
                            class="text-center"
                          >Login in to Your Account</h4>
                         
                          <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
                             
                            <v-text-field
                              label="Username"
                              v-model="username"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                             class="mt-16"
                            />
                            <v-text-field
                              label="Password"
                              outlined
                              v-model="password"
                              dense
                              color="blue"
                            autocomplete="false"
                             type="password"
                            
                            />
                              <v-row>
                                <v-col cols="12" sm="7">
                                  <v-checkbox
                         
                          label="Remember Me"
                          class="mt-n1"
                          color="blue"
                        > </v-checkbox>
                                </v-col>
                                <v-col cols="12" sm="5">
                                  <span class="caption blue--text">Forgot password</span>
                                </v-col>
                              </v-row>
                            <v-btn color="blue" dark block tile @click="handleSubmit">Log in</v-btn>
                       
                           <h5
                            class="text-center  grey--text mt-4 mb-3"
                          >Or Log in using</h5>
                           <div class="d-flex  justify-space-between align-center mx-10 mb-16">
                          <v-btn depressed outlined color="grey">
                            <v-icon color="red">mdi-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="blue">mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3">mdi-twitter</v-icon>
                          </v-btn>
                           </div>
                            </v-col>
                          </v-row>  
                        </v-card-text>
                      </v-col>
                    </v-row>
             
              </v-card>
            </v-col>
        </v-row>
    </v-container>
  </template>
  
  <script>
    import axios from 'axios'
    export default {
     data: () => ({
      step: 1,
      username:undefined,
      password:undefined,
    }),
    methods:{
       handleSubmit(){
        axios.post('https://candidate.neversitup.com/todo/users/auth',{
            username:this.username,
            password: this.password

        }).then((res)=>{
          
          localStorage.setItem('token',res.data.token)
          axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}` 
          
          this.$router.push({ path: '/home' })
        })
        
       
      }
    }

    
      
    }
  </script>
  <style scoped>
  .v-application .rounded-bl-xl {
      border-bottom-left-radius: 300px !important;
  }
  .v-application .rounded-br-xl {
      border-bottom-right-radius: 300px !important;
  }
  </style>