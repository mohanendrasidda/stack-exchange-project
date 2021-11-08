<template>
  <div>
    <div >
      <h2>Login Form</h2>
      <!--Step 1 : Adding HTML-->
      <form action="" :style="{'background-color':'white'}" @submit.prevent="login">
        <div class="imgcontainer">
          <img src="@/assets/logo.png" alt="Avatar" class="avatar" />
        </div>

        <div class="container">
          <label><b>Username</b></label>
          <input
            type="email"
            placeholder="Enter Username/email"
            name="uname"
            required
            v-model="loginform.email"
          />

          <label><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            v-model="loginform.password"
          />

           <button class="btn btn-primary" type="submit">Login</button>
          <input type="checkbox" checked="checked" /> Remember me
        </div>

        <div class="container" style="background-color: #f1f1f1">
          <router-link class="cancelbtn" to="/register" tag="button">signup</router-link>
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
      loginform: {
        email: '',
        password: ''
      }
    }
  },

     methods: {
            login() {
                this.$store.dispatch( 'login', this.loginform )
                    .then( () => this.$router.push( { name: 'questions' } ) )
                    .catch( error => {
                        alert( error.message );
                    });
            }
        }
};
</script>


<style scoped>
/* .body {
  background-image: url("@/assets/background.png");
} */
form {
  border: 3px solid #f1f1f1;
}
/*assign full width inputs*/

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
/*set a style for the buttons*/

button {
  background-color: rgba(196, 80, 52, 0.5);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
}
/* set a hover effect for the button*/

button:hover {
  opacity: 0.8;
}
/*set extra style for the cancel button*/
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}
/*centre the display image inside the container*/

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}
/*set image properties*/

img.avatar {
  width: 30%;
  border-radius: 5%;
}
/*set padding to the container*/
.container {
  padding: 16px;
}
/*set the forgot password text*/

span.psw {
  float: right;
  padding-top: 16px;
}
/*set styles for span and cancel button on small screens*/

@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>