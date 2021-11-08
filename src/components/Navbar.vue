<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container">
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/login"
            >logout</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link float-right" active-class="active" to="/cart"
            >Cart</router-link
          >
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