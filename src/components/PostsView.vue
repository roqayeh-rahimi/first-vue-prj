<template>
  <div class="card" >
    <div class="card-header">
      <router-link :to="{name : 'ShowPost' , params : {id : post.id}}">{{ post.title }}</router-link>
      <!-- {{ post.title }} -->
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Body : {{ post.body }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props : {
    post : Object
  }
}
</script>

<style></style>


