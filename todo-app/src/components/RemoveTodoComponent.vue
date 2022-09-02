<template>
    <div>
        <v-card class="pa-10">
            <p class=" text-h5 grey--text text-center">Want Delete <span class=" font-weight-bold black--text">{{removeData.title}} </span>?</p>
            <div class=" d-flex justify-center">
                <v-btn @click="removeToDo" class="mr-2">Confirm</v-btn>
            <v-btn @click="$emit('save');">Cancel</v-btn>
            </div>
           
        </v-card>
    </div>
</template>

<script>
    import axios from 'axios';
    import ServiceAPI from "@/Service/ServiceAPI";
export default {
    props:['removeData','save'],
    name: 'VueTodoRemoveTodoComponent',

    data() {
        return {
            ServiceAPI: new ServiceAPI()
        };
    },


    methods: {
     removeToDo() {
      
      this.ServiceAPI.removeTodo(this.removeData._id).then((res)=>{
            console.log(res)
            this.$emit('save', this.title);
        })
        
       
       
    }
    },
};
</script>

<style lang="scss" scoped>

</style>