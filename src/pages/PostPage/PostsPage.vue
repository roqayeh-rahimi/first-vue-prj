<template>
  <!-- <h1>{{ title }}</h1> -->
  <div class="container mt-5">
    <router-link class="btn btn-dark mb-3" :to="{name : 'CreatePost'}">Create Post</router-link>
    <div class="row g-3">
      <!-- <h4>{{title}}</h4> -->
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-4" v-for="post in posts" :key="post.id">
          <PostsView :post="post"/>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import { ref } from 'vue'
import PostsView from '@/components/PostsView.vue'

export default {
  
  components :{
    PostsView
  },

    setup(){
        let title = "Posts"
        let posts = ref([])
        let loading = ref(true) 
        
        function  getPosts(){
          fetch('https://jsonplaceholder.typicode.com/posts')
              .then((response)=>{
                if(response.status === 200){
                  loading.value = false
                  return response.json()
                }else{
                  throw new Error("Not Found")
                }
              })
              .then((data)=>{
                posts.value = data
                console.log(posts.value);
                // console.log(data);
              })
              .catch((error)=>{error.message})
          
        }

        getPosts()
        return{title  , posts , loading}
    },
}
</script>

<style>

</style>




 