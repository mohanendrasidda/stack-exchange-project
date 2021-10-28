<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container 
    ">
      <ul class="nav navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
          
        </li>
        <li class="nav-item active">
          <router-link class="nav-link float-right" to="/cart">Cart</router-link>
          
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style scoped>

</style>