<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <h2 class="mb-5">Update Post :</h2>
                <form action="" @submit.prevent="validate">
                    <div class="mb-3">
                        <label class="form-label">Title</label>
                        <input v-model.lazy.trim="forms.title" type="text" class="form-control" id="" placeholder="">
                        <div class="form-text text-danger">
                            {{ forms.titleError }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Body</label>
                        <textarea v-model.lazy.trim="forms.body" class="form-control" id="" rows="5"></textarea>
                        <div class="form-text text-danger">
                            {{ forms.bodyError }}
                        </div>
                    </div>
                    <button @click="createPost" class="btn btn-dark" :disabled="loading">
                        <div v-if="loading" class="spinner-border spinner-border-sm" role="status"></div>
                        Edit
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'

export default {

    setup() {
        let loading = ref(false)
        let route = useRoute()
        let post = ref({})
        let forms = reactive({
            title: "",
            titleError: "",
            body: "",
            bodyError: "",
        })

        function validate() {
            if (forms.title === "") {
                forms.titleError = "title is requird"
            }
            else {
                forms.titleError = ""
            }

            if (forms.body === "") {
                forms.bodyError = "body is requird"
            }
            else {
                forms.bodyError = ""
            }
            if (forms.title !== "" && forms.body !== "") {
                loading.value = true;
                editPost()
            }
        }
        function getPost() {
            fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    post.value = data
                    forms.title =  post.value.title
                    forms.body =  post.value.body
                    console.log(post.value);
                })
        }
        function editPost() {
            fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id : route.params.id,
                    title : forms.title,
                    body : forms.body,
                    
                })
            }).then((res) => {
                loading.value = false;
                Swal.fire({
                    title: 'Thanks!',
                    text: 'Poat Edit succesfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
                return res.json();
            })
                .then((data) => {
                    post.value = data
                    console.log(post.value );
                })

            console.log(forms.title + " " + forms.body);
        }

        getPost()
        return { forms, validate, loading }
    }
}
</script>

<style></style>