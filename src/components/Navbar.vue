<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container">
      <ul class="nav navbar-nav mr-auto">
        <!-- <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/login"
            >logout</router-link
          >
        </li> -->
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link float-right"
            active-class="active"
            to="/cart"
            >Cart</router-link
          >
        </li>
      </ul>
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <span class="nav-link"> Hie {{ email }} </span>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <span class="nav-link cursor-pointer" @click="logout()">Logout</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  computed: {
    // ...mapState( [ 'email' ] ),
    // ...mapGetters( [ 'isAuthenticated' ] )
    email() {
      return this.$store.state.auth.email;
    },
    role() {
      return this.$store.state.auth.role;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
   methods: {
        logout() {
            this.$store.dispatch( 'logout' )
                .then( () => this.$router.push( { name: 'login' } ) );
        }
    }
};
</script>

<style scoped>
</style>