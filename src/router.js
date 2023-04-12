import { createRouter , createWebHistory} from "vue-router";

import HomePage from './pages/HomePage.vue'

import PostsPage from './pages/PostPage/PostsPage.vue'
import ShowPost from './pages/PostPage/ShowPost.vue'
import CreatePost from './pages/PostPage/CreatePost.vue'
import EditPost from './pages/PostPage/EditPost.vue'

import UsersPage from './pages/UserPages/UsersPage.vue'
import ShowUser from './pages/UserPages/ShowUser.vue'
import NotFoundPage from './pages/NotFoundPage.vue'



const routes = [
  { path : '/' , name : 'HomePage' , component : HomePage },

  { path : '/posts' , name : 'PostsPage' , component : PostsPage },
  { path : '/posts/:id' , name : 'ShowPost' , component : ShowPost },
  { path : '/posts/edit/:id' , name : 'EditPost' , component : EditPost },
  { path : '/posts/create' , name :'CreatePost' , component : CreatePost},

  { path : '/users' , name : 'UsersPage' , component : UsersPage },
  { path : '/users/:id' , name :'ShowUser' , component : ShowUser},
  { path : '/:pathMatch(.*)*' , name : 'NotFound' , component : NotFoundPage },
  
] 

const router =  createRouter({
    history : createWebHistory(),
    routes, 
  })

export default router