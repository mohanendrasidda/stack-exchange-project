<template>
  <div>
    <div>
      <form>
        <input type="search" />
        
      </form>
      <div
        class="list-group"
        v-for="item in allanswers.items"
        :key="item.question_id"
       >
        <div>{{item.question_id}}</div>
        <ol class="list-group list-group-numbered">
          <li
            class="
              list-group-item
              d-flex
              justify-content-between
              align-items-start
              my-3
              bg-color
            "
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold fs-1 text-danger"><h3>{{item.title}}</h3></div>
              &nbsp;
              <div v-html="item.body"></div>
            </div>
            <span class="badge bg-primary rounded-pill">{{item.answer_count}}</span>
          </li>
        </ol>
       
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
      allanswers: {
        items: [],
      },
      order: "",
      sort: "",
    };
  },
  async created() {
    try {
      const data = await getquestions(this.order, this.sort);
      this.allanswers = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.bg-color{
  background-color: rgba(23,162,184,0.4);
}
</style>

