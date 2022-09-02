<template>
  <div>
    
    <v-card class="pa-10">
        <p class=" text-h5 text-center">Update Todo</p>
        <v-form ref="form"> 
            <v-text-field label="Title" v-model="title" required> </v-text-field>
      <v-text-field label="description" v-model="description" required>
      </v-text-field>
        </v-form>
      
      <v-btn class="mr-3" @click="editToDo()">Submit</v-btn>
      <v-btn @click="$emit('save')" >Cancel</v-btn>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import ServiceAPI from "@/Service/ServiceAPI";
export default {
  props: ["editData","save"],
  name: "VueTodoEditTodoComponent",

  data() {
    return {
        title: this.editData.title,
        description: this.editData.description,
        ServiceAPI: new ServiceAPI()
    };
  },
  methods: {
   editToDo() {
      let token =localStorage.getItem("token")
      let data = {
        title: this.title,
        description: this.description
      };
      if(this.$refs.form.validate()){
        this.ServiceAPI.updateTodo(this.editData._id,data).then((res)=>{
            console.log(res)
            this.$emit('save', this.title);
        })
        
       
      }
    
       
    }
  }
};
</script>

<style lang="scss" scoped>
</style>