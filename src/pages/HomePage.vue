<template>
  <!-- <h1>{{ title }}</h1> -->
  <div class="container mt-5">
    <div class="row">
        <div class="col-md-6">
            <P>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam est
                 eaque corrupti nobis iste? Sapiente doloremque sunt recusandae blanditiis
                 molestiae praesentium unde corporis sed repellendus sequi perspiciatis ipsum,
                 dolor natus quas vitae debitis nihil! Ratione doloremque suscipit blanditiis
                  temporibus aliquam quos ducimus eveniet adipisci quam iure. Sint impedit quod
                  neque praesentium asperiores sed eius corrupti officia inventore voluptatibus
                  numquam tempore delectus, necessitatibus dolore. Voluptatum inventore saepe corporis.
                  Nesciunt odit voluptatibus dignissimos quia aliquam? Totam dolor impedit eligendi.
                  Modi, repellendus temporibus repellat eveniet doloremque laudantium nulla veritatis
                  error, non consequatur quia esse dolores facere, minus accusantium provident laborum
                  nisi alias obcaecati!
                  
              </P>
              <router-link class="btn btn-dark" :to="{name : 'UsersPage'}">Users</router-link>
              <router-link class="btn btn-light ms-3" :to="{name : 'PostsPage'}">Posts</router-link>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    setup(){
        let title = "Home Page"
        return{title }
    }
}
</script>

<style>

</style>