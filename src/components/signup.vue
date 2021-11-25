<template>
  <div>
    <div >
      <h2>Sign Form</h2>
      <!--Step 1 : Adding HTML-->
      <!--  :style="{'background-color':'black'}" -->
      
      <form action="">
        <div class="imgcontainer">
          <img src="@/assets/logo.png" alt="Avatar" class="avatar" />
        </div>

        <div class="container">
          <label><b>Username</b></label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
            v-model="usercredentials.name"
          />
           <label><b>Email</b></label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            v-model="usercredentials.email"
          />

          <label><b>Password</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            v-model="usercredentials.password"
          /> 
            <button @click="storeanswers" type="submit">signup</button>
           <router-link to="/"  tag="button"> login</router-link> 
        </div>

        <div class="container" style="background-color: #f1f1f1">
   
        </div>
      </form>
  
    </div>
  </div>
</template>

<script>
import signupcredentials from '@/services/auth.js'
export default {
  name: "signup",
  data(){
    return{
      usercredentials: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
 
  methods: {
    async storeanswers() {
      alert("you are successfully registered");
      try {
        const credentialstosend= this.usercredentials
        console.log(credentialstosend)
        const data = await signupcredentials.signupcredentials(credentialstosend);
        console.log(data);
        // this.$router.push({
        //     name: 'login'
        // });
      } catch (error) {
        console.log("adding data error");
      }
    },
  },
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

input[type="text"],
input[type="password"],
input[type= email] {
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

Zames
Zamea123@gmail.com
Zames@123#