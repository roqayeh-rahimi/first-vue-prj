<template>
    <div class="container mt-5">
        <div class="row">
            <div v-if="loading" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <router-link :to="{ name: 'ShowPost', params: { id: post.id } }">{{ post.title }}</router-link>
                        <!-- {{ post.title }} -->
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Body : {{ post.body }}</li>
                    </ul>
                    <div class="card-footer">
                        <button @click="deletePost" class="btn btn-sm btn-danger me-3">Delete</button>
                        <router-link :to="{name : 'EditPost'}"><button class="btn btn-sm btn-dark">Edit</button></router-link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <p>{{user}}</p> -->
</template>

<script>
// import PostsView from '@/components/PostsView.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Swal from 'sweetalert2'
export default {
    components: {
        // PostsView
    },
    setup() {
        let post = ref({})
        let route = useRoute()
        let loading = ref(true)

        console.log(route);
        function getPost() {
            fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
                .then(res => {
                    loading.value = false
                    return res.json()
                })
                .then(data => {
                    post.value = data
                    console.log(post.value);
                })
        }
        function deletePost() {
            fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
                method: 'DELETE'
            })
                .then(res => {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                    return res.json()
                })
                .then(data => {
                    console.log(data);
                })
        }
        getPost()
        return { post, loading, deletePost }
    }
}
</script>

<style></style>