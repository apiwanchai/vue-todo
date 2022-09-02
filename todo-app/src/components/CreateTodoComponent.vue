<template>
  <div>
    <v-card class="pa-10">
        <p class=" text-h5 text-center">Create Todo</p>
      <v-form  ref="form">
        <v-text-field label="Title" :rules="nameRules" v-model="title"  required>
        </v-text-field>
        <v-text-field
          label="description"
          :rules="nameRules"
          v-model="description"
          required
        >
        </v-text-field>
      </v-form>

      <v-btn @click="createToDo()" class=" mr-2 mt-5">Submit</v-btn>
      <v-btn @click="$emit('save')" class="mt-5">Cancel</v-btn>
    </v-card>
  </div>
</template>
  
  <script>
import ServiceAPI from "@/Service/ServiceAPI";
import axios from "axios";

export default {
  name: "VueTodoEditTodoComponent",

  data() {
    return {
      title: undefined,
      description: undefined,
      ServiceAPI : new ServiceAPI(),
      nameRules: [(v) => !!v || " is required"]
    };
  },
  methods: {
    createToDo() {
      let data = {
        title: this.title,
        description: this.description
      };
      if(this.$refs.form.validate()){
        this.ServiceAPI.createTodo(data).then((res)=>{
        console.log(res);
        this.$emit("save", this.title);
      })
     
      
      }
      
    }
  }
};
</script>
  
  <style lang="scss" scoped>
</style>