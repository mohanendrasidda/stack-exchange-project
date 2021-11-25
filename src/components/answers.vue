<template>
   <div class="body">
   <!-- <div class="row" v-if="status === 'LOADING'">
      <div class="col-12">
        <app-alert theme="info">
          <template v-slot:heading>Working...</template>
          <template v-slot:body>
            Workshop details are being loaded. Hang on!
          </template>
        </app-alert>
        <app-spinner theme="dark" />
      </div>
    </div> -->
    <div class="row" v-if="status === 'ERROR'">
      <div class="col-12">
        <app-alert theme="danger">
          <template v-slot:heading>Error!</template>
          <template v-slot:body>
            {{ error.message }}
          </template>
        </app-alert>
      </div>
    </div>
    <div v-else >
      <div class="heading">
        <h3>Results</h3>
        <!-- <span v-html="$store.getters.getitems "></span> -->
        <div v-for="i in selecteddata" :key="i.question_id">
          <h2 v-html="i.title"></h2>
        </div>
      </div>
      <div v-for="(i, index) in answersdata.items" :key="i.answer_id">
        <div v-html="i.body" class="cart-answers"></div>

        <button :data-id="index" @click="storeanswers">Add to cart</button>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { getanswers } from "@/services/answers";
import postanswers from "@/services/cart.js";
//import { mapState } from "vuex";
export default {
  name: "Answers",
  props: {
    id: {
      type: [Number, String],
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      answersdata: {},
      status: "LOADING",
      error: null,
    };
  },
  computed: {
    selecteddata() {
      return this.$store.state.questiondata.questionsobject.filter(
        (i) => i.question_id == this.$route.params.id
      );
    },
  },
  async created() {
    try {
      const data = await getanswers(this.order, this.sort, this.id, this.title);
      this.answersdata = data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async storeanswers(event) {
      console.log(event.target.dataset.id);
      console.log(
        "answersdata",
        this.answersdata.items[event.target.dataset.id]
      );
      alert("your answer has been saved to cart");
      try {
        const saveddata = this.answersdata.items[event.target.dataset.id];
        const data = await postanswers.postanswers(saveddata);
        
        console.log('answers data',data);
        // this.$router.push({
        //     name: 'cart'
        // });
        this.status = "LOADED";
        console.log(this.status)
      } catch (error) {
        this.error = error;
        this.status = "ERROR";
      }
    },
  },
  async mounted() {
    try {
      this.$store.dispatch("getquestions", this.q);
      // .then( () => this.$router.push( { name: 'questions' } ) )
    } catch (error) {
      console.log("error in questions.vue store", error);
    }
  },
};
</script>

<style scoped>
.body {
  background-color: rgb(32, 105, 150);
  width: 100%;
  padding: 4em 2em 0 2em;
  border-radius: 5px;
}

.cart-answers {
  display: flex;
  background-color: rgb(255, 205, 111);
  flex-wrap: wrap;
  padding: 4em 0 0 2em;
  margin-bottom: 1em;
  border-radius: 1em;
  color: rgb(255, 255, 255);
  position: relative;
  overflow: auto;
}
.heading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2em 0 2em 0;
}
hr {
  border-top: solid gray;
}
</style>
