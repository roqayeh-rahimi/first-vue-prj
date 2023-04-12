<template>
  <!-- <h1>{{ title }}</h1> -->
  <div class="container mt-5">
    <div class="row g-3">
      <h4>{{title}}</h4>
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-4" v-for="user in users" :key="user.id">
          <CardView :user="user"/>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import { ref } from 'vue'
import CardView from '@/components/CardView.vue'

export default {
  
  components :{
    CardView
  },

    setup(){
        let title = "Users"
        let users = ref([])
        let loading = ref(true) 
        
        function  getDatas(){
          fetch('https://jsonplaceholder.typicode.com/users')
              .then((response)=>{
                if(response.status === 200){
                  loading.value = false
                  return response.json()
                }else{
                  throw new Error("Not Found")
                }
              })
              .then((data)=>{
                users.value = data
                console.log(users.value);
                // console.log(data);
              })
              .catch((error)=>{error.message})
          
        }
        // onMounted(()=>{
        //     fetch('https://jsonplaceholder.typicode.com/users')
        //       .then((response)=>{
        //         if(response.status === 200){
        //           loading.value = false
        //           return response.json()
        //         }else{
        //           throw new Error("Not Found")
        //         }
        //       })
        //       .then((data)=>{
        //         users.value = data
        //         console.log(users.value);
        //         // console.log(data);
        //       })
        //       .catch((error)=>{error.message})
          
        // })

        getDatas()
        return{title  , users , loading}
    },
}
</script>

<style>

</style>




  <!-- <p>{{ getData() }}</p> -->
  <!-- <ul v-for="user in users" :key="user.id">
    <li>{{ user.id }}</li>
    <li>{{ user.name }}</li>
    <li>{{ user.username }}</li>
    <li>{{ user.phone }}</li>
    <li>{{ user.email }}</li>
    <li>{{ user.website }}</li>
  </ul> -->
  <!-- <ul v-for="user in users" :key="user.id">
    <li>{{ user.id }}</li>
    <li>{{ user.userId }}</li>
    <li>{{ user.title }}</li>
    <li>{{ user.body }}</li>
  </ul> -->

  <!-- data(){
    return{
      users : [],
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
              if(response.status === 200){
                return response.json()
              }else{
                throw new Error("Not Found")
              }
            })
            .then((data)=>{
             this.users = data
              console.log(this.users);
            })
            .catch((error)=>{error.message})
  }, -->
