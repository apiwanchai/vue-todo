<template>
  <div>
    <h1 class=" text-center mt-16">Todo</h1>
    <v-row class=" d-flex justify-center">
<v-col cols="6" class="my-list">
  
  <v-card v-for="data in dataList" :key="data._id" class="mt-5 "  >
    <v-card-title class="text-h5">
      {{data.title}}
            </v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle>{{data.description}}</v-card-subtitle>
            <v-card-actions class=" d-flex justify-end">
              <v-icon @click=" editTodo(data)" color="yellow">mdi-pencil-outline</v-icon>
              <v-icon @click="removeTodo(data) " color="red">mdi-delete-outline</v-icon>
            </v-card-actions>
    

    </v-card>
</v-col>
    </v-row>
    
    <v-dialog v-model="dialogEdit" max-width="800">
      <EditTodoComponent v-bind:editData="editData" @save="save()" />
    </v-dialog>
    <v-dialog v-model="dialogRemove" max-width="500">
      <RemoveTodoComponent v-bind:removeData="removeData" @save="save()" />
    </v-dialog>
    <v-dialog v-model="dialogCreate" max-width="800"  v-if="dialogCreate != false">
      <CreateTodoComponent  @save="save()" />
    </v-dialog>
    <div class=" d-flex justify-center pa-10"> <v-btn class=" " @click="dialogCreate = true"><v-icon>mdi-plus</v-icon> Create</v-btn></div>
   
  </div>
  
</template>

<script>
import axios from 'axios';
import EditTodoComponent from './EditTodoComponent.vue'
import RemoveTodoComponent from './RemoveTodoComponent.vue'
import CreateTodoComponent from'./CreateTodoComponent.vue'
import ServiceAPI from '@/Service/ServiceAPI';

export default {
  name: 'VueTodoHelloWorld',

  data() {
    return {
      dataList:[],
      dialogEdit:false,
      dialogRemove:false,
      ServiceAPI:new ServiceAPI(),questions:[],
      dialogCreate:false,
      editData:undefined,
      removeData:undefined
    };
  },
    created(){
     
   },
  mounted() {
    this.getTodolist()
  },
  components:{
    EditTodoComponent,
    RemoveTodoComponent,
    CreateTodoComponent
  },

  methods: {
    editTodo(data){
      this.dialogEdit= true
      this.editData = data

    },
    removeTodo(data){
      this.dialogRemove= true
      this.removeData = data
    },
    save(val){
      if(val == undefined){
        this.dialogEdit= false
        this.getTodolist()
        this.dialogRemove= false
        this.dialogCreate= false
      }
      
    },
    getTodolist(){
     this.ServiceAPI.getTodoList().then((res)=>{
        this.dataList = res.data
      })
      
    }
  },
  
  
};
</script>

<style lang="scss" scoped>
  
</style>