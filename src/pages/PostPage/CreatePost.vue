<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <h2 class="mb-5">Create Post :</h2>
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
                        <textarea v-model.lazy.trim="forms.body" class="form-control" id="" rows="3"></textarea>
                        <div class="form-text text-danger">
                            {{ forms.bodyError }}
                        </div>
                    </div>
                    <button @click="createPost" class="btn btn-dark" :disabled="loading">
                        <div v-if="loading" class="spinner-border spinner-border-sm" role="status"></div>
                        Create
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
export default {

    setup() {
        let loading = ref(false)
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
                createPost()
            }
        }
        function createPost() {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    userId: 1,
                    title: forms.title,
                    body: forms.body,
                })
            }).then((res) => {
                loading.value = false;
                Swal.fire({
                    title: 'Thanks!',
                    text: 'Poat created',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
                return res.json();
            })
                .then((post) => {
                    console.log(post)
                })

            console.log(forms.title + " " + forms.body);
        }


        return { forms, validate, loading }
    }
}
</script>

<style></style>