<template>
    <div class="container mt-5">
        <div class="row">
            <div v-if="loading" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="col-md-6">
                <CardView :user="user" />
            </div>
        </div>
    </div>
    <!-- <p>{{user}}</p> -->
</template>

<script>
import CardView from '@/components/CardView.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
    components: {
        CardView
    },
    setup() {
        let user = ref({})
        let route = useRoute()
        let loading = ref(true)

        console.log(route);
        function getData() {
            fetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
                .then(res => {
                    loading.value = false
                    return res.json()
                })
                .then(data => {
                    user.value = data
                    console.log(user.value);
                })
        }
        getData()
        return { user , loading}
    }
}
</script>

<style></style>