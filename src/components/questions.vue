<template>
  <div>
    <!-- <div>
      <form>
        <input type="search" v-model="tagged" @change="searchingoption" />
      </form>
      <router-link
        :to="`/questions/${item.question_id}`"
        class="list-group text-reset text-decoration-none"
        v-for="item in questionsdata.items"
        :key="item.question_id"
      >
        <div>{{ item.question_id }}</div>
        <ol class="list-group list-group-numbered">
          <li
            class="
              list-group-item
              d-flex
              justify-content-betwe
              align-items-start
              my-3
              bg-color
            "
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold fs-1 text-danger">
                <h3>{{ item.title }}</h3>
              </div>
              &nbsp;
              <div v-html="item.body"></div>
            </div>
            <span class="badge bg-primary rounded-pill">{{
              item.answer_count
            }}</span>
          </li>
        </ol>
      </router-link>
    </div> -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
      integrity="sha256-3sPp8BkKUE7QyPSl6VfBByBroQbKxKG7tsusY2mhbVY="
      crossorigin="anonymous"
    />

    <div class="container body">
      <div class="row">
        <div class="col-lg-10 mx-auto mb-4">
          <div class="section-title text-center">
            <h3 class="top-c-sep">Ask Me</h3>
            <p>
              Ask me is a question and answer website for professional and
              enthusiast programmers. It is the flagship site of the Stack
              Exchange Network, created in 2008 by Jeff Atwood and Joel Spolsky.
              It features questions and answers on a wide range of topics in
              computer programming.
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="career-search mb-60">
            <form
              novalidate
              @submit.prevent="searchingoption"
              class="career-form mb-60"
            >
              <div class="row">
                <div class="col-md-6 col-lg-3 my-3">
                  <div class="input-group position-relative">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Your Keywords"
                      id="keywords"
                      v-model="q"
                      @change="searchingoption"
                    />
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 my-3">
                  <div class="select-container">
                    <select
                      class="custom-select"
                      v-model="sort"
                      @change="searchingoption"
                    >
                      <option disable selected value="">sort By</option>
                      <option value="1">activity</option>
                      <option value="2">votes</option>
                      <option value="3">creation</option>
                      <option value="3">hot</option>
                      <option value="3">week</option>
                      <option value="3">month</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 my-3">
                  <div class="select-container">
                    <select
                      class="custom-select"
                      v-model="order"
                      @change="searchingoption"
                    >
                      <option disable selected value="">Order By</option>                 
                      <option value="1">asc</option>
                      <option value="2">desc</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 my-3">
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-light btn-custom"
                    id="contact-submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>

            <div class="filter-result">
              <p class="mb-30 ff-montserrat"></p>
              <!-- questions start here -->
              <div v-for="item in questionsdata.items" :key="item.question_id">
                <div class="job-left my-4 align-items-center flex-wrap">
                  <!-- <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                                       {{item.answer_count}}
                                    </div> -->
                  <div class="job-content" >
                    <!-- questions router link starts here -->

                    <router-link
                      class=" question"
                      :to="`/questions/${item.question_id}`"
                    >
                    <div> <label
                      for="h3"><b>Q</b></label> <h3>{{ item.title }}</h3></div>
                    
                    </router-link>

                    <div class="cart-answers flex-fill "> 
                      <div v-html="item.body" class="ans"></div> 
                      <div class="answercount" title="No.of answers">Ans: {{item.answer_count}}</div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getquestions } from "@/services/questions";
export default {
  name: "questions",
  data() {
    return {
      questionsdata: {
        items: [],
      },
      order: "",
      sort: "",
      q: "",
    };
  },
  methods: {
    async searchingoption() {
      try {
        const data = await getquestions(this.order, this.sort, this.q);
        this.questionsdata = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.searchingoption();
  },
};
</script>

<style scoped>

.body{
  background-color: rgb(32, 105, 150);
  width: 100%;
}

.question{
  color: rgb(143, 16, 16);
  overflow: auto;
}
.question:hover{
  color: navy;
}
.cart-answers{
    display: flex;
    background-color:rgb(240, 192, 90);
    flex-wrap: wrap;
    padding: 4em 0 0 2em;
    margin-bottom: 1em;
    border-radius: 1em;
    color: rgb(255, 255, 255); 
    position: relative;
    overflow: auto; 
   
}
.answercount{
  position: absolute;
  left: 92%;
  top: 0.95%;
  font-weight: bold;
  color: rgb(105, 240, 93);
  border-radius: 80%;
  background-color: rgb(216, 22, 22);
  
}
@media screen and (max-width: 300px) {
        .cart-answers {
            display: block;
            float: none;
        }
}
.continer {
  max-width: 1080px;
}
/* .bg-color {
  background-color: rgba(23, 162, 184, 0.4);
} */
body {
  background: #f5f5f5;
  margin-top: 20px;
}

/* ===== Career ===== */
.career-form {
  background-color: rgb(22, 9, 9);
  border-radius: 5px;
  padding: 0 16px;
}

.career-form .form-control {
  background-color: rgba(255, 255, 255, 0.2);
  border: 0;
  padding: 12px 15px;
  color: #fff;
}

.career-form .form-control::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #fff;
}

.career-form .form-control::-moz-placeholder {
  /* Firefox 19+ */
  color: #fff;
}

.career-form .form-control:-ms-input-placeholder {
  /* IE 10+ */
  color: #fff;
}

.career-form .form-control:-moz-placeholder {
  /* Firefox 18- */
  color: #fff;
}

.career-form .custom-select {
  background-color: rgba(255, 255, 255, 0.2);
  border: 0;
  padding: 12px 15px;
  color: #fff;
  width: 100%;
  border-radius: 5px;
  text-align: left;
  height: auto;
  background-image: none;
}

.career-form .custom-select:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.career-form .select-container {
  position: relative;
} 

.career-form .select-container:before {
  position: absolute;
  right: 15px;
  top: calc(50% - 14px);
  font-size: 18px;
  color: #ffffff;
  content: "\F2F9";
  font-family: "Material-Design-Iconic-Font";
}

 .filter-result .job-box {
  -webkit-box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);
  box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);
  border-radius: 10px;
  padding: 10px 35px;
} 




















 ul {
  list-style: none;
}

.list-disk li {
  list-style: none;
  margin-bottom: 12px;
}

.list-disk li:last-child {
  margin-bottom: 0;
}

.job-overview {
  -webkit-box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);
  box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);
  border-radius: 10px;
}

@media (min-width: 992px) {
  .job-overview {
    position: -webkit-sticky;
    position: sticky;
    top: 70px;
  }
}

.job-overview .job-detail ul {
  margin-bottom: 28px;
}

.job-overview .job-detail ul li {
  opacity: 0.75;
  font-weight: 600;
  margin-bottom: 15px;
}

.job-overview .job-detail ul li i {
  font-size: 20px;
  position: relative;
  top: 1px;
}

.job-overview .overview-bottom,
.job-overview .overview-top {
  padding: 35px;
}

.job-content ul li {
  font-weight: 600;
  opacity: 0.75;
  border-bottom: 1px solid #ccc;
  padding: 10px 5px;
}

@media (min-width: 768px) {
  .job-content ul li {
    border-bottom: 0;
    padding: 0;
  }
}

.job-content ul li i {
  font-size: 20px;
  position: relative;
  top: 1px;
}
.mb-30 {
  margin-bottom: 30px;
} 
</style>

