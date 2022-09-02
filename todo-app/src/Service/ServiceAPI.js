import axios from "axios";
const token = localStorage.getItem("token")
axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 

export default class ServiceAPI {
    
  getTodoList() {
    console.log(token)
    return   axios.get("https://candidate.neversitup.com/todo/todos/")
  }
  getTodoListById(id){
    return axios.get("https://candidate.neversitup.com/todo/todos/"+id)
  }
  createTodo(data){
    return axios.post("https://candidate.neversitup.com/todo/todos/",data)
  }
  updateTodo(id,data){
    return axios.put("https://candidate.neversitup.com/todo/todos/"+id,data)
  }

  removeTodo(id){
    return axios.delete("https://candidate.neversitup.com/todo/todos/"+id)

  }
}
