<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <h3>Você está vendo as nostícias do: {{ championship }}</h3>
      </div>
    </div>

    <component :is="currentComponent"></component>

    <div class="container">
      <div class="row my-club mt-5">
        <div class="col-6">
          <h2>Seu Clube é: {{ myClub }}</h2>
        </div>
        <div class="col-6">
          <ComponentInput v-model="myClub" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentSectionBanner from "./ComponentSectionBanner";
import ComponentInput from "./ComponentInput";
import { mapState } from "vuex";
export default {
  components: {
    ComponentSectionBanner,
    ComponentSectionNews: () => import("./ComponentSectionNews"),
    ComponentInput,
  },
  data() {
    return {};
  },
  props: {
    currentComponent: String,
  },
  computed: {
    ...mapState(["championship"]),
    ...mapState({
      myClub: "clubName",
    }),
  },
};
</script>

<style scoped></style>
